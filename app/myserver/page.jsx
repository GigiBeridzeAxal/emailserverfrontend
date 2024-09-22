'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import CryptoJS from 'crypto-js'
export default function page() {
  

  const encrypted = CryptoJS.AES.encrypt(process.env.NEXT_PUBLIC_KEY, process.env.NEXT_PUBLIC_SECRETKEY).toString()
  
    const {isLoaded , isSignedIn , user} = useUser()
    const [servers, setservers] = useState('')
    const [emeraldopen, setemeraldopen] = useState(false)
    const [goldeonopen, setgoldeonopen] = useState(false)
    const [silveropen, setsilveropen] = useState(false)
    const [servername , setservername] = useState()
    const [serverlimit , setserverlimit] = useState(false)
    const [openedserver , setopenedserver] = useState('')
    const [serveropen , setserveropen] = useState(false)
  

    
    
    if(!isSignedIn || !isLoaded){
        return null
     }else{


     



        const serverfind = async() => {

  
          const get = await axios.post('https://emailserverbackend.onrender.com/getserver' , {owner:user.id , bcrypted:encrypted })

          setservers(get.data)
        }
        serverfind()
        

  




    

        const silverplan = async() => {
          
          if(servers.length >= 9){
            setserverlimit(true)

          }else{

            const create = await axios.post('https://emailserverbackend.onrender.com/createserver' , {
              owner:user.id,
              plan:'silver',
              servername:servername,
              bcrypted:encrypted
  
  
            })
  
          }
        
        }
        const goldenplan = async() => {

          if(servers.length >= 9){
                              setserverlimit(true)  
    

          
                    }else{

                          
          const create = await axios.post('https://emailserverbackend.onrender.com/createserver' , {
            owner:user.id,
            plan:'golden',
            servername:servername,
            bcrypted:encrypted

          })
                    }
                  


        }
        const emeraldplan = async() => {

          if(servers.length >= 9){
            setserverlimit(true)  
     
                    }else{
                      const create = await axios.post('https://emailserverbackend.onrender.com/createserver' , {
                        owner:user.id,
                        plan:'emerald',
                        servername:servername,
                        bcrypted:encrypted
            
            
                      })

                    }
                  

 

        }

        const serverlive = (data) => {
          
          const send = axios.post('https://emailserverbackend.onrender.com/status' , {id:data._id , bcrypted:encrypted})
          console.log(send.data)



        }

        const delteserver = async(data) => {

          const send = axios.post('https://emailserverbackend.onrender.com/deleteserver' , {id:data._id , bcrypted:encrypted})
          setserveropen(false)
        }



     
    
  return (
    <>
    
    <Header></Header>


  
  {serveropen ? <button onClick={() => setserveropen(false)} className="blurbg"></button> : <div></div>}



    <div className="myserver">
        <div className="myserverframe">

        {
      serveropen == true ? 
      
      servers.filter(data => {return data._id.includes(openedserver)}).map(data => (<div className='' >

       <div className="openedserverframe">

        <div className="openedheaderframe flex items-center justfy-between"> 

          <div className="openedheader flex items-end gap-[10px]"> <div className="servername text-[34px]">{data.servername}</div> <div className="openedplan text-gray-500">Plan:{data.plan}</div> <div className="openedlimit text-gray-500">{data.limit}/{data.plan == 'silver' ?500 : null }{data.plan == 'golden' ?2500 : null }{data.plan == 'emerald' ?7000 : null } </div> </div>
          <button onClick={() => delteserver(data) } className="deleteserver flex items-center gap-[5px]  justify-center">Delete Server <img src="Remove.png" alt="" /></button>
        </div>
        
        <div className="openedserverstatus">

        <div className="servertittle">Server Status:</div>
        

        <div className="serverdiv">
      <button onClick={() => serverlive(data)} className="server">{data.status == true ? <img src="Live.png" alt="" />  :<img src="Shutdown.png" alt="" /> }</button>

        </div>
  

        </div>

        <div className="openedsecure">
          <div className="sercuretittle">Server Secure:</div>

          <div className="secure">
            <div className="apikeytittle">Api Key:</div>
            <div className="apikey flex items-center"><div className="key"><img src="Key.png" alt="" /></div>  <div className="value">{data._id}</div></div>
            <div className="apikeytittle">Api Password:</div>
            <div className="apikey flex items-center"><div className="key"><img src="Key.png" alt="" /></div>  <div className="value">{data.secure}</div></div>
            
          </div>

        </div>

        

       </div>
        
      </div>))
      
      : <div></div>
    }

        <div className="serversinfo flex items-center gap-[10px]">My Servers <div className="value flex items-center gap-[7px] text-[20px] ">{servers == '' ? 0 : servers.length}<div className="dash text-black text-[25px]">/</div> <div className="max text-red-500">9</div></div></div>

        {servers !== '' ? 
        
        <div className="serverlist">

          {servers.map(data => (
            <button onClick={() => setopenedserver(data._id) | setserveropen(true)} className="listframe flex items-center justify-between ">
              <div className="serverlistname">{data.servername}</div>

              <div className="planname text-gray-500">Plan:{data.plan}
              <div className="health">{data.limit}/{data.plan == 'silver' ?500 : null }{data.plan == 'golden' ?2500 : null }{data.plan == 'emerald' ?7000 : null } </div>
              </div>
            </button>



          ))}



        </div>
        
        : null}

            


          <div className="serverbuy">

            <div className="plan">

               
              <div className="plantittle text-gray-600">Silver Plan</div>
              <div className="planinfo">
              <div className="info flex items-center gap-[5px]"><div className="ball bg-emerald-500"></div><div className="">500 Message</div></div>
              <div className="info flex items-center gap-[5px]"><div className="ball bg-emerald-500"></div><div className="">24/7 Servers</div></div>
              <div className="info flex items-center gap-[5px]"><div className="ball bg-emerald-500"></div><div className="">Secured Systems</div></div>

</div>
                
                <button onClick={() => silveropen ? setsilveropen(false) : setemeraldopen(false) | setgoldeonopen(false) | setsilveropen(true) | setservername('') } className="price  flex items-center gap-[5px]"><button>შეძენა</button> ||| 500 <img width={30} src="Coins.png" alt="" /> </button>
                {silveropen ?  <div className="servernameinputs flex items-center gap-[5px]"><input onChange={(e) => setservername(e.target.value) } type="text" placeholder='my-emailserver' /> <button onClick={(e) => silverplan()} className='bg-blue-500' >შექმნა</button></div> : <div></div>}
            </div>
            <div className="plan">

<div className="plantittle text-amber-500">Golden Plan</div>
<div className="planinfo">
<div className="info flex items-center gap-[5px]"><div className="ball bg-emerald-500"></div><div className="">1500 Message</div></div>
<div className="info flex items-center gap-[5px]"><div className="ball bg-emerald-500"></div><div className="">24/7 Servers</div></div>
<div className="info flex items-center gap-[5px]"><div className="ball bg-emerald-500"></div><div className="">Secured Systems</div></div>

</div>
  
  <button onClick={() => goldeonopen ? setgoldeonopen(false) : setemeraldopen(false) | setgoldeonopen(true) | setsilveropen(false) | setservername('') } className="price flex items-center gap-[5px]"><button>შეძენა</button> ||| 1000 <img width={30} src="Coins.png" alt="" /> </button>
  {goldeonopen ?   <div className="servernameinputs flex items-center gap-[5px]"><input onChange={(e) => setservername(e.target.value) } type="text" placeholder='my-emailserver' /><button onClick={(e) => goldenplan()} className='bg-blue-500' >შექმნა</button></div> : <div></div>}
</div>
<div className="plan">

<div className="plantittle text-emerald-500">Emerald Plan</div>
<div className="planinfo">
<div className="info flex items-center gap-[5px]"><div className="ball bg-emerald-500"></div><div className="">7000 Message</div></div>
<div className="info flex items-center gap-[5px]"><div className="ball bg-emerald-500"></div><div className="">24/7 Servers</div></div>
<div className="info flex items-center gap-[5px]"><div className="ball bg-emerald-500"></div><div className="">Secured Systems</div></div>

</div>

  <button onClick={() => emeraldopen ? setemeraldopen(false): setemeraldopen(true) | setgoldeonopen(false) | setsilveropen(false) | setservername('') } className="price flex items-center gap-[5px]"><button>შეძენა</button> ||| 2500 <img width={30} src="Coins.png" alt="" /> </button>  
  {emeraldopen ?  <div className="servernameinputs flex items-center gap-[5px]"><input onChange={(e) => setservername(e.target.value) }type="text" placeholder='my-emailserver' /> <button onClick={(e) => emeraldplan()} className='bg-blue-500' >შექმნა</button></div> : <div></div>}
 
</div>


            
          

          </div>
          

        </div>
        
    </div>


    </>
  )
}
}
