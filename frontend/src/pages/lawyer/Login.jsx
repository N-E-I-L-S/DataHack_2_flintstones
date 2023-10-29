import React, { useRef, useState } from 'react'
import UserAuth from '../../context/UserAuth';
import { NavLink, Navigate } from 'react-router-dom'
import LawyerImg from "../../components/lawyer.png"

export default function UserLogin() {
    const { user, login, setUserType } = UserAuth()
    const uname = useRef();
    const pwd = useRef();
    console.log(user)
    const [logged, setLogged] = useState(false);
    const [logged1, setLogged1] = useState(false);
    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            <Navigate to='/lawyer/profile' />
            setUserType("lawyer")
            console.log(email);
            setLogged(false);
            setLogged1(true);
        } catch (err) {
            console.log(err);
            setLogged(true);
            setLogged1(false);
        }
    };
    if(user==null)
    return (
        <>
            <div className="h-[100vh] login-page flex justify-around text-white">
                <div className="w-[50%] p-24 pl-56 mt-12">
                <img src={LawyerImg} alt="" className='h-[30vh]'/>
                </div>
                <div className="w-[50%] rounded-bl-[15%] bg-[#212121]">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin(uname.current.value, pwd.current.value)
                }}
                >
                    <div className="login-div p-24 mt-12">
                       <h2 className='text-[4vh] font-semibold py-4'>
                        Login
                        </h2>
                        
                        {logged ?
                            <p className='pmatch'>Wrong Credentials</p>
                            :
                            null
                        }
                        {logged1 ?
                            <p className='pmatch-1'>Logged In!</p>
                            :
                            null
                        }
         
                        <div className="text-black username font-medium py-4">
                            {/* <label htmlFor="">Username</label> <br /> */}
                            <input placeholder='Username' type="email" id="uname" ref={uname} required={true} />
                        </div>
                        <div className="text-black password font-medium pt-4">
                            {/* <label htmlFor="">Password</label> <br /> */}
                            <input placeholder='Password' type="password" id="pwd" ref={pwd} required={true} />
                        </div>
                        
                        <div className="btns pt-8">
                            <button type='submit' className='login-btn px-4 py-1 rounded-sm border border-white login-submit-btn'>Login</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
    else 
    return <Navigate to ='/lawyer/profile'/>
}
