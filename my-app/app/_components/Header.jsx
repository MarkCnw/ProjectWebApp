import React from 'react'
import Image from 'next/image'
import { Gamepad2, Search } from 'lucide-react'
import { Button } from '@/components/UI/button'

function Header() {
  return (
      <div className='p-5 shadow-md'>
          <div className='flex items-center gap-8'>
          <Image src='/adobe.png' alt="Logo" width={150}
              height={100}
          />
              
                  <h2 className='md:flex gap-3 items-center
                  border rounded-full p-2 px-5 bg-slate-200
                  hidden'>
                  <Gamepad2 className='h-5 w-5' />Category</h2>
              <div className='flex gap-3 items-center border rounded-full p-2 px-5'>
                  
                  <Search />
                  <input type='text'
                      placeholder='Search'
                      className='outline-none '
                  />
              </div>
              
          </div>
          <div>
              
              <Button>Login</Button>
          </div>
    </div>
  )
}

export default Header
