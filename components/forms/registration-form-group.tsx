"use client"

import { VisitorForm } from "@/components/forms/visitor-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MemberFrom } from "./member-form";


export function RegistrationFormGroup() {
 
  return (
    <Tabs defaultValue="member" className="h-20 "  >
    <TabsList className="grid w-full grid-cols-2 h-14">
      <TabsTrigger className="h-12" value="member">Member</TabsTrigger>
      <TabsTrigger className="h-12" value="visitor">Visitor</TabsTrigger>
    </TabsList>
    <TabsContent value="member">
   
      <MemberFrom />

      </TabsContent>
    <TabsContent value="visitor">
   
      <VisitorForm />

      </TabsContent>
      
      
</Tabs>
      
   
  )
}
