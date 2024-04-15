"use client"
import { useState, useEffect } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


function CategoryList() {

  const [categories, setCategories] = useState([]);
  const getCategoryList = async () => {
    GlobalApi.getCategories().then(res=>{
      setCategories(res.data.data)
    })
  }
  useEffect(() => {
    getCategoryList();
  },[]);
  
  const path = usePathname();
  const category =  decodeURIComponent(path.split('/')[2]);
  

  return ( 
    <div className='h-screen flex flex-col mt-5 mr-20'>
        <h2 className='font-bold text-xl tracking-wide mb-4'>Suggestions</h2>
            {
              categories && categories.map((item, index)=> (
                
                  <Link key={item.id} href={`/search/${item.attributes.Name}`} className={`p-2 flex gap-2 items-center text-[16px] text-primary rounded cursor-pointer	hover:bg-blue-100 mb-2 transition-all ease-in-out
                  ${category==item.attributes.Name && 'bg-blue-100'}
                  `}>
                    <div className='opacity-100 flex items-center p-2 cursor-pointer'>
                    <Image
                      src={item?.attributes?.Icon?.data?.attributes?.url}
                      width={22}
                      height={22}
                      alt="icon"
                      className='mr-2'
                    />
                    {item?.attributes?.Name}
                    </div>
                  </Link>
                
              ))
            }
          

      
    </div>
   );
}

export default CategoryList;
