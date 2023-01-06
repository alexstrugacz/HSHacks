import React from "react"
import buildprojects from "../../../assets/images/buildprojects.png"


const BuildProjects: React.FC<{}> = () => {
    return (
        <div className="md:h-[303px] h-full bg-[#E0E0E0] w-screen">
            <div className="md:flex">
                <div className="md:hidden pt-4 px-10 md:p-8 md:ml-36 md:mr-[15vh]">
                    <img className="md:object-fit" src={buildprojects}></img>
                </div>
                <div className="ml-[5vh] mr-[5vh] md:ml-[15vh] md:pt-[11vh]">
                    <h2 className="font-Poppins pt-3 md:pt-0 font-bold text-2xl md:text-3xl">🔨 Build <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C]">Projects</a></h2>
                    <p className="font-Poppins w-full py-4 md:py-0 md:pt-6 md:text-lg text-sm md:w-4/5 leading-relaxed">Go solo or join a group of 3-5 to build <br className="md:hidden"></br>awesome websites, apps, and more!</p>
                </div>
                <div className="hidden md:block mt-8 md:ml-36 md:mr-[15vh]">
                    <img className="md:object-fit" src={buildprojects}></img>
                </div>
            </div>
        </div >
    )
}

export default BuildProjects;