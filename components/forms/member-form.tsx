"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostHog } from "posthog-js/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { addDays, format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useStoreDispatch, useStoreSelector } from "@/hooks/useStore";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "../ui/checkbox";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const GenderEnum = z.enum(["male", "female"]);

const visitorFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  day_of_visit: z.date(),
  phone_number: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email format"),
  // if is married is true, then marriage date is required
  is_married: z.boolean(),
  marriage_date: z.date().refine(
    (value: any) => {
      if (value.is_married) {
        return !!value;
      }
      return true;
    },
    {
      message: "Marriage date is required if married",
    }
  ),

  is_baptized: z.boolean(),
  baptism_date: z.date().refine((value: any) => !value.is_baptized || !!value, {
    message: "Baptism date is required if baptized",
  }),
  is_born_again: z.boolean(),
  born_again_date: z
    .date()
    .refine((value: any) => !value.is_born_again || !!value, {
      message: "Born again date is required if born again",
    }),

  tribe: z.string().min(1, "Tribe is required"),
  location_name: z.string().min(1, "Location name is required"),
  nationality: z.string().min(1, "Nationality is required"),
  gender: GenderEnum,
});

type AccountFormValues = z.infer<typeof visitorFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // first_name: "Inno",
  // last_name: "Lupamba",
  day_of_visit: new Date("2023-11-01"),
  // phone_number: "2342342",
  // email: "34adf@adsfa.com",
  is_married: true,
  marriage_date: new Date("2023-11-01"),
  is_baptized: true,
  baptism_date: new Date("2023-11-01T12:00:00"),
  is_born_again: true,
  born_again_date: new Date("2023-11-01T12:00:00"),
  tribe: "asdfas",
  // location_name: "asdfasf",
  // nationality: "asdfasdf",
  gender: "female",
};

export function MemberFrom() {
  const dispatch = useStoreDispatch();
  const [dateOfVisit, setDateOfVisit] = useState<Date>(new Date());
  const [marriageDate, setMarriageDate] = useState<Date>(new Date());
  const [baptismDate, setBaptismDate] = useState<Date>(new Date());
  const [bornAgainDate, setBornAgainDate] = useState<Date>(new Date());

  const router = useRouter();
  // let user = useStoreSelector(storedUser);
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(visitorFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: AccountFormValues) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        {/* using grid show 3 cols on desktop and 2 on tablet 1 on mbile */}
        <div className="grid grid-cols-1 items-center justify-center gap-4 px-8 md:grid-cols-2  md:px-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Visitor 3" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Visitor 3" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="2342342" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="34adf@adsfa.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tribe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tribe</FormLabel>
                <FormControl>
                  <Input placeholder="asdfas" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location Name</FormLabel>
                <FormControl>
                  <Input placeholder="asdfasf" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality</FormLabel>
                <FormControl>
                  <Input placeholder="asdfasdf" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="day_of_visit"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Visit</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateOfVisit ? (
                        format(dateOfVisit, "PPP")
                      ) : (
                        <span>Pick a dateOfVisit</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                    <Select
                      onValueChange={(value: string) =>
                        setDateOfVisit(addDays(new Date(), parseInt(value)))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="0">Today</SelectItem>
                        <SelectItem value="-1">Yesterday</SelectItem>
                        <SelectItem value="-7">Last week</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="rounded-md border">
                      <Calendar
                        mode="single"
                        selected={dateOfVisit}
                        onSelect={(value: Date | undefined) => {
                          if (value) {
                            setDateOfVisit(value);
                          }
                        }}
                      />
                    </div>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col space-y-2">
            <FormField
              control={form.control}
              name="is_married"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1 mr-4">Married</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.getValues("is_married") && (
              <FormField
                control={form.control}
                name="marriage_date"
                render={({ field }) => (
                  // if is married is true, then hide the field

                  <FormItem className="flex flex-col">
                    <FormLabel>Marriage Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {marriageDate ? (
                            format(marriageDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                        <Select
                          onValueChange={(value: string) =>
                            setMarriageDate(
                              addDays(new Date(), parseInt(value))
                            )
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="0">Today</SelectItem>
                            <SelectItem value="-1">Yesterday</SelectItem>
                            <SelectItem value="-7">Last week</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="rounded-md border">
                          <Calendar
                            mode="single"
                            selected={marriageDate}
                            onSelect={(value: Date | undefined) => {
                              if (value) {
                                setMarriageDate(value);
                              }
                            }}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <FormField
              control={form.control}
              name="is_baptized"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1 mr-4">Baptized</FormLabel>
                  <FormControl>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.getValues("is_baptized") && (
              <FormField
                control={form.control}
                name="baptism_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Baptism Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {baptismDate ? (
                            format(baptismDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                        <Select
                          onValueChange={(value: string) =>
                            setBaptismDate(addDays(new Date(), parseInt(value)))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="0">Today</SelectItem>
                            <SelectItem value="-1">Yesterday</SelectItem>
                            <SelectItem value="-7">Last week</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="rounded-md border">
                          <Calendar
                            mode="single"
                            selected={baptismDate}
                            onSelect={(value: Date | undefined) => {
                              if (value) {
                                setBaptismDate(value);
                              }
                            }}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <FormField
              control={form.control}
              name="is_born_again"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-1 mr-4">Born Again</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.getValues("is_born_again") && (
              <FormField
                control={form.control}
                name="born_again_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Born Again Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {bornAgainDate ? (
                            format(bornAgainDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                        <Select
                          onValueChange={(value: string) =>
                            setBornAgainDate(
                              addDays(new Date(), parseInt(value))
                            )
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="0">Today</SelectItem>
                            <SelectItem value="-1">Yesterday</SelectItem>
                            <SelectItem value="-7">Last week</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="rounded-md border">
                          <Calendar
                            mode="single"
                            selected={bornAgainDate}
                            onSelect={(value: Date | undefined) => {
                              if (value) {
                                setBornAgainDate(value);
                              }
                            }}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </div>
        <div className="my-6 flex w-full flex-row items-center justify-center gap-4 space-x-2 px-4">
          <Button type="submit" className={cn("w-1/2 ")}>
            Register
          </Button>
          <Button
            variant="ghost"
            className={cn("w-1/2 ")}
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
