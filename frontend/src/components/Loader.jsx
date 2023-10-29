import React from 'react'
import Loading from "./loader.gif"
export default function Loader() {    
    return (
        <div className='p-[30%] h-[20vh] w-full flex justify-center items-center'>
            <div className="">
                <img src={Loading} alt="Loading..." />
            </div>
        </div>
)
}