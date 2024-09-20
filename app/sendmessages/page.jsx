'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { UserButton, useUser } from '@clerk/nextjs'
import CryptoJS from 'crypto-js'



export default function page() {


  const {isSignedIn, isLoaded, user} = useUser()


    const [email,setemail] = useState()
    const [username,setusername] = useState()
    const [message,setmessage] = useState()

    const [done , setdone] = useState(1)
    const [emailfield,setemailfield] = useState()
    const [usernamefield,setusernamefield] = useState()
    const [messagefield,setmessagefield] = useState()
    const [userinfo , setuserinfo] = useState()



    useEffect(() => {
      const getcoins = async() => {
        if(isLoaded){
        const data = await axios.post("https://emailserverbackend.onrender.com/",  {userid: user.id})
        setuserinfo(data.data)
        }

      }

        setInterval(() => {
         getcoins()
        }, 5000);


    })

    const sendmessage = async(e) => {
      e.preventDefault();

      if(userinfo.credits >= 3){
              console.log("sended")
        setdone(4)
      const send = await axios.post("https://emailserverbackend.onrender.com/sendmessage", {
        email:email,
        message:message,
        username:username
      })
      const payment = await axios.patch('https://emailserverbackend.onrender.com/' , {userid:user.id} )


      }else{

      }





    }

    const emailsubmit = async(e) => {
       
      e.preventDefault();

      setdone(done + 1)
 
    

      


    }


  return (
    <>




    <div className="sendmessages">


             <div className="messagesheader">
        <div className="infoline">
            {done > 1 ? <div className="firstinfo text-emerald-500"><div className="ball bg-emerald-500"></div> შეიყვანეთ Email-ი</div> : <div className="firstinfo"><div className="ball bg-gray-500"></div> შეიყვანეთ Email-ი</div>}
            {done > 2 ?             <div className="firstinfo text-emerald-500"><div className="ball bg-emerald-500"></div> შეიყვანეთ სახელი</div> :<div className="firstinfo"><div className="ball"></div> შეიყვანეთ სახელი</div>}
            {done > 3 ?                        <div className="firstinfo text-emerald-500"><div className="ball bg-emerald-500"></div> შეიყვანეთ წერილი</div> :            <div className="firstinfo"><div className="ball bg-gray-500"></div> შეიყვანეთ წერილი</div>}
            {userinfo == undefined ? <div></div> : <div className="coins flex items-center gap-[5px]"> <img width={25} src="Coins.png" alt="" />{userinfo.credits}</div> }


        </div>
     </div>



        <div className="sendmessagesframe">


{done == 1 ?      <form onSubmit={(e) => emailsubmit(e)} className='sendmessageform' >

<label htmlFor="">შეიყვანე Email-ი</label>
<input onChange={(e) => setemail(e.target.value)}  type="email" placeholder='goodemail@gmail.com' />
<br />

<div className="msgsubmit">
            <button type='submit' className='bg-indigo-500' >შემდეგი</button>  
</div>

</form> : <div></div>}
    
{done == 2 ?      <form onSubmit={(e) => emailsubmit(e)} className='sendmessageform' >

<label htmlFor="">შეიყვანე სახელი</label>
            <input onChange={(e) => setusername(e.target.value)} required type="text" placeholder='გიგი ბერიძე' />
            <br />
<div className="msgsubmit">
            <button type='submit' className='bg-indigo-500' >შემდეგი</button>  
</div>

</form> : <div></div>}

{done == 3 ?      <form onSubmit={(e) => sendmessage(e)} className='sendmessageform' >
  

<label htmlFor="">შეიყვანე შეტყობინება</label>
            <input onChange={(e) => setmessage(e.target.value)} required type="text" placeholder='გამარჯობა როგორ ბრძანდებით' />
            <br />

<div className="msgsubmit">
            <button  type='submit' className='bg-indigo-500' >დასრულება 3c</button>  
</div>

</form> : <div></div>}

{done == 4 ?
<div className="messagesuccess">

<div className="sucessball bg-emerald-500 "><img src="Done.png" alt="" /></div>
<div className="sucessmessage">
  თქვენი შეტყობინება წარმატებით გაიგზავნა
</div>
<button onClick={() => window.location = '/'} className='bg-blue-500 text-white'>დადასტურება</button>

</div>
: <div></div>}

        </div>
    </div>
    </>
  )
}
