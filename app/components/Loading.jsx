import React from 'react'
import {motion} from 'framer-motion'


export default function Loading() {
  return (
      <div className="loading bg-slate-900 ">

        <div className="loadingframe">
             
             <div className="loadinger">
                
                <motion.div transition={{duration:2}} initial={{x:-100 }} animate={{ x:1 }}  className="white"/>
           

             </div>

        </div>
      </div>
  )
}
