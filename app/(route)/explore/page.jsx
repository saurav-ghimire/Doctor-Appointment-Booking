import Image from "next/image";
import Link from "next/link";

function Explore() {
  return ( 
    <>
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-3xl sm:h-80 lg:order-last lg:h-full">
        <Image
          alt="Doctors"
          src="/doctors.jpg"
          width={900}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find & Book <span className='text-primary'>Appointments</span> with Your <span className='text-primary'>Doctor</span></h2>

        <p className="mt-4 text-gray-600">
          Welcome to our platform where you can easily find and book appointments with trusted doctors. Whether you need a routine check-up or specialized care, we've got you covered. Say goodbye to long waiting times and tedious phone calls – with just a few clicks, you can secure your appointment hassle-free.
        </p>

        <Link href={'/contact'}><button className='mt-10 transition ease-in-out text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Contact us</button></Link>
      </div>
    </div>
  </div>
</section>

    </>
   );
}


export default Explore;