import React from "react"
import havelotsoffun from "../../../assets/images/havelotsoffun.png"


const HaveLotsOfFun: React.FC<{}> = () => {
    return (
        <div className="h-[303px] bg-[#D9D9D9] w-screen">
            <div className="flex">
                <div className="mt-11 ml-[16vh] ">
                    <img className="object-fill scale-110" src={havelotsoffun}></img>
                </div>
                <div className="ml-64 pt-20">
                    <h2 className="font-Poppins font-bold  text-3xl">🎮 Have <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C]">lots of fun!</a></h2>
                    <p className="font-Poppins pt-6 text-lg w-4/5 leading-relaxed">We’ll hold fun games and provide free food and drink throughout the hackathon.</p>
                </div>

            </div>
        </div >
    )
}

export default HaveLotsOfFun;