'use client'
import React, { useState } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
export default function Welcome() {

  const [videosize , setvideosize] = useState(false)
  const {isLoaded, isSignedIn , user} = useUser()

  return (
    <>
          <div className="bg"><img src="Background.png" alt="" /></div>
    <div className="welcome">

      <div className="welcomeframe">

        <div className="leftwelcome">
          <div className="mainweltittle text-plate-500 flex">კონფიდენციალურობა და <div className="color text-indigo-500">ანონიმურობა:</div> ყველაფერი ერთად ჩვენთან</div>
          <br />
          <div className="mainweldesc text-gray-500">ჩვენი სერვერები მუშაობს 24/7 საათი შეგიძლიათ ისარგებლოთ ჩვენი სერვერებით თქვენ გაქვთ შესაძლებლობა შექმნათ
            აპი პროექტები ჩვენს სერვერებზე
          </div>

          <div className="leftdown">
            <a href='/sendmessages' className='bg-indigo-500' >Start Now</a>
            <br />
            <div className="techs text-slate-600 flex items-center gap-[15px]"><div className="nodemailer flex items-center gap-[3px]"><img width={30} src="Nodemailer.png" alt="" />Nodemailer</div> <div className="react flex items-center gap-[1px]"><img width={30} src="React.png" alt="" /> React </div> <div className="gmail flex items-center gap-[2px]"><img width={30} src="Gmail.png" alt="" />Gmail</div></div>
          </div>


        </div>




<div className="videoframe">
           <video autoPlay loop muted src="email.mp4"></video>
</div>




      </div>
      <div className="trustframe">
        <div className="trusttittle text-gray-700">Trusted By 100k+ People And 6+ Company</div>
        <br />
        <div className="trustlogos flex items-center gap-[35px] ">
          <div className="logo text-gray-500 flex items-center gap-[5px]"><img width={70} src="Google.png" alt="" />Google</div>
          <div className="logo text-gray-500 flex items-center gap-[5px]"><img width={70} src="Microsoft.png" alt="" />Microsoft</div>
          <div className="logo text-gray-500 flex items-center gap-[5px]"><img width={70} src="TwitterX.png" alt="" /></div>
          <div className="logo text-gray-500 flex items-center gap-[5px]"><img width={70} src="Paypal.png" alt="" />Paypal</div>

        </div>
      </div>

    </div>
    </>

  )
}
