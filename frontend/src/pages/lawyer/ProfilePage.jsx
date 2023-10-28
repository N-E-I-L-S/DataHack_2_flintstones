import React, { useState } from 'react'
import UserAuth from '../../context/UserAuth'
import { useEffect } from 'react'
import Loader from '../../components/Loader'

export default function ProfilePage() {

    const { user } = UserAuth()
    const [userdetails, setUserDetails] = useState("")
    async function getUser() {
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
                setUserDetails(response.data)
                console.log('ok')
            }
            else {
                console.log('error')
            }
        }
        catch {
            console.log('error')
        }
    }
    useEffect(() => {
            if (user != "") {
            getUser()
        }
        }, [])

    if(userdetails == "")
    return <Loader/>
    return (
        <>
        <h1>{user.email}</h1>
        <div>
            {
                userdetails.requests?.map((i)=>{
                    return(
                        <div>
                            {i}
                            </div>
                    )
                })
            }
        </div>
        </>
    )
}
