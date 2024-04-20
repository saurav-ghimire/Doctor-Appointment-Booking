import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin } from "lucide-react";

import Image from "next/image";

function DoctorDeails({doctor}) {
  const socialMedia = [
    {
      id: 1,
      icon: '/facebook.svg'
    },
    {
      id: 2,
      icon: '/insta.svg'
    },
    {
      id: 3,
      icon: '/twitter.svg'
    },
    {
      id: 4,
      icon: '/linkedin.svg'
    },
  ];
  return ( 
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
          {/* Doctor Image */}
          <div>
          <Image src={doctor?.attributes?.Image?.data?.attributes?.url}
            alt='Doctor'
            height='500'
            width='200'
            className='h-[300px] w-full object-cover rounded-lg'
             />
          </div>
          <div className='cols-span-2 mt-5 md:px-10 flex flex-col gap-3 items-baseline'>
        {/* doctor info */}
        <h2 className='font-bold text-2xl '>{doctor?.attributes?.Name}</h2>
        <h2 className ='flex gap-2 text-md text-gray-500'>
          <GraduationCap /> {doctor?.attributes?.Experience} Years of Experience
          </h2>
          <h2 className ='flex gap-2 text-md text-gray-500'>
          <MapPin /> {doctor?.attributes?.Address}
          </h2>
          
          {doctor?.attributes?.category?.data?.attributes?.Name && (
          <h2 className='text-[14px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
            {doctor?.attributes?.category?.data?.attributes?.Name}
          </h2>
        )}
        <div className='flex gap-3 mt-5'>
          {
            socialMedia.map(items => (
              <Image height={30} width={30} alt='logo' src={items.icon} />
            ))
          }
        </div>

        <Button className='mt-3 rounded-full'>Book Appointment</Button>
          
      </div>
      
      </div>
      <div className='p-3 border-[1px] rounded-lg mt-3'>
        <h2 className='font-bold text-[20px]'>About Me</h2>
        {doctor?.attributes?.About?.map((paragraph, index) => (
            <p key={index} className='text-gray-500 tracking-wide mt-2'>{paragraph.children[0].text}</p>
          ))}
        
      </div>
      </>
   );
}

export default DoctorDeails;