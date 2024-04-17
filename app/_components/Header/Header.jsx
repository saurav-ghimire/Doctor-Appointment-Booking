"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useEffect } from "react";


function Header() {
  const {user} = useKindeBrowserClient();
  useEffect(() => {
    console.log(user);
  })
  const menu = [
    {
      id:1,
      name:'Home',
      path:'/'
    },
    {
      id:2,
      name:'Explore',
      path:'/'
    },
    {
      id:3,
      name:'Contact us',
      path:'/'
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
        !user ? <LoginLink><Button>Get Started</Button></LoginLink> : <LogoutLink><Button>Log out</Button></LogoutLink>
      }
      
      
      

      {/* <RegisterLink postLoginRedirectURL="/welcome">Sign up</RegisterLink> */}
    </div>
   );
}

export default Header;