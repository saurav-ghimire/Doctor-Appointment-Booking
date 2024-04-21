"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from "./_components/booking-list";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";

function MyBooking() {
  const {user} = useKindeBrowserClient();
  const [bookingList, setBookingList] = useState([]);
  useEffect(() => {
    user&&getUserBookingList();
  },[user])

  const getUserBookingList=() => {
     GlobalApi.getUserBookingList(user?.email).then(res => {
      setBookingList(res.data.data)
     })
    }

    const filterBooking = (type) => {
      const currentDate = new Date();
      const result = bookingList.filter(item =>
        type === 'upcoming' ? new Date(item.attributes.Date) >= currentDate
          : new Date(item.attributes.Date) < currentDate
      );
      console.log(result);
      return result;
    };
    
 
  return ( 
    <div className="px-4 sm:px-10 mt-10">
      <h2 className='font-bold text-2xl'>My Booking</h2>

      <Tabs defaultValue="upcoming" className="w-full my-5">
      <TabsList className='w-full flex justify-start'>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="expired">Expired</TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming">
        <BookingList expired={false} bookingList={filterBooking('upcoming')} updateRecord={getUserBookingList} />
      </TabsContent>
      <TabsContent value="expired">
      <BookingList expired={true} bookingList={filterBooking('expired')} updateRecord={getUserBookingList} />
      </TabsContent>
    </Tabs>

    </div>
   );
}

export default MyBooking;