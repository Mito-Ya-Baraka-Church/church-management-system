"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VisitorForm } from "../forms/visitor-form";
import { MemberFrom } from "../forms/member-form";

export function RegistrationTabs() {
  return (
    <Tabs defaultValue="member" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="visitor">Visitor</TabsTrigger>
        <TabsTrigger value="member">Member</TabsTrigger>
      </TabsList>
      <TabsContent value="visitor">
        <Card>
          <CardHeader>
            <CardTitle>Visitor Registration</CardTitle>
            <CardDescription>Register as a visitor here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <VisitorForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="member">
        <Card>
          <CardHeader>
            <CardTitle>Member Registration</CardTitle>
            <CardDescription>Register as a member here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <MemberFrom />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
