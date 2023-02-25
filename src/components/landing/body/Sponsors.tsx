import * as React from "react"
import Sponsor from "./Sponsor"
const _66degrees = require("../assets/logos/66degrees.png")
const hackclub = require("../assets/logos/hackclub.png")
const stickermule = require("../assets/logos/stickermule.png")
const wolfram = require("../assets/logos/wolfram-1.png")
const postman = require("../assets/logos/Postman.png")

const Sponsors: React.FC<{}> = (props) => {

    return (
        <div>
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Proudly presented by <a className="text-transparent bg-clip-text text-[#338EDA]">our sponsors</a> </h2>
                <br />


                <div className={"grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10"}>
                    <Sponsor
                        tier={"platinum"}
                        logo={_66degrees}
                        body={"Huge thank you for 66degree's support in making this event possible! 66degrees is a software development company that works alongside businesses to modernize cloud infrastructure with Google Cloud Platform."}
                        url={"https://66degrees.com/"}
                    />
                    <Sponsor
                        tier={"gold"}
                        logo={postman}
                        body={"Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster."}
                        url={"https://www.postman.com/"}
                    />
                    <Sponsor
                        tier={"gold"}
                        logo={hackclub}
                        body={"Hack Club is a global network of student-led coding clubs. They provide the resources, community, and support you need to start and sustain a coding club at your school."}
                        url={"https://hackclub.com/"}
                    />
                    <Sponsor
                        tier={"gold"}
                        logo={wolfram}
                        body={"Wolfram is a technology company that specializes in the development of mathematical software, programming languages, and data analysis tools! Thank you for providing us with Wolfram|One access!"}
                        url={"https://www.wolfram.com/"}
                    />
                </div>

            </div>
            <br />
            <br />
        </div>
    );
}
export default Sponsors