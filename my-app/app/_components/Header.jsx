"use client"
import { Button } from '@/components/UI/button'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Gamepad2, Search, ShoppingBag } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/UI/dropdown-menu'
import GlobalApi from "../_utils/GlobalApi";

  
function Header() {
    
    useEffect(() => {
        getCategoryList()
},[])

    //get Category List
    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            console.log("CategoryList Resp", resp.data.data);
        })
    }
    

  return (
      <div className='p-5 shadow-sm flex justify-between'>
          <div className='flex items-center gap-8'>
          <Image src='/adobe.png' alt="Logo" width={150}
              height={100}
          />
              
              
              <DropdownMenu>
                  <DropdownMenuTrigger asChild >
                      <h2 className='hidden md:flex gap-3 items-center
                   px-5 bg-slate-200 cursor-pointer z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
                  '>
                          <Gamepad2 className='h-5 w-5' />Category</h2>
                  </DropdownMenuTrigger>
               <DropdownMenuContent>
                <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
               </DropdownMenuContent>
              </DropdownMenu>

              <div className=' md:flex gap-3 items-center border rounded-full p-2 px-5'>
                  
                  <Search />
                  <input type='text'
                      placeholder='Search'
                      className='outline-none '
                  />
              </div>
              
          </div>
          <div className='flex gap-5 items-center'>
          <h2 className='flex gap-2 items-center text-lg'><ShoppingBag/>0</h2>
              <Button>Login</Button>
          </div>
    </div>
  )
}

export default Header
