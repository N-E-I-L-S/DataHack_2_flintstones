import React, { useState } from 'react'
import UserAuth from '../../context/UserAuth'
import { useEffect } from 'react'
import Loader from '../../components/Loader'
import { useParams } from 'react-router-dom'

export default function ProfilePage() {
    const name = useParams()
    const { user } = UserAuth()
    const [userdetails, setUserDetails] = useState("")
    async function getUser() {
        const url = `http://localhost:3001/lawyer/name/${name.name}`
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
                userdetails.hire?.map((i)=>{
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
