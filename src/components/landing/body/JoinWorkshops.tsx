import React from "react"
import joinworkshops from "../../../assets/images/joinworkshops.png"


const JoinWorkshops: React.FC<{}> = () => {
    return (
        <div className="md:h-[303px] h-full bg-[#E0E0E0] w-screen">
            <div className="md:flex">
                <div className="md:hidden md:mt-8">
                    <img className="md:scale-[1.3] scale-[0.8] md:mt-6" src={joinworkshops}></img>
                </div>
                <div className="md:ml-[15vh] ml-[5vh] md:pt-24 md:pt-8">
                    <h2 className="font-Poppins font-bold text-2xl md:text-3xl">🧑‍💻 Join <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C]">workshops</a></h2>
                    <p className="font-Poppins md:pt-6 pt-4 pb-5 text-sm md:text-lg w-4/5 leading-relaxed">Attend live workshops to learn new skills in web, game development, AI, and more! No experience needed.</p>
                </div>
                <div className="hidden md:block mt-8 ml-16 mr-[20vh]">
                    <img className="scale-[1.3] mt-6" src={joinworkshops}></img>
                </div>
            </div>
        </div >
    )
}

export default JoinWorkshops;