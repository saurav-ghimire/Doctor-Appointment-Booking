"use client"
import DoctorDeails from "@/app/_components/DoctorDetails/DoctorDetails";
import DoctorSuggestion from "@/app/_components/DoctorSuggestion/DoctorSuggestion";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";



function Details({params}) {
  const [doctor, setDoctor] = useState();
  
  useEffect(() => {
    getDoctorById();
  },[]);
  const getDoctorById = async () => {
    GlobalApi.getDoctorByID(params.id).then(resp=>{
      setDoctor(resp.data.data);
    })
  }
  console.log(doctor);
  return ( 
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'>Details</h2>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='col-span-3'>
          {doctor&& <DoctorDeails doctor={doctor}/>}
        </div>
        <div className='col-span-1'>
          {/* doctor Suggestion */}
          <DoctorSuggestion />
        </div>
      </div>
    </div>
   );
}

export default Details;