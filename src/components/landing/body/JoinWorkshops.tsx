import React from "react"
import joinworkshops from "../../../assets/images/joinworkshops.png"


const JoinWorkshops: React.FC<{}> = () => {
    return (
        <div className="h-[303px] bg-[#E0E0E0] w-screen">
            <div className="flex">

                <div className="ml-[15vh] pt-24">
                    <h2 className="font-Poppins font-bold  text-3xl">🧑‍💻 Join <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C]">workshops</a></h2>
                    <p className="font-Poppins pt-6 text-lg w-4/5 leading-relaxed">Attend live workshops to learn new skills in web, game development, AI, and more! No experience needed.</p>
                </div>
                <div className="mt-8 ml-16 mr-[20vh]">
                    <img className="scale-[1.3] mt-6" src={joinworkshops}></img>
                </div>
            </div>
        </div >
    )
}

export default JoinWorkshops;