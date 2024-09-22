import axios from 'axios'
import React, { useState } from 'react'

export default function ha() {

    
    const [email ,setemail] = useState()

    const [username ,setusername] = useState()

    const [message ,setmessage] = useState()

    const [apikey ,setapikey] = useState()

    const [apipassword , setapipassword] = useState()

    const sendmessage = () => {

        const send = axios.post("https://emailserverbackend.onrender.com/apisend" , {
            email,
            username,
            message,
            apikey,
            apipassword
        })
        if(send){
            console.log("Succesfuly Send Message")
        }

    }

  return (
    

    <form action="">
        <label htmlFor="">Email</label>
        <input onChange={(e) => setemail(e.target.value)} type="text" placeholder='Enter Email' />
        <label htmlFor="">Username</label>
        <input onChange={(e) => setusername(e.target.value)} type="text" placeholder='Enter Username' />
        <label htmlFor="">Message</label>
        <input onChange={(e) => setmessage(e.target.value)} type="text" placeholder='Enter Message' />
        <label htmlFor="">Apikey</label>
        <input onChange={(e) => setapikey(e.target.value)} type="text" placeholder='Enter Apikey' />
        <label htmlFor="">Apipassword</label>
        <input onChange={(e) => setapipassword(e.target.value)} type="text" placeholder='Enter Apipassword' />
    </form>
      

  )
}
