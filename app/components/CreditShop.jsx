import React, { useState } from 'react'
import CryptoJS from 'crypto-js'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { motion } from 'framer-motion'

export default function CreditShop() {
    const [creditamount , setcreditamount] = useState(0)
    const [mastercard , setmastercard] = useState()
    const [paypal , setpaypal] = useState()
    const {isLoaded, isSignedIn , user } = useUser()
    const [buyedcredits , setbuyedcredits] = useState(0)
    const [gadaxdili , setgadaxdili] = useState('und')
    const [sucess, setsucess] = useState()
    
    const encrypted = CryptoJS.AES.encrypt(process.env.NEXT_PUBLIC_KEY, process.env.NEXT_PUBLIC_SECRETKEY).toString() 


    const gadaxda = async() => {

      const gadaxdaprocess = await axios.post(process.env.NEXT_PUBLIC_PAYSERVER, {userid:user.id,buyedcredits,Key:encrypted})
  
      if(gadaxdaprocess){
        setsucess('yes')
        setgadaxdili('yes')
        setTimeout(() => {
          setgadaxdili('und')
          setmastercard(false)
          setbuyedcredits(0)
          setsucess(0)
        }, 1500);

      }else{
        setsucess('no')
        setgadaxdili('no')
        setTimeout(() => {
          setgadaxdili('und')
          setmastercard(false)
        }, 1500);
      }



    }

    const masterchanger = () => {
 
       if(mastercard == true){
        setmastercard(false)
       }else{
        setmastercard(true)
       }

    }
    const changecreditamount = (e) => {

      setbuyedcredits(e.target.value)
         
}

{
  
}

if(!isSignedIn || !isLoaded){
   return null
}else{

  return (
   
    <div className="credit text-white">
       {mastercard == true ? <div className="mastercardbuy  text-white">

   <a onClick={() => setmastercard(false)} className='cardexit' ></a>
<div className="credshop text-black">

  {gadaxdili == 'yes' ? <>
  
  <motion.div initial={{size:0.5 , opacity:0.5}} animate={{size:1.5,opacity:1}} transition={{duration:1}} className="done bg-emerald-500"><img src={"/Done.png"} width={50} height={50} alt="" /></motion.div>
  
  </> : <div className="sawdasd"></div> }
  
  {gadaxdili == 'no' ? <div className="unsucesspayment">awdasd</div> : <div className="sawdasd"></div> }
 
  
  {gadaxdili == 'und' ? <> გადაიხადე ბარათით-ით
  <br /><br />

  <input onChange={(e) => setbuyedcredits(e.target.value)} placeholder='Enter Amount Of Credit' type="text" className='text-white' />
<br /> 

  <button onClick={(e) => gadaxda()} class=" flex bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
გადაიხადე {buyedcredits} ლ
</button></> : <div className="swa"></div> }
 
</div>

</div> : <div></div>}
        <div className="creditframe">

            
            <div className="paytittle">
                            გადაიხადე ბარათით
            </div>

           

            <div className="cards ">

             <a onClick={(e) => masterchanger()} className="cursor-pointer mastercard">
              <img  src={'/Mastercard.png'} width={60} alt="" />
              გადაიხადე MasterCard-ით
             </a>
             
             <a onClick={(e) => masterchanger()} className="cursor-pointer paypal">

             <img src={'/Paypal.png'} width={60}  alt="" />
             გადაიხადე PayPal-ით

             </a>




            </div>


         {sucess == 'yes' ? <div className="scc flex align-center justify-center text-emerald-500 ">You Succesfuly Buy {buyedcredits} <img src="/Coins.png" width={20} alt="" /> Coin</div> : <div className="swad"></div> }

         <div className="firstline">   <input placeholder='Enter Your Name' className='bg-slate-700' type="text" />
        <input placeholder='Enter Your Last Name' className='bg-slate-700' type="text" /></div>

        <div className="secondline">
     
        <input onChange={(e) => changecreditamount(e)} placeholder='Enter Your Amount Of Credits' className='bg-slate-700' type="text" />
 
         <input placeholder='Enter Your Card Id' className='bg-slate-700' type="text" />
        </div>

        <div className="thirdline">
        <input placeholder='Enter Country' className='bg-slate-700' type="text" />
        <input placeholder='Enter City' className='bg-slate-700' type="text" />
        </div>
        <div className="fourline">
        <input placeholder='Enter Street.st' className='bg-slate-700' type="text" />

        <div className="dates">

        <input  placeholder='Enter MM' className='dateer bg-slate-700' type="text" />
        <input placeholder='Enter DD' className=' dateer bg-slate-700' type="text" />
        <input placeholder='Enter YY' className='dateer bg-slate-700' type="text" />
        </div>


        </div>

        <button onClick={() => gadaxda()} class="paybtn bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  გადაიხადე {buyedcredits } ლ
</button>
 
             
        </div>
    </div>
  )
}
}
