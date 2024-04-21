import { Resend } from 'resend';

import { NextResponse } from 'next/server';
import EmailTemplate from '@/emails';
const resend = new Resend(process.env.RESEND_API);

export async function POST(req){
  const response = await req.json();
  console.log('response',response.data.Email)
  try{
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [response.data.Email],
      subject: 'Appointment Booking',
      react: EmailTemplate({response}),
    });
    return NextResponse.json({data})
  }
  catch(error){
    console.log(error)
    return NextResponse.json({error})
  }
}



