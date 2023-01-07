import React from "react"
import getprizes from "../../../assets/images/getprizes.png"


const GetPrizes: React.FC<{}> = () => {
    return (
        <div className="md:h-[303px] h-full md:bg-[#D9D9D9] bg-[#E0E0E0] w-screen">
            <div className="md:flex">
                <div className="md:mt-8 mr-[15vh] ml-[15vh] md:ml-[10vh] md:mr-[15vh]">
                    <img className="pt-8 md:pt-0 md:ml-[10vh] scale-[2.3] object-fit md:scale-[1.2] md:mt-5" src={getprizes}></img>
                </div>
                <div className="md:ml-[20vh] ml-[5vh] pt-16 md:mt-3">
                    <h2 className="font-Poppins font-bold text-2xl pt-2 md:text-3xl">🎁 Get <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C]">prizes & swag</a></h2>
                    <p className="font-Poppins md:pt-6 pt-3 text-sm pb-5 w-4/5 md:text-lg md:w-4/5 leading-relaxed">Top 3 projects will receive cool tech prizes, and all participants will receive Windy City Hacks swag! </p>
                </div>

            </div>
        </div >
    )
}

export default GetPrizes;