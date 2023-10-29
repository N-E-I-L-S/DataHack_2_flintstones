import React, { useState } from 'react'
import UserAuth from '../../context/UserAuth'
import Navbar from '../../components/Navbar'

export default function Profile() {
  const { user } = UserAuth()

  const [inputcase, setInputCase] = useState("")
  const [inputname, setInputName] = useState("")

  async function AddProfile() {
    const url = ``
    const body = ""
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      if (response.status === 200) {
        console.log('ok')
      }
      else
        console.log('error')
    }
    catch {
      console.log('error')
    }
  }

  return (
    
        <>
            <Navbar/>
            <div className="pt-12">
            <div className="font-bold text-[6vh] text-center">I am ...</div>
            <p className='text-center text-[3vh]'>Tell us something about yourself so that we can match you as per your satisfaction!</p>
            </div>
        <div className="p-4 h-[70vh] flex flex-col justify-center items-center">
            <input placeholder='Enter your name'
            //  style={{backgroundSize : "fit-content" ,backgroundImage : `url(${image})`, backgroundRepeat:"no-repeat" }} 
             className='mb-8 border border-black w-[50%] rounded-sm font-bold text-[4vh]' type="text" onChange={e=> setInputName(e.target.value)}/>
            <textarea placeholder='Describe any additional requirements' className='mb-8 border border-black w-[50%] rounded-sm font-bold text-[3vh]' type="text" onChange={e=> setInputCase(e.target.value)}/>
            <button type="button" onClick={AddProfile} className='bg-[#ffc107] getlawyer-btn border border-black p-2 rounded-md'>Connect to a Lawyer!</button>
        </div>
        </>
  )
}
