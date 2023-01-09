import React from "react"
import havelotsoffun from "../../../assets/images/havelotsoffun.png"


const HaveLotsOfFun: React.FC<{}> = () => {
    return (
        <div className="md:h-[303px] h-full md:bg-[#D9D9D9] bg-[#E0E0E0] w-screen">
            <div className="md:flex pb-8">
                <div className=" md:mt-12 md:pb-2 md:ml-[18vh] ">
                    <img className="scale-[0.8] md:scale-[1.2]" src={havelotsoffun}></img>
                </div>
                <div className="md:ml-[32vh] md:pt-20 ml-[5vh] pt-2">
                    <h2 className="font-Poppins font-bold  md:text-3xl text-2xl">🎮 Have <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C]">lots of fun!</a></h2>
                    <p className="font-Poppins pt-4 md:text-lg text-md w-4/5 leading-relaxed">We’ll hold fun games and provide free food and drink throughout the hackathon.</p>
                </div>
                {/* <div className="md:block hidden mt-8 ml-[15vh] ">
                    <img className="object-fill scale-[1] mr-[29vh]" src={havelotsoffun}></img>
                </div> */}
            </div>
        </div >
    )
}

export default HaveLotsOfFun;