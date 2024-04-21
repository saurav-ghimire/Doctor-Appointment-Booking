import { CalendarCheck, Clock } from 'lucide-react';
import React from 'react';

function BookingList({ bookingList }) {
  return (
    <div className="space-y-4">
      {bookingList && bookingList.map((booking, index) => (
        <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md w-full">
          {/* Render the details of each booking */}
          <p className="text-gray-700 text-lg font-semibold">Booking ID: {booking.id}</p>
          <div className="flex items-center mt-2">
            <CalendarCheck className="w-6 h-6 mr-2 text-blue-500" />
            <p className="text-gray-600"><span className="font-semibold">Appointment Date:</span> {booking.attributes.Date}</p>
          </div>
          <div className="flex items-center mt-2">
            <Clock className="w-6 h-6 mr-2 text-green-500" />
            <p className="text-gray-600"><span className="font-semibold">Appointment Time:</span> {booking.attributes.Time}</p>
          </div>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
}

export default BookingList;
