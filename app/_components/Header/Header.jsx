"use client"
import Button from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


function Header() {
  const {user} = useKindeBrowserClient();

  const menu = [
    {
      id:1,
      name:'Home',
      path:'/'
    },
    {
      id:2,
      name:'Explore',
      path:'/explore'
    },
    {
      id:3,
      name:'Contact us',
      path:'/contact'
    }
  ];
  return ( 
    <div className='flex justify-between p-4 lg:px-20 shadow-sm'>
      <div className='flex items-center gap-10'>
        <Image src="/logo.svg" alt='logo' width="200" height="80" />
        <ul className='md:flex gap-8 hidden'>
          {menu.map(items => (
            <Link key={items.id+1} href={items.path}>
              <li className="hover:text-primary cursor-pointer transition-all ease-in-out">{items.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      {

      }
      {
        !user ? <LoginLink><button className="transition ease-in-out text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button></LoginLink>
        : 
          <Popover>
            <PopoverTrigger><Image src={user?.picture} width={50} height={50} alt='User' className='rounded-full' /></PopoverTrigger>
            <PopoverContent className='w-44'>
              <ul className='flex flex-col gap-2'>
                <li className='cursor-pointer hover:bg-slate-100 rounded-md p-3'>Profile</li>
                <li className='cursor-pointer hover:bg-slate-100 rounded-md p-3'><Link href={'/my-booking'}>My Booking</Link></li>
                <li className='cursor-pointer hover:bg-slate-100 rounded-md p-3'><LogoutLink>Logout</LogoutLink></li>
              </ul>
              
            </PopoverContent>
          </Popover>
      }
      
      
      

      {/* <RegisterLink postLoginRedirectURL="/welcome">Sign up</RegisterLink> */}
    </div>
   );
}

export default Header;