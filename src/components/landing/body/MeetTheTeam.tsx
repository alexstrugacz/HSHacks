import React from "react"
import miguel from "./profiles/miguel.png"
import alex from "./profiles/alex.png"



const MeetTheTeam: React.FC<{}> = () => {
    return (
        <div className="bg-[#E9E9E9] w-full md:h-[619px] h-full">
            <div className="absolute md:ml-[15vh] ml-[5vh] md:mt-[10vh] mt-[5vh]">
                <h2 className="font-Poppins font-bold text-3xl">Meet The Team</h2>
                <p className="font-Poppins font-bold text-lg text-[#989898]">Built by the <a className="text-[#FB7B3C] font-regular hover:underline" href="https://herseyhack.club">JHHS Hack Club</a></p>
            </div>
            <div className="flex pb-8">
                <div className="md:ml-[15vh] ml-[3vh] md:mt-[25vh] mt-[20vh] w-[150px]">
                    <img className="w-[150px] md:h-[150px] h-[100px] rounded-full object-cover " src={miguel}></img>
                    <p className="text-center font-bold font-Poppins text-xl mt-1">Miguel Aenlle</p>
                    <p className="text-center font-Poppins text-lg mt-4">Hackathon Organizer</p>
                    <p className="text-center font-Poppins text-md mt-8">Founder @ <br></br><a href="https://herseyhack.club" className="hover:scale-105 transition-all text-transparent font-bold inline-block bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C] d">Hersey Hack Club</a></p>
                </div>
                <div className="md:ml-[15vh] ml-[5vh] md:mt-[25vh] mt-[20vh] w-[150px]">
                    <img className="w-[150px] md:h-[149px] border-blur shadow-xl h-[100px] rounded-full object-cover " src={alex}></img >
                    <p className="text-center font-bold font-Poppins text-xl mt-1">Alex Strugacz</p>
                    <p className="text-center font-Poppins text-lg mt-4">Hackathon Organizer</p>
                    <p className="text-center font-Poppins text-md mt-8">Founder @ <br></br><a href="https://herseyhack.club" className="hover:scale-105 transition-all text-transparent font-bold inline-block bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C] d">Hersey Hack Club</a></p>
                </div>
                <br></br>
                {/* <div className=" ml-[20vh] mt-[25vh] w-[150px]">
                    <img className="w-[150px] md:h-[150px] rounded-full " src={""}></img>
                    <p className="text-center font-bold font-Poppins text-xl mt-1">Rachel Rafik</p>
                    <p className="text-center font-Poppins text-lg mt-4">Graphic, Logo Designer</p>
                </div> */}

            </div>
        </div>
    )
}

export default MeetTheTeam;