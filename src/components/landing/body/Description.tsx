import React from "react"


const Description: React.FC<{}> = () => {
    return (
        <div>
            <div className="w-full py-12">
                <div className="max-w-6xl font-Poppins text-2xl px-5 md:px-20 my-5 mx-auto">
                    <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">12 hours of <a className="text-[#338eda]">coding, workshops, and fun!</a></h2>
                    <p className="w-full text-lg md:text-lg mt-3"><a className={"font-bold"}>HSHacks</a> is a high school hackathon where students will come for the weekend to build epic projects, make new friends, and have an awesome time! All skill levels, from beginner to master, are welcome.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description;