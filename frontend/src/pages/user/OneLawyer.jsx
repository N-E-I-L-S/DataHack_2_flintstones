import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserAuth from '../../context/UserAuth'
import Loader from '../../components/Loader'


export default function OneLawyer() {
    const id = useParams()
    const {user} = UserAuth()
    const [lawyerdetails, setLawyerDetails] = useState("")

    async function getOneLawyer() {
        const res = await fetch('//API')
        const json = await res.json();
        setLawyerDetails(json)
    }

    async function hireLawyer(){
            console.log();
            const url = `http://localhost:3001/event/addrequest`;
            const body = {
              // id : lawyerdetails.id
              user: user.email,
            };
            try {
              const response = await fetch(url, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
              });
              if (response.status === 200) {
                console.log('ok');
              }
              else console.log('error');
            } catch {
              console.log('error');
            }
          }
    

    useEffect(() => {
        getOneLawyer()
    }, [])

    if (lawyerdetails == "")
    return <Loader/>
    return (
       <>
       <h1>{lawyerdetails?.name}</h1>
       <button type="button" onClick={hireLawyer}>Hire me!</button>
       </>
    )
}
