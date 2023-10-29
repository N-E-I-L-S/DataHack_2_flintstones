import React from 'react'
import UserAuth from '../context/UserAuth'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const { user, logout, usertype } = UserAuth()
    const  navigate = useNavigate()
    return (
        <>
            <div className="p-4 text-white bg-[#212121] font-semibold flex justify-between">
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
                <button className='login-btn border bg-[#ffc107] border-white px-4 py-2 rounded-sm' onClick={()=>navigate('/')}>Login</button>
            
            }
            </div>
        </>
    )
}
