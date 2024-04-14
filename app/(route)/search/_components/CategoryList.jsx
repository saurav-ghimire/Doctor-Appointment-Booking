"use client"
import { useState, useEffect } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link";


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

  console.log(categories);
  
  return ( 
    <div className='h-screen flex flex-col mt-5'>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {
              categories&&categories.map((item, index)=> (
                <CommandItem>
                  <Link href={''}>
                    <label>{item?.attributes?.Name}</label>
                  </Link>
                </CommandItem>
              ))
            }
          </CommandGroup>          
        </CommandList>
      </Command>
    </div>
   );
}

export default CategoryList;