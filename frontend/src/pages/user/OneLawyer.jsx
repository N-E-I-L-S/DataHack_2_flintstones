import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserAuth from '../../context/UserAuth'
import Loader from '../../components/Loader'
import Navbar from '../../components/Navbar'


export default function OneLawyer() {
  const id = useParams()
  console.log(id)
  const { user } = UserAuth()
  const [lawyerdetails, setLawyerDetails] = useState({
    name: 'neil',
  })

  async function getOneLawyer() {
    const res = await fetch('//API')
    const json = await res.json();
    setLawyerDetails(json)
  }

  async function bookmarks() {
    // return 0
    const url = `http://localhost:3001/user/addbookmark`
    const body = {
      email: user.email,
      data: {
        lawyerdetails
      }
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      if (response.status === 200)
        console.log('ok')
      else
        console.log('error')
    }
    catch {
      console.log('error')
    }
  }

  async function hireLawyer() {
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
    return <Loader />
  return (
    <>
      <Navbar />
      <div className="p-12">
        <h1 className='text-[4vh]'>{lawyerdetails?.Name}</h1>
        <div>Years of Experience: {lawyerdetails.Years_of_Experience}</div>
        <div>Location: {lawyerdetails.Location}</div>
        <div>Cost per Hour: {lawyerdetails.Cost_per_hour}</div>
        <div>Client Feedback: {lawyerdetails.Client_Feedback}</div>
        <div>Area of Expertise: {lawyerdetails.Area_of_Expertise}</div>
        <div>Gender: {lawyerdetails.Gender}</div>
        <div>Pro Bono Community: {lawyerdetails.Pro_Bono_Community}</div>
        <div className="flex justify-around">
          <button className='getlawyer-btn border border-black rounded-sm py-2 px-4' onClick={bookmarks}>Add as Bookmark</button>
          <button className='getlawyer-btn border border-black rounded-sm py-2 px-4' type="button" onClick={hireLawyer}>Hire me!</button>
        </div>
      </div>
    </>
  )
}
