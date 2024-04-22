"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { SearchIcon } from "lucide-react";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


function Search() {
  const [categories, setCategories] = useState([]);
  const getCategoryList = async () => {
    GlobalApi.getCategories().then(res=>{
      setCategories(res.data.data)
    })
  }
  useEffect(() => {
    getCategoryList();
  },[])

  
  return (
    <div className='mb-10 flex items-center flex-col'>
      <h2 className='font-bold text-4xl tracking-wide mb-4'>Search <span className='text-primary'> Doctors</span></h2>
      <h2 className='text-grey-400 text-xl'>Search your doctor and book appointment in one click</h2>
      <div className='flex w-full max-w-sm align-center mt-5'>
        <Input placeholder='Search...' />
        <button className='ml-2'><SearchIcon className='h-4 w-4 mr-2' />Search</button>
      </div>

      {/* Display List of Categories */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5'>
        {categories.length>0 ? categories.map((data,index) => (
          
          <Link href={'/search/'+data.attributes.Name} key={data.id} className='flex flex-col items-center text-center gap-2 rounded-lg p-5 bg-blue-50 hover:scale-105 transition-all ease-in-out cursor-pointer'>
            
            <Image src={data?.attributes?.Icon?.data?.attributes?.url}
            width={40}
            height={40}
            alt="icon"
            />
            <label className='text-blue-500'>{data?.attributes?.Name}</label>
          </Link>
        ))
        :
        [1,2,3,4,5,6].map((items, index) => (
          <div key={items} className='h-[120px] bg-slate-100 w-[150px] rounded-lg animate-pulse'>
            
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Search;