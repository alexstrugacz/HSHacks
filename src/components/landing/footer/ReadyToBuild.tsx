import React from "react"
import chicago from "../../../assets/images/chicago.png"
import RegisterButton from "../../../global/RegisterButton"
import herseymap from "../../../assets/images/herseymap.png"


const ReadyToBuild: React.FC<{}> = () => {
    return (
        <div>
            <img className="absolute h-[588px] w-full brightness-[0.3] object-cover" alt="background skyline" src={chicago}></img>
            <div className="flex">
                <div className="absolute ml-[10vh] mt-[15vh]">
                    <h2 className="font-bold text-white font-Poppins text-6xl">Ready to Build?</h2>
                    <p className="mt-8 text-xl font-bold font-Poppins text-[#B0C2DC]">Register for Innovate Chicago for a truly epic experience!</p>
                    <RegisterButton link={"/"} />
                    <p className="mt-8 font-bold font-Poppins text-neutral-400 underline"><a href="https://forms.gle/8enFaQkjySDTejfj8">Not sure if you can attend? Get a reminder closer to the event.</a></p>
                </div>
                <a href="https://www.google.com/maps/place/John+Hersey+High+School/@42.1040455,-87.9612071,15.96z/data=!4m5!3m4!1s0x880fbbad9a8cbbcd:0xbc3eb41efde43b5f!8m2!3d42.1038234!4d-87.9590565">
                    <div className="bg-neutral-300 absolute rounded-xl mr-[15vh] mt-[10vh] right-0 h-96 w-96 hover:scale-105 transition-all">
                        <img className="object-fit rounded-xl shadow-xl" src={herseymap}></img>
                        <p className=" p-6 text-[#464646] font-bold font-Poppins font-xl">Venue: <a className="text-[#848484] font-bold font-Poppins font-xl">John Hersey High School
                            Arlington Heights, IL 60076</a></p>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default ReadyToBuild;