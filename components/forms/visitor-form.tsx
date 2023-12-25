"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { usePostHog } from "posthog-js/react"
import { useDirectus } from "react-directus"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { addDays, format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useStoreDispatch, useStoreSelector } from "@/hooks/useStore"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "../ui/checkbox"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

import { nationalities } from "@/lib/form-utils"
import { ethnicGroups } from "@/lib/form-utils" 

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"



const visitorFormSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  day_of_visit: z.date(),
  phone_number: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email format"),
  // if is married is true, then marriage date is required
  is_married: z.boolean(),
  marriage_date: z.date().refine((value: any) => {
    if (value.is_married) {
      return !!value;
    }
    return true;
  }, {
    message: "Marriage date is required if married",
  }),


  is_baptized: z.boolean(),
  baptism_date: z.date().refine((value: any) => !value.is_baptized || !!value, {
    message: "Baptism date is required if baptized",
  }),
  is_born_again: z.boolean(),
  born_again_date: z.date().refine((value: any) => !value.is_born_again || !!value, {
    message: "Born again date is required if born again",
  }),

  is_member: z.boolean(),
  tribe: z.string().min(1, "Tribe is required"),
  location_name: z.string().min(1, "Location name is required"),
  nationality: z.string().min(1, "Nationality is required"),
  gender: z.string().min(1, "Gender is required"),
});

type AccountFormValues = z.infer<typeof visitorFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  full_name: "",
  day_of_visit: new Date(),
  phone_number: "",
  email: "",
  is_married: true,
  marriage_date: new Date("2023-11-01"),
  is_baptized: true,
  baptism_date: new Date("2023-11-01T12:00:00"),
  is_born_again: true,
  born_again_date: new Date("2023-11-01T12:00:00"),
  is_member: true,
  tribe: "",
  location_name: "",
  nationality: "Tanzanian",
  gender: "male",
};

