import React, { useState } from 'react'
import UserAuth from '../../context/UserAuth'
import Loader from '../../components/Loader'

export default function ProfilePage() {
  const {user} = UserAuth()
  const [userdetails, setUserDetails] = useState("")
  async function getUser(){
    const res = await fetch(`http://localhost:3001/user/email/${user.email}`)
    const json = await res.json();
    console.log(json)
    setUserDetails(json)
  }

  if(userdetails=="")
  return <Loader/>
  return (
    <>
      <div className="p-12">
        <h2>{userdetails.email}</h2>
        {
          userdetails.hire?.map((i)=>{
            return(
              <p key={i}>{i}</p>
            )
          })
        }
        {
          userdetails.bookmarks?.map((i)=>{
            return(
              <p key={i}>{i}</p>
            )
          })
        }

      </div>
    </>
  )
}
