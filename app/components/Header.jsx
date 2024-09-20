'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'



export default function Header() {
const encrypted = CryptoJS.AES.encrypt(process.env.NEXT_PUBLIC_KEY, process.env.NEXT_PUBLIC_SECRETKEY) 


  const {isLoaded, isSignedIn , user} = useUser()
  const [credit , setcredit] = useState('undf')
  const [mobmenu , setmobmenu] = useState(false)
  
  useEffect(() => { 

    if(isSignedIn){
       
    setInterval(() => {
      
       const getdata = async() => {
        


       const data = await axios.post(process.env.NEXT_PUBLIC_BACKENDSERVER,  {userid: user.id , Key: encrypted.toString() })


      setcredit(data.data.credits)
    }
    getdata()
    }, 2000);
    }
   
   

  },[])


 





  


  return (

    <>
    {mobmenu == true ? <div className="mobilemenu">
      <div className="mobilleft flex gap-[15px] items-center">

<a href='/' className="emailserver flex align-center justify-center text-slate-600 ">EMAIL <span className='text-emerald-500' >SERVER</span></a>
<br /><br />
<a href='/apidoc' className="emailserver flex align-center justify-center text-slate-600 ">Api Documentation</a>
<a href='/sendmessages' className="emailserver flex align-center justify-center text-slate-600 ">Send Messages</a>
<a href='/myserver' className="emailserver flex align-center justify-center text-slate-600 ">My Servers</a>

</div>
      </div> : null}
   

      
   <div className="header">

<div className="headerframe">


<div className="mobileleft flex items-center gap-[15px]">
   <button onClick={() => mobmenu == true ? setmobmenu(false) : setmobmenu(true)} className="burger flex items-center  w-[250px]">
    <img src="menu.png" alt="" />

  </button>
  {mobmenu == true  ?  
  <div className="headermenutittle">Header Menu</div>
 

 :  <a href='/' className="emailserver flex align-center justify-center text-slate-600 ">EMAIL <span className='text-emerald-500' >SERVER</span></a>}
</div>



  <div className="left flex gap-[15px] items-center">

    <a href='/' className="emailserver flex align-center justify-center text-slate-600 ">EMAIL <span className='text-emerald-500' >SERVER</span></a>
    <br /><br />
    <a href='/apidoc' className="emailserver flex align-center justify-center text-slate-600 ">Api Documentation</a>
    <a href='/sendmessages' className="emailserver flex align-center justify-center text-slate-600 ">Send Messages</a>
    <a href='/myserver' className="emailserver flex align-center justify-center text-slate-600 ">My Servers</a>

  </div>


  <div className="right flex align-center justify-center gap-5">
    {isSignedIn ?    <div className="cred flex text-white align-center justify-center gap-2"><img src={'/Coins.png'} width={25} alt="" /> <div className="flex align-center text-slate-600  gap-3 amount">{credit !== 'undf' ? credit : <div className='creditloader'></div>}<a href='/creditshop' className="purcashe">+</a></div></div> : <div className='signbuttons' ><a href='sign-in' className='signinbtn' >Sign In</a> <a href='sign-up' className='signupbtn'>Sign Up</a></div>}
 
    {isLoaded == true ? isSignedIn == true  ? <UserButton afterSignOutUrl='/sign-in' ></UserButton> : <div></div> : <div className='imageloader' ></div>}

    

  </div>

 
 
 
 
      
</div>
</div>
    </>
    
  )
}

