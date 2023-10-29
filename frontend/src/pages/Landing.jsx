import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import LawyerImg from "../components/lawyer.png"
import UserImg from "../components/citizen.png"
import './Landing.css'
export default function Landing() {

    async function CreateDataframe(){
        const res = await fetch('//API')
        const json = await res.json();
        console.log(json)
    }
    useEffect(()=>{
        // CreateDataframe()
    },[])

    return (
       <>
       <div className="p-3 h-[100vh] flex justify-around">

        <div className="rounded-md left-div  p-4 h-full w-[45%] border border-black flex justify-center">
        <NavLink to="/user/login">
            <p className="font-bold text-[6vh] text-center">I am a Citizen</p>
            <div className="pt-24">
                <img src={UserImg} alt="" className='h-[50vh]'/>
            </div>
        </NavLink>
        </div>
        <div className="rounded-md right-div p-4 h-full w-[45%] border border-black flex justify-center">
        <NavLink to="/lawyer/login">
        <p className="font-bold text-[6vh] text-center"> I am a Lawyer</p>
        <div className="pt-24">
                <img src={LawyerImg} alt="" className='h-[50vh]' />
            </div>
        </NavLink>
        </div>
       </div>
       </>
    )
}
