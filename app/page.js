"use client"
import Banner from "./_components/Banner/Banner";
import DoctorList from "./_components/DoctorList/DoctorList";
import Search from "./_components/Search/Search";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  
const [Doctors, setDoctors] = useState([]);

const getAllDoctorList = async () => {
  GlobalApi.getDoctorList().then(res=>{
    setDoctors(res.data.data)
  })
}
useEffect(() => {
  getAllDoctorList();
},[])


  return (
    <div>
      <Banner />
      <Search />
      <DoctorList DoctorList={Doctors} />
    </div>
  );
}
