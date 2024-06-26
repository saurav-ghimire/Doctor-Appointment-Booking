import React from 'react';
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"

import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from "sonner"


function BookAppointment({doctorDetails}) {
  const {user} = useKindeBrowserClient();
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [note, setNote] = useState();

  const saveBooking = () => {
    // Format date to M/D/Y format
  const formattedDate = date.toLocaleDateString('en-US');
  
  // Format time to AM/PM format
  const formattedTime = selectedTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  
    const data ={
      data:{
        userName:user?.family_name + " " + user?.given_name,
        Email:user?.email,
        Date:formattedDate,
        Time:formattedTime,
        Note:note,
        DoctorID:doctorDetails?.id
      }
    }

    
    GlobalApi.bookAppointment(data).then(res => {
     console.log('appointment save res', res);
     if(res){
      GlobalApi.sendEmail(data).then(res => {
        console.log('Email send res', res)
      })
      toast("Booking Confrimation has been sent in your email.");
     } 
     setDate(new Date());
     setSelectedTime(null);
     setNote('');
    })
  }
  

  // Generate time slots from 8 AM to 6 PM with 30-minute intervals
  const generateTimeSlots = () => {
    const timeSlots = [];
    const startMorningHour = 8;
    const endMorningHour = 12;
    const startAfternoonHour = 13;
    const endAfternoonHour = 18;
    
    const addTimeSlot = (hour, minute) => {
      const time = new Date(date);
      time.setHours(hour);
      time.setMinutes(minute);
      timeSlots.push(time);
    };

    // Morning slots
    for (let hour = startMorningHour; hour <= endMorningHour; hour++) {
      addTimeSlot(hour, 0);
      addTimeSlot(hour, 30);
    }

    // Afternoon slots
    for (let hour = startAfternoonHour; hour <= endAfternoonHour; hour++) {
      addTimeSlot(hour, 0);
      addTimeSlot(hour, 30);
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots();
  
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <button className='mt-3 rounded-full transition ease-in-out text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Book Appointment</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Booking Appointment</DialogTitle>
            <DialogDescription>
              <div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  <div className='flex flex-col gap-3 items-baseline mt-3'>
                    <h2 className='text-gray-500 flex items-center gap-2'><CalendarDays className='text-primary h-5 w-5' /> Select Date</h2>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                  <div>
                    <h2 className='text-gray-500 flex items-center gap-2'><Clock className='text-primary h-5 w-5' /> Select Time</h2>
                    <div className='mt-5 flex items-center gap-1 flex-wrap justify-between border-[1px] p-5'>
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTime(time)}
                          className={`w-[31%] py-2 rounded-md transition-colors duration-300 ${
                            selectedTime && time.getTime() === selectedTime.getTime()
                              ? 'bg-primary text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add a note..."
                    className="w-full p-5 border rounded-md"
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <>
                <button className='transition ease-in-out text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="button" disabled={!(date && selectedTime)}
                onClick={() => saveBooking()}
                >
                  Submit
                </button>
              </>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default BookAppointment;
