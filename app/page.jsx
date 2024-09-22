'use client'
import Image from "next/image";
import Header from "./components/Header";
import { ClerkLoading, useUser } from "@clerk/nextjs";

import { useEffect, useRef } from "react";
import Welcome from "./components/Welcome";
import EmailSender from "./components/EmailSender";






export default function Home() {
  
  const {isSignedIn, isLoaded, user} = useUser()


  if(!isLoaded){
    return <ClerkLoading></ClerkLoading>
  }else{



  return (
   <>
<Header></Header>

<Welcome></Welcome>

 



   </>
  );
}
}
