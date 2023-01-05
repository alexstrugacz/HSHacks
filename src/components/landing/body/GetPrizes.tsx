import React from "react"
import getprizes from "../../../assets/images/getprizes.png"


const GetPrizes: React.FC<{}> = () => {
    return (
        <div className="h-[303px] bg-[#D9D9D9] w-screen">
            <div className="flex">
                <div className="mt-8 ml-24 mr-[15vh]">
                    <img className="ml-[5vh] object-fit scale-110 mt-5" src={getprizes}></img>
                </div>
                <div className="ml-[20vh] pt-16 mt-3">
                    <h2 className="font-Poppins font-bold  text-3xl">🎁 Get <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C]">prizes & swag</a></h2>
                    <p className="font-Poppins pt-6 text-lg w-4/5 leading-relaxed">Top 3 projects will receive cool tech prizes, and all participants will receive Windy City Hacks swag! </p>
                </div>

            </div>
        </div >
    )
}

export default GetPrizes;