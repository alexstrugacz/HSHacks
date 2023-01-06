import React from "react"


const Description: React.FC<{}> = () => {
    return (
        <div>
            <div className="w-full md:h-[342px] h-full pb-8 md:pb-0 bg-gradient-to-b from-[#E4E4E7] to-[#D4D4D4]">
                <div className="md:ml-[15vh] ml-[5vh] leading-7 mr-[5vh] pt-8 font-Poppins text-2xl">
                    <h2 className="font-bold font-Poppins text-[24px]  md:text-[29px] mt-4">12 hours of <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF424D] to-[#FB7B3C]">coding, workshops, and fun!</a></h2>
                    <p className="md:w-2/3 w-full text-[17px] md:text-[20px] md:mt-8 mt-6">Innovate Chicago is a high school hackathon where students from across the Chicago area will come for the weekend to build awesome projects, make new friends, and have an awesome time!
                        <br></br>
                        <br></br>
                        All experience levels, from beginner to master, are welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description;