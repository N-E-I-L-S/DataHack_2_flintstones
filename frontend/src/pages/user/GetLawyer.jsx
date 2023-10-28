import React, { useState } from 'react'
import useLawyers from '../../context/LawyerContext';
import Navbar from '../../components/Navbar';

export default function GetLawyer() {
    const [inputcase, setInputCase] = useState("")
    const {setAllLawyers} = useLawyers()
    async function recommendLawyer()
    {
        const url = ``
        try{
        const response = await fetch(url, {
        method: 'POST',
          headers: {
           'Content-Type': 'application/json',
         },
          body: inputcase,
          });
        if(response.status === 200)
        {
            setAllLawyers(response.data)
            console.log('ok')
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
            <input type="text" onChange={e=> setInputCase(e.target.value)}/>
            <button type="button" onClick={recommendLawyer}>Connect to a Lawyer!</button>
        </>
    )
}
