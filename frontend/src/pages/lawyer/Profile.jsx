import React from 'react'
import UserAuth from '../../context/UserAuth'

export default function Profile() {
    const {user} = UserAuth()

    async function AddProfile(){
        const url = ``
        const body =""
        try{
        const response = await fetch(url, {
        method: 'POST',
          headers: {
           'Content-Type': 'application/json',
         },
          body: body,
          });
        if(response.status === 200)
        {
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
    <input type="text" defaultValue={user.email}/>
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <input type="text" />
     <button type="button" onClick={AddProfile}>Complete your Profile</button>
    </>
  )
}
