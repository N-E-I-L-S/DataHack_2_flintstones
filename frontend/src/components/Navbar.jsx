import React from 'react'
import UserAuth from '../context/UserAuth'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const { user, logout, usertype } = UserAuth()
    const  navigate = useNavigate()
    return (
        <>
            <div className="p-4 bg-[#212121] text-white font-semibold flex justify-between">
                <NavLink to='/user/getlawyer'>
                    <div className="">Get a Lawyer</div>
                </NavLink>
                <NavLink to='/user/getlawyer'>
                    <div className="">Get a Lawyer</div>
                </NavLink>
                <NavLink to='/user/getlawyer'>
                    <div className="">Get a Lawyer</div>
                </NavLink>
                {
                    user?
                    <button type="button" className='login-btn border bg-[#ffc107] border-white px-4 py-2 rounded-sm' onClick={() => {
                        logout()
                        navigate('/')
                    }
                }>logout</button>
                :
                null
            }
            </div>
        </>
    )
}
