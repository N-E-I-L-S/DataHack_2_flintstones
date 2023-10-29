import React, { useEffect } from 'react'
import useLawyers from '../../context/LawyerContext';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import { NavLink } from 'react-router-dom';
export default function DisplayLawyer() {

    const { alllawyers, lawtype } = useLawyers()

    const alllawyers1 = [{
        name: "neil",
        experience: "4",
        location: "mumbai",
        fees: "400",
        expertise: "Labor Law",
        review: "4",
        gender: "Male",
        probono: "yes",
        language: "english",
        jurisdiction: "High Court"
    },
    {
        name: "neil",
        experience: "4",
        location: "mumbai",
        fees: "400",
        expertise: "Labor Law",
        review: "4",
        gender: "Male",
        probono: "yes",
        language: "english",
        jurisdiction: "High Court"
    },
    {
        name: "neil",
        experience: "4",
        location: "mumbai",
        fees: "400",
        expertise: "Labor Law",
        review: "4",
        gender: "Male",
        probono: "yes",
        language: "english",
        jurisdiction: "High Court"
    },
    {
        name: "neil",
        experience: "4",
        location: "mumbai",
        fees: "400",
        expertise: "Labor Law",
        review: "4",
        gender: "Male",
        probono: "yes",
        language: "english",
        jurisdiction: "High Court"
    },
    {
        name: "neil",
        experience: "4",
        location: "mumbai",
        fees: "400",
        expertise: "Labor Law",
        review: "4",
        gender: "Male",
        probono: "yes",
        language: "english",
        jurisdiction: "High Court"
    },
    {
        name: "neil",
        experience: "4",
        location: "mumbai",
        fees: "400",
        expertise: "Labor Law",
        review: "4",
        gender: "Male",
        probono: "yes",
        language: "english",
        jurisdiction: "High Court"
    }
    ]
    useEffect(()=>{

        console.log(alllawyers)
    },[])
    // if(!alllawyers)
    // return <Loader />;
    return (
        <>
            <Navbar />

            <div className="text-[5vh] font-bold text-center mb-12">These Attorneys match your description</div>
            <div className="w-full h-full container">
                {
                    lawtype
                }
                {/* {
                    alllawyers.map(lawyer => {
                        return (
                            <NavLink to={`/user/onelawyer/${lawyer.name}`}>
                                <div key={lawyer.name} className='rounded-md shadow-[2px_2px_15px] item min-h-[25vh] border border-black w-full'>
                                    <LawyerCard props={lawyer} />
                                </div>
                            </NavLink>
                        )
                    })
                } */}
            </div>
        </>
    )

}
function LawyerCard({ props }) {
    console.log(props)
    return (
        <>
            <div className="text-[4vh] text-left">
                {props.name}
            </div>
            <div className="text-[2.5vh] text-left">
                {props.experience}
            </div>
            <div className="text-[2.5vh] text-left">
                {props.location}
            </div>
            <div className="text-[2.5vh] text-left">
                {props.fees}
            </div>
                <div className="text-[2.5vh] text-left">
                    {props.review}
                </div>
                <div className="text-[2.5vh] text-left">
                    {props.expertise}
                </div>
                <div className="text-[2.5vh] text-left">
                    {props.gender}
                </div>
                <div className="text-[2.5vh] text-left">
                    {props.probono}
                </div>
            </>
            )
}
