import React from "react"
import buildprojects from "../../../assets/images/buildprojects.png"


const JoinWorkshops: React.FC<{}> = () => {
    return (
        <div className="h-[303px] bg-[#E0E0E0] w-screen">
            <div className="flex">

                <div className="ml-[15vh] pt-16">
                    <h2 className="font-Poppins font-bold  text-3xl">🔨 Build <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C]">Projects</a></h2>
                    <p className="font-Poppins pt-6 text-lg w-4/5 leading-relaxed">Go solo or join a group of 3-5 to build awesome websites, apps, and more!</p>
                </div>
                <div className="mt-8 ml-24 mr-[15vh]">
                    <img className="object-fit" src={buildprojects}></img>
                </div>
            </div>
        </div >
    )
}

export default JoinWorkshops;