"use client"
import DoctorList from "@/app/_components/DoctorList/DoctorList";
import GlobalApi from "@/app/_utils/GlobalApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



function Search({params}) {
  
  const path = usePathname();
  const category =  decodeURIComponent(path.split('/')[2]);

  const [doctor, setDoctor] = useState([]);
  const [filteredDoctor, setFilteredDoctor] = useState([]);


  const getDoctorList = async () => {
    GlobalApi.getDoctorByCategory(params.cname).then(res => {
      // Filter the doctors based on the category name
      
        const filtered = res.data.data.filter(doc => doc?.attributes?.category?.data?.attributes?.Name === category);
      
      setDoctor(res.data.data);
      setFilteredDoctor(filtered);
    });
  };

  useEffect(() => {
    getDoctorList();
  },[]);
  
  
  return ( 
  <div className='pt-5'>
    {
      filteredDoctor.length < 1 ?
      <h2>Doctors Not Available</h2>
      : <DoctorList DoctorList={filteredDoctor} title={category} />
    }
    
  </div>
   );
}

export default Search;