import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


function Header() {
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
      id:1,
      name:'Contact us',
      path:'/'
    }
  ];
  return ( 
    <div className='flex justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-10'>
        <Image src="/logo.svg" alt='logo' width="200" height="80" />
        <ul className='md:flex gap-8 hidden'>
          {menu.map(items => (
            <Link href={items.path}>
              <li className="hover:text-primary cursor-pointer transition-all ease-in-out">{items.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
   );
}

export default Header;