export function VisitorForm() {
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

  const tribes = ethnicGroups;

  return (


    <Card>
    <CardHeader className="text-center">

      <CardTitle>Visitor Registration</CardTitle>
      <CardDescription>Add Visitor Details</CardDescription>
    </CardHeader>
    <CardContent>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* using grid show 3 cols on desktop and 2 on tablet 1 on mbile */}
        <div className="grid grid-cols-1 gap-6 px-2 md:grid-cols-2 lg:grid-cols-3 md:px-2 ">

          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem >
               {/* <FormLabel>Full Name</FormLabel> */}
                <FormControl className="h-14 rounded-xl ">
                  <Input placeholder="Full Name"  {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem  >
                {/* <FormLabel>Phone Number</FormLabel> */}
                <FormControl className="h-14 rounded-xl ">
                  <Input placeholder="Phone Number"  {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
<FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem  >
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl className="h-14 rounded-xl ">
                  <Input placeholder="Email"  {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
<FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem >
                {/* <FormLabel>Gender</FormLabel> */}
                <FormControl className="h-14 rounded-xl " >
                  {/* <Input placeholder="Gender"  {...field}/> */}
                  <Select
                  
                          // onValueChange={(value: string) =>
                          //   setMarriageDate(addDays(new Date(), parseInt(value))
                          //   )}
                          
                        >
                          <SelectTrigger className="h-14 rounded-xl">
                            <SelectValue placeholder="Gender"  {...field}/>
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                   </Select>       
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem >
                {/* <FormLabel>Nationality</FormLabel> */}
                <FormControl className="h-14 rounded-xl ">
                <Select
                  
                  // onValueChange={(value: string) =>
                  //   setMarriageDate(addDays(new Date(), parseInt(value))
                  //   )}
                   {...field} 
                >
                  <SelectTrigger className="h-14 rounded-xl ">
                    <SelectValue placeholder="Nationality"/>
                  </SelectTrigger>
                  <SelectContent position="popper" className="h-36">
                    {nationalities.map((nationality,index)=>(<SelectItem value={nationality}  >{nationality}</SelectItem>))}
                  </SelectContent>
           </Select>       
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="tribe"
            render={({ field }) => (
              <FormItem >
                {/* <FormLabel>Tribe</FormLabel> */}
                <FormControl className="h-14 rounded-xl ">
                <Select
                  
                  // onValueChange={(value: string) =>
                  //   setMarriageDate(addDays(new Date(), parseInt(value))
                  //   )}
                  
                >
                  <SelectTrigger className="h-14 rounded-xl ">
                    <SelectValue placeholder="Tribe"  {...field}/>
                  </SelectTrigger>
                  <SelectContent position="popper" className="h-36">
                    {tribes.map((tribe,index)=>(<SelectItem value={tribe}  >{tribe}</SelectItem>))}
                  </SelectContent>
           </Select>       
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          

          <FormField
            control={form.control}
            name="is_member"
            render={({ field }) => (
              <FormItem className="flex items-center h-full">
                <div>
                <FormLabel className="ml-6 mr-3">Member</FormLabel>
                <FormControl className="w-4 h-4" >
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}

                  />
                </FormControl></div>
                <FormMessage />
              </FormItem>
            )}
          />

        

          <FormField
            control={form.control}
            name="location_name"
            render={({ field }) => (
              <FormItem >
                {/* <FormLabel>Location Name</FormLabel> */}
                <FormControl className="h-14 rounded-xl ">
                  <Input placeholder="Location" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

       
     

          <FormField
            control={form.control}
            name="day_of_visit"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                {/* <FormLabel>Date of Visit</FormLabel> */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " col-auto md:row-auto justify-start text-left font-normal h-14 rounded-xl",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="w-4 h-4 mr-2" /> <span className="mr-3 font-bold">Date of Visit : </span>  
                      {dateOfVisit ? format(dateOfVisit, "PPP") : <span>Pick a dateOfVisit</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="flex flex-col w-auto p-2 space-y-2">
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
                    <div className="border rounded-md">
                      <Calendar
                        mode="single" selected={dateOfVisit} onSelect={(value: Date | undefined) => {
                          if (value) {
                            setDateOfVisit(value);
                          }
                        }}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  <span className="ml-3 italic"> Date of visit must be in the past 10 days or today</span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col space-y-2">
            <FormField
              control={form.control}
              name="is_married"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="ml-6 mr-3">Married</FormLabel>
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
                    {/* <FormLabel>Marriage Date</FormLabel> */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " justify-start text-left font-normal h-14 rounded-xl",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="w-4 h-4 mr-2" /><span className="mr-3 font-bold">Marriage Date : </span>  
                          {marriageDate ? format(marriageDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-col w-auto p-2 space-y-2">
                        <Select
                          onValueChange={(value: string) =>
                            setMarriageDate(addDays(new Date(), parseInt(value))
                            )}
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
                        <div className="border rounded-md">
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
                <FormItem className="">
                  <FormLabel className="ml-6 mr-3 my- ">Baptized</FormLabel>
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
                    {/* <FormLabel>Baptism Date</FormLabel> */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " justify-start text-left font-normal h-14 rounded-xl",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="w-4 h-4 mr-2" /><span className="mr-3 font-bold">Baptism Date : </span>  
                          {baptismDate ? format(baptismDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-col w-auto p-2 space-y-2">
                        <Select
                          onValueChange={(value: string) =>
                            setBaptismDate(addDays(new Date(), parseInt(value))
                            )}
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
                        <div className="border rounded-md">
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
                <FormItem className="">
                  <FormLabel className="ml-6 mr-3" >Born Again</FormLabel>
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
                    {/* <FormLabel>Born Again Date</FormLabel> */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "justify-start text-left font-normal h-14 rounded-xl",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="w-4 h-4 mr-2" /><span className="mr-3 font-bold">Born Again Date : </span>  
                          {bornAgainDate ? format(bornAgainDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-col w-auto p-2 space-y-2">
                        <Select
                          onValueChange={(value: string) =>
                            setBornAgainDate(addDays(new Date(), parseInt(value))
                            )}
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
                        <div className="border rounded-md">
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
     
      </form>

    </Form>

    </CardContent>
      <CardFooter className="flex justify-between">
      <div className="flex flex-col items-center gap-2 p-6 md:flex-row md:gap-9 md:justify-center md:w-full">
          <Button type="submit" className={cn("w-1/4 ")}>
            Register
          </Button>

          <Button variant="outline"className={cn("w-1/4  text-center ")}><Link href="/auth/sign-in" >Cancel</Link></Button>

        </div>
      </CardFooter>
    </Card>
  );
}
