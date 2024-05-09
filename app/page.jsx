'use client'
import Image from "next/image";
import Header from "./components/Header";
import { ClerkLoading, useUser } from "@clerk/nextjs";
import EmailSender from "./components/EmailSender";
import { useRef } from "react";
import Howitworks from "./components/Howitworks";





export default function Home() {
  
  const {isSignedIn, isLoaded, user} = useUser()


  if(!isLoaded || !isSignedIn){
    return <ClerkLoading></ClerkLoading>
  }else{


  return (
   <>
<Header></Header>
 
   <Howitworks></Howitworks>

   <EmailSender></EmailSender>


   </>
  );
}
}
