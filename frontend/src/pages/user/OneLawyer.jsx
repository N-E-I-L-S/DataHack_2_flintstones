import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserAuth from '../../context/UserAuth'
import Loader from '../../components/Loader'
import Navbar from '../../components/Navbar'


export default function OneLawyer() {
    const id = useParams()
    console.log(id)
    const {user} = UserAuth()
    const [lawyerdetails, setLawyerDetails] = useState({
      name: 'neil',
    })

    async function getOneLawyer() {
        const res = await fetch('//API')
        const json = await res.json();
        setLawyerDetails(json)
    }

    async function bookmarks(){
      // return 0
        const url = `http://localhost:3001/user/addbookmark`
        const body ={
          email: user.email,
          data:{
            lawyerdetails
          }
        }
        try{
        const response = await fetch(url, {
        method: 'POST',
          headers: {
           'Content-Type': 'application/json',
         },
          body: body,
          });
        if(response.status === 200)
        console.log('ok')
        else
        console.log('error')
        }
        catch{
            console.log('error')
          }
    }

    async function hireLawyer(){
          // return 0
            console.log();
            const url = `http://localhost:3001/user/hire`;
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
    

    // useEffect(() => {
    //     getOneLawyer()
    // }, [])

    if (lawyerdetails == "")
    return <Loader/>
    return (
       <>
       <Navbar/>
       <div className="p-12">
       <h1 className='text-[4vh]'>{lawyerdetails?.name}</h1>
       <p className='text-[3vh]'>{lawyerdetails?.name}</p>
       <div className="flex justify-around">
       <button className='getlawyer-btn border border-black rounded-sm py-2 px-4' onClick={bookmarks}>Add as Bookmark</button>
       <button className='getlawyer-btn border border-black rounded-sm py-2 px-4' type="button" onClick={hireLawyer}>Hire me!</button>
       </div>
       </div>
       </>
    )
}
