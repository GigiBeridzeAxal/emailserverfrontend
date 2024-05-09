
import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Loading from './Loading';

const encrypted = CryptoJS.AES.encrypt(process.env.NEXT_PUBLIC_KEY, process.env.NEXT_PUBLIC_SECRETKEY).toString() 

export default function EmailSender() {
   
  
  
  
  const {isLoaded, isSignedIn , user} = useUser() 
  const [credit , setcredit] = useState('undf')
  const [By , setBy] = useState('undf')
  const [To , setTo] = useState('undf')
  const [success , setsuccess] = useState('')
  
  const form = useRef();


  const bychanger = (e) => {

    setBy(e.target.value)
  }
  const ToChanger = (e) => {

    setBy(e.target.value)
  }


  const notsendMail = () => {
    setsuccess("Credits")

    
  }


  const sendEmail = async(e) => {
    console.log(form.current)

    if(credit >= 3){
      const creditchanger = axios.patch(process.env.NEXT_PUBLIC_BACKENDSERVER, {userid:user.id , By  , To  , Key: encrypted})

      if(creditchanger){
        e.preventDefault();

      
        emailjs
        .sendForm('service_xmkt6fx', 'template_tj9ueyk', form.current, {
          publicKey: 'pUKpLbSCtSlOPjH76',
        })
        .then(
          () => {
        
            setsuccess("Success")
            setTimeout(() => {
              setsuccess("")
            }, 5000);
            console.log('SUCCESS!');
        
          },
          (error) => {
            setsuccess("NotSucess")
            setTimeout(() => {
              setsuccess("")
            }, 3000);
            console.log('FAILED...', error.text);
          },
        );
      }else{
  
        console.log("Something Went Wrong")

        
      }


    }else{
      console.log("You Dont Have Enough Credits")
      setsuccess("Credits")
    }


  };
  useEffect(() => { 
    
    setInterval(() => {
       const getdata = async() => {


       const data = await axios.post(process.env.NEXT_PUBLIC_BACKENDSERVER,  {userid: user.id , Key: encrypted.toString()})

      setcredit(data.data.credits)
    }
    getdata()
    }, 2000);
   

  },[])


  if(!isLoaded || !isSignedIn || credit == 'undf'){
    


    return null

  }else{
 
  return (

        <>
    <div className="email">
        <div className="emailframe">
          <div className="welcomesign text-white ">Hello {user.firstName}, Use EmailServer For Secure/Incognito Sms</div>

     {success == 'Success' ? <div className='success' >You Succesfully Send Message</div> : <div></div> }  
     {success == 'NotSucess' ? <div className='notsucess' >Something Went Wrong Please Try Again</div> : <div></div> } 
     {success == 'Credits' ? <div className='notsucess' >You Dont Have Enough Credits</div> : <div></div> }                               
    {credit >= 3 ?  <form ref={form} onSubmit={sendEmail}>
    <label className='text-white'>Name</label>

    <input  onChange={(e) => {bychanger(e)}} placeholder='Enter Your Name' type="text" name="user_name" />
    
    <label  className='text-white'>Email</label>
    <input onChange={(e) => {ToChanger(e)}} placeholder='Enter Target Email' type="email" name="user_email" />
    
    <label  className='text-white'>Message</label>
    <textarea placeholder='Enter Your Message' name="message" />
    <br />
    <input  className='cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'  type="submit" value={`Send (3 Credit)`} />

  </form>
 :<>  <form  >
 <label className='text-white'>Name</label>

 <input placeholder='Enter Your Name' type="text" name="user_name" />
 
 <label  className='text-white'>Email</label>
 <input placeholder='Enter Target Email' type="email" name="user_email" />
 
 <label  className='text-white'>Message</label>
 <textarea placeholder='Enter Your Message' name="message" />
 <br />
 

</form>
<input onClick={notsendMail} className='cursor-pointer notsendmail bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'  type="submit" value={`Send (3 Credit)`} />
</>
}
   
        </div>
    </div>

   
    
    </>
  
  )
}
}
