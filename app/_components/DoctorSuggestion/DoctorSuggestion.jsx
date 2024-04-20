import GlobalApi from "@/app/_utils/GlobalApi";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function DoctorSuggestion() {
  const [doctors, setDoctors] = useState([]);

  const getAllDoctorList = async () => {
    try {
      const res = await GlobalApi.getDoctorList();
      setDoctors(res.data.data);
    } catch (error) {
      console.error("Error fetching doctor list:", error);
    }
  };

  useEffect(() => {
    getAllDoctorList();
  }, []);

  return (
    <div className='pl-10' >
      
      <div className='border-[1px] rounded-lg mt-5 p-3'>
      <h2 className='font-bold text-[18px]'>Suggestions</h2>
        {doctors.map((doctor) => (
          <Link href={'/details/' + doctor?.id }>
          <div key={doctor.id} className="bg-white rounded-lg p-4 flex mt-2 transition-all ease-in-out shadow-sm hover:bg-gray-100">

            
            {/* Doctor Image */}
            <div className="mr-4">
              <img
                src={doctor?.attributes?.Image?.data?.attributes?.url}
                alt="Doctor"
                height={50}
                width={50}
                className='h-[50px] w-full object-cover rounded-full'
              />
            </div>
            {/* Doctor Details */}
            <div className='flex flex-col items-baseline'> 
            {doctor?.attributes?.category?.data?.attributes?.Name && (
              <h2 className='text-[14px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
                {doctor?.attributes?.category?.data?.attributes?.Name}
              </h2>
            )}
              <h2 className="text-md font-semibold">{doctor?.attributes?.Name}</h2>
              <p className="text-primary text-[15px] flex gap-2"><GraduationCap /> {doctor?.attributes?.Experience} Years</p>
            </div>
            </div>
            </Link>
          
        ))}
      </div>
    </div>
  );
}

export default DoctorSuggestion;
