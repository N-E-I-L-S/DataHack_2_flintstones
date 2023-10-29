import React, { useState } from 'react'
import useLawyers from '../../context/LawyerContext';
import Navbar from '../../components/Navbar';
import image from "../../components/auction.png"
import { useNavigate } from 'react-router-dom';

export default function GetLawyer() {
    const [inputcase, setInputCase] = useState("")
    const [inputdesc, setInputDesc] = useState("")
    const {setLawType} = useLawyers()
    const navigate = useNavigate()
    async function recommendLawyer()
    {
        // const url = `https://3da6-2409-4040-6e89-2c4b-d944-471e-3108-7921.ngrok-free.app/`
        const url = "http://localhost:3001/api/getcategory"
        const body = { data : inputcase}
        try{
        const response = await fetch(url, {
        method: 'POST',
          headers: {
           'Content-Type': 'application/json',
           
         },
          body: JSON.stringify(body),
          });
        const data = await response.json()  
        console.log(data)
        if(response.status === 200)
        {
            console.log(data)
            setLawType(data)
            navigate('/user/displaylawyer')
        }
        else
        console.log('error')
        }
        catch{
            console.log('error')
          }
    }
    
    return (
        <>
            <Navbar/>
            <div className="pt-12">

            <div className="font-bold text-[6vh] text-center">Get your lawyer</div>
            <p className='text-center text-[3vh]'>Describe your case so that we can suggest you the best attorney!</p>
            </div>
        <div className="p-4 h-[70vh] flex flex-col justify-center items-center">
            <textarea placeholder='Describe your case'
            //  style={{backgroundSize : "fit-content" ,backgroundImage : `url(${image})`, backgroundRepeat:"no-repeat" }} 
             className='mb-8 border border-black w-[50%] rounded-sm font-bold text-[4vh]' type="text" onChange={e=> setInputCase(e.target.value)}/>
            <textarea placeholder='Describe any additional requirements' className='mb-8 border border-black w-[50%] rounded-sm font-bold text-[4vh]' type="text" onChange={e=> setInputDesc(e.target.value)}/>
            <button type="button" onClick={recommendLawyer} className='bg-[#ffc107] getlawyer-btn border border-black p-2 rounded-md'>Connect to a Lawyer!</button>
        </div>
        
        </>
    )
}
