import * as React from "react"
import Sponsor from "./Sponsor"
const _66degrees = require("../assets/logos/66degrees.png")
const hackclub = require("../assets/logos/hackclub.png")
const postman = require("../assets/logos/Postman.png")

const Sponsors: React.FC<{}> = (props) => {

    return (
        <div>
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Proudly presented by <a className=" bg-clip-text text-[#338eda]">our sponsors</a> </h2>
                <br />
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10"}>
                    <Sponsor
                        tier={"platinum"}
                        logo={"https://i.ibb.co/YfdgkMF/nav-logo.png"}
                        body={"Normandy Remodeling is a Chicago-area remodeling company specializing in home, kitchen, and bathroom models. Thank you for supporting HSHacks!"}
                        url={"https://www.normandyremodeling.com/"}
                    />

                    <Sponsor
                        tier={"gold"}
                        logo={hackclub}
                        body={"Hack Club is a global network of student-led coding clubs. They provide the resources, community, and support you need to start and sustain a coding club at your school. Thank you for sponsoring the HSHacks Hackathon!"}
                        url={"https://hackclub.com/"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://i.ibb.co/27ZzQ4K/1-removebg-preview.png"}
                        body={"MobileMakersEdu by Uncharted Learning offers iOS development courses that enable students to learn coding, design, and collaboration skills to bring mobile app ideas to life! Thank you for sponsoring the HSHacks Hackathon."}
                        url={"https://www.unchartedlearning.org/student-programs/mobilemakersedu"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://i.ibb.co/QX1kWfz/unitedcoder.png"}
                        body={"United Coder offers instructor-led project-based software development and test automation engineer training programs, enabling anyone to pursue new careers in these fields! Thank you for sponsoring the HSHacks Hackathon."}
                        url={"https://www.unitedcoder.com/"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://i.ibb.co/9T7S4Fh/draftbit.png"}
                        body={"Draftbit is a tool to build native moile apps, responsive web apps, and internal tools visually and collaboratively. Thank you for providing us with Draftbit access!"}
                        url={"https://draftbit.com/"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://images.ctfassets.net/2lpsze4g694w/7bkN622iWKMAPwRpRR5LEV/e97ceedd530c321519e75d0294f0fb8f/wolfram-language-text-logo-copy-1.png?w=800"}
                        body={"Wolfram is a technology company that specializes in the development of mathematical software, programming languages, and data analysis tools! Thank you for providing us with Wolfram|One access!"}
                        url={"https://www.wolfram.com/"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://stickerninja.com/wp-content/themes/sticker-ninja/dist/images/logo-dark_3e368c83.png"}
                        body={"StickerNinja is a sticker printing company that provides awesome, high-quality stickers at a low cost for all of your sticker needs! Thank you for providing us with HSHacks stickers!"}
                        url={"https://www.stickerninja.com/"}
                        customHeight={"max-h-[3.5rem]"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://cdn.oreillystatic.com/images/sitewide-headers/oreilly_logo_mark_red.svg"}
                        body={"For over 40 years O’Reilly has provided technology and business training, knowledge, and insight to help companies succeed. Our unique network of experts and innovators share their knowledge and expertise through books, articles, and our online learning platform. O’Reilly online learning gives you on-demand access to live training courses, in-depth learning paths, interactive coding environments, certification prep materials, and a vast collection of text and video from O’Reilly and 200+ other publishers. For more information visit oreilly.com."}
                        url={"https://www.oreilly.com/"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://2023.hawkhacks.com/interviewcake-logo.png"}
                        body={"InterviewCake is an online software engineering course offering a structured approach to preparing for tech interviews with in-depth readings, practical questions, step-by-step solutions, and valuable tips."}
                        url={"https://www.interviewcake.com/"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://i.ibb.co/tqHwGZX/echo3-D-brand-logo-2-removebg-preview-1.png"}
                        body={"Echo3D is a 3d asset management company for developers, focusing on API and cloud infrastructure for 3d asset management. Thank you for providing us with Echo3D access!"}
                        url={"https://www.echo3d.com/"}
                    />



                    <Sponsor
                        tier={"silver"}
                        logo={"https://i.ibb.co/G2wjtPh/interviewbuddy.png"}
                        body={"InterviewBuddy is a platform that provides virtual face-to-face mock interviews with industry experts, enabling developers and students to practice and prepare for their next tech job interview!"}
                        url={"https://www.interviewbuddy.net/"}
                        customHeight={"max-h-[3.5rem]"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://i.ibb.co/Vj0WLD7/Group-200-1.png"}
                        body={"Art of Problem Solving provides advanced online Math learning resources, classes, and books for students from Elementary to High School, enabling them to expand their mathematical problem-solving skills!"}
                        url={"https://artofproblemsolving.com/"}
                        customHeight={"max-h-[3.5rem]"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://cdn.worldvectorlogo.com/logos/axure-2.svg"}
                        body={"Axure is a powerful tool for creating prototypes and specifications for websites and applications, simplifying the process of bringing your digital ideas to life."}
                        url={"https://www.axure.com/"}
                        customHeight={"max-h-[2rem]"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://i.ibb.co/WsDKSsN/Logos-website-05-1.png"}
                        body={"Balsamiq is a rapid wireframing software that combines the simplicity of paper sketching with the power of a digital tool so that teams can focus on what's important!"}
                        url={"https://www.balsamiq.com/"}
                    />
                    <Sponsor
                        tier={"silver"}
                        logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Desmos_logo.svg/1200px-Desmos_logo.svg.png"}
                        body={"Desmos is a dynamic mathematical tool that transforms the way students and educators engage with mathematical concepts! Users can graph functions, plot data, evaluate equations, explore transformations, and much more!"}
                        customHeight={"max-h-10"}
                        url={"https://www.desmos.com/"}
                    />

                </div>

            </div>
            <br />
            <br />
            <br />
        </div>
    );
}
export default Sponsors