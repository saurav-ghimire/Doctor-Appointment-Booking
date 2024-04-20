import Image from "next/image";
import Link from "next/link";


function DoctorList({DoctorList, title}) {
  
  return ( 
    <div className='mb-10'>
      {
        title? <h2 className='font-bold text-4xl tracking-wide mb-4'>{title}</h2> :
      <h2 className='font-bold text-4xl tracking-wide mb-4'>Popular <span className='text-primary'> Doctors</span></h2>
      }
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
        {
          DoctorList.length>0 ? DoctorList.map((doctor,index)=>(
            <div key={index} className='border-[1px] rounded p-3' >
            <Image src={doctor?.attributes?.Image?.data?.attributes?.url}
            alt='Doctor'
            height='500'
            width='200'
            className='h-[300px] w-full object-cover rounded-lg'
             />
             <div className='mt-3 items-baseline flex flex-col gap-2'>
                <h2 className='text-[14px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{doctor?.attributes?.category?.data?.attributes?.Name}</h2>
                <h2 className='font-bold text-xl'>Dr. {doctor?.attributes.Name}</h2>
                <h2 className='text-primary text-sm'>{doctor?.attributes?.Experience} Years</h2>
                <h2 className='text-gray-500 text-sm'>{doctor?.attributes?.Address}</h2>
                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full  w-full text-center mt-2 cursor-pointer hover:bg-primary hover:text-white transition-all ease-in-out'><Link href={`/details/${doctor?.id}`}>Book Now</Link></h2>
             </div>
            </div>
          ))
          :
          [1,2,3,4,5,6].map((items, index) => (
            <div key={items} className='h-[200px] bg-slate-100 w-full rounded-lg animate-pulse'>
            
            </div>
          ))
        }
      </div>
    </div>
   );
}

export default DoctorList;