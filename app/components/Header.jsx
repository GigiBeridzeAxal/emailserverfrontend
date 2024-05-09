'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'
import Loading from './Loading'


export default function Header() {
const encrypted = CryptoJS.AES.encrypt(process.env.NEXT_PUBLIC_KEY, process.env.NEXT_PUBLIC_SECRETKEY) 


  const {isLoaded, isSignedIn , user} = useUser()
  const [credit , setcredit] = useState('undf')
  
  useEffect(() => { 
    
    setInterval(() => {
       const getdata = async() => {


       const data = await axios.post(process.env.NEXT_PUBLIC_BACKENDSERVER,  {userid: user.id , Key: encrypted.toString() })


      setcredit(data.data.credits)
    }
    getdata()
    }, 2000);
   

  },[])


  if(!isLoaded || !isSignedIn || credit == 'undf'){
    


    return <Loading></Loading>

  }else{





  


  return (
   <div className="header">

    <div className="headerframe">


      <div className="left">

        <a href='/' className="emailserver flex align-center justify-center text-white ">EMAIL <span className='text-emerald-500' >SERVER</span></a>

      </div>


      <div className="right flex align-center justify-center gap-5">
        <div className="cred flex text-white align-center justify-center gap-2"><img src={'/Coins.png'} width={25} alt="" /> <div className="flex align-center gap-3 amount">{credit} <a href='/creditshop' className="purcashe">+</a></div></div>
        <UserButton afterSignOutUrl='/sign-in' ></UserButton>
        

      </div>

     
     
     
     
          
    </div>
   </div>
  )
}
}
