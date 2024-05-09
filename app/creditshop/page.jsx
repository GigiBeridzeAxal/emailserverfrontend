'use client'
import React from 'react'
import Header from '../components/Header'
import { useUser } from '@clerk/nextjs'
import CreditShop from '../components/CreditShop'


export default function page() {
     
    const {isLoaded , isSignedIn , user} = useUser()


    if(!isLoaded || !isSignedIn){

    }else{

    


  return (
    <>
    <Header></Header>

<CreditShop></CreditShop>

    </>

  )
}
}
