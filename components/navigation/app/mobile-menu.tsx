'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'

import { IconSidebar } from '@/components/ui/icons'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Icons } from '@/components/misc/icons'

interface MobileMenuProps {
  children: React.ReactNode
}

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="-ml-2 flex h-9 w-9 p-0 lg:hidden">
          <IconSidebar className="h-6 w-6" />
          
        </Button>
      </SheetTrigger>
      <SheetContent className="inset-y-0 flex h-auto w-full flex-col p-0">
        <Sidebar className="flex">
       

       <div className="flex flex-col items-center justify-center px-4 py-6 space-y-4">
         <div className="flex items-center justify-center">
           <Link href="/"  className="flex items-center justify-center">
               <Icons.logo className="h-6 w-6" />
               <span className="ml-2 text-xl font-bold">
                 {siteConfig.name}
               </span>
             

           </Link>
         </div>

       
           {siteConfig.mainNav.map((item) => (
             <div className="space-y-2 px-2" key={item.title}>
               <Link
                 href={item.href}
                 className="flex items-center justify-between text-sm font-medium"
               >
                 <div className="flex items-center">
                   {/* get the string icon name and render the icon */}
                   {/* {item.icon && (
                     <item.icon className="h-6 w-6 text-gray-400" />
                   )} */}
                   <span className="ml-2 ">{item.title}</span>
                 </div>
               </Link>
             </div>
           ))}

           </div>
          

        </Sidebar>
      </SheetContent>
    </Sheet>
  )
}
