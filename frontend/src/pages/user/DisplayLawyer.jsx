import React from 'react'
import useLawyers from '../../context/LawyerContext';
import Loader from '../../components/Loader';
export default function DisplayLawyer() {

    const { alllawyers } = useLawyers()

    if(!alllawyers)
    return <Loader />;
    return (
        <>
            <div className="">
                {
                    alllawyers.map(lawyer => {
                        return (
                            <div key={lawyer.name} >
                                <h2>{lawyer.name}</h2>
                            </div>
                        )
                    })
                }
             </div>
        </>
    )
}
