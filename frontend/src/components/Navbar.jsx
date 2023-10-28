import React from 'react'
import UserAuth from '../context/UserAuth'

export default function Navbar() {
    const { user, logout} = UserAuth()
    return (
        <>
        <button type="button" onClick={logout}>logout</button>
        </>
    )
}
