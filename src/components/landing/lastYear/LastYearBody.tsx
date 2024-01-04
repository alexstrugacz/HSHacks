import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import * as React from "react"
import { SCHEDULE } from "../../shared/schedule";
import Schedule from "../body/Schedule";
import ScheduleItem from "../body/ScheduleItem";
import Sponsor from "../body/Sponsor";
import _66degrees from "../assets/logos/66degrees.png";
import hackclub from "../assets/logos/hackclub.png"
import postman from "../assets/logos/Postman.png"
const LastYearBody: React.FC<{}> = (props) => {
    const openHerseyLink = () => {
        const url = "https://www.google.com/maps/place/John+Hersey+High+School/@42.0896973,-87.9250359,15z/data=!4m5!3m4!1s0x880fbbad9a8cbbcd:0xbc3eb41efde43b5f!8m2!3d42.1038234!4d-87.9590565";
        window.open(url, "_blank");
    }

    const IMAGES = [
        "https://i.ibb.co/JBrK2kb/HSHacks-Welcome-Period.jpg",
        "https://i.ibb.co/w67QdDb/HSHacks-Entrance.jpg",
        "https://i.ibb.co/pJQy2Mq/HSHacks-Lunch.jpg",
        "https://i.ibb.co/3SxYztY/HSHacks-Planning-2.jpg",
        "https://i.ibb.co/S3vrGXM/HSHacks-Planning.jpg",
        "https://i.ibb.co/sKdMCZp/HSHacks-Team-Coding.jpg",
        "https://i.ibb.co/TrbRRx4/HSHacks-Volunteer-Support.jpg",
        "https://i.ibb.co/djKgNkW/HSHacks-Workshop-2-Image-3.jpg"
    ]

    return (
        <div className={"max-w-6xl mx-auto px-5 md:px-20 "}>
            <div className={"flex flex-col lg:flex-row justify-between w-full my-14"}>
                <div className={"space-y-5"}>
                    <div onClick={openHerseyLink}
                        className="group flex gap-2 mr-16 items-center hover:cursor-pointer w-fit">
                        <MapPinIcon
                            className={"w-6 text-zinc-700 group-hover:text-zinc-400 transition-colors"} />
                        <h2 className="font-bold text-zinc-700 font-Poppins group-hover:text-zinc-400 transition-colors text-xl lg:text-2xl mb-0">John
                            Hersey High School ARC</h2>
                    </div>
                    <div className="flex mt-2 md:mt-3 gap-2 items-center">
                        <CalendarIcon className={"w-6 text-zinc-700"} />
                        <h2 className="font-bold text-zinc-700 font-Poppins text-xl lg:text-2xl mr-2">April
                            20, 2024</h2>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row flex-1 mt-10 lg:mt-0 gap-5 lg:gap-10 lg:justify-right lg:items-center">
                    <div className={"flex-1"}>

                    </div>
                    <div className={""}>
                        <h3 className={"text-black font-bold font-Poppins text-4xl"}>12</h3>
                        <p className={"font-Poppins text-zinc-700 text-lg"}>Hours</p>
                    </div>
                    <div className={""}>
                        <h3 className={"text-black font-bold font-Poppins text-4xl"}>75</h3>
                        <p className={"font-Poppins text-zinc-700 text-lg"}>Participants</p>
                    </div>
                    <div className={""}>
                        <h3 className={"text-black font-bold font-Poppins text-4xl"}>$12000</h3>
                        <p className={"font-Poppins text-zinc-700 text-lg"}>Total Prize Valuation</p>
                    </div>

                </div>
            </div>
            <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Media</h2>


            <iframe
                src="https://www.youtube.com/embed/nd24fMUS1UE?si=yQ7XyXhNqdT0kRB9"
                className={"w-full h-96 mt-5 rounded-lg mb-10 shadow-lg border-2 border-white-200"}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-10"}>
                {IMAGES.map((image, index) => (
                    <img src={image} className={"w-full h-96 object-cover rounded-lg shadow-lg border-2 border-white-200"} />
                ))}
            </div>


            <br />
            <br />
            <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Schedule</h2>
            <br />

            {SCHEDULE.map((schedule, index) => {
                return (
                    <ScheduleItem
                        key={`schedule-${index}`}
                        startTime={schedule.startTime}
                        eventName={schedule.eventName}
                        body={schedule.body}
                    />
                )
            })}


            <br />
            <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Powered By</h2>
            <br />

            <div className={"grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10"}>
                <Sponsor
                    tier={"platinum"}
                    logo={_66degrees}
                    body={"Huge thank you for 66degrees's support in making this event possible! 66degrees is a software development company that works alongside businesses to modernize cloud infrastructure with Google Cloud Platform."}
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
                    logo={"https://i.ibb.co/YfdgkMF/nav-logo.png"}
                    body={"Normandy Remodeling is a Chicago-area remodeling company specializing in home, kitchen, and bathroom models. Thank you for supporting HSHacks!"}
                    url={"https://www.normandyremodeling.com/"}
                />
                <Sponsor
                    tier={"gold"}
                    logo={hackclub}
                    body={"Hack Club is a global network of student-led coding clubs. They provide the resources, community, and support you need to start and sustain a coding club at your school."}
                    url={"https://hackclub.com/"}
                />
                <Sponsor
                    tier={"gold"}
                    logo={"https://images.ctfassets.net/2lpsze4g694w/7bkN622iWKMAPwRpRR5LEV/e97ceedd530c321519e75d0294f0fb8f/wolfram-language-text-logo-copy-1.png?w=800"}
                    body={"Wolfram is a technology company that specializes in the development of mathematical software, programming languages, and data analysis tools! Thank you for providing us with Wolfram|One access!"}
                    url={"https://www.wolfram.com/"}
                />
                <Sponsor
                    tier={"silver"}
                    logo={"https://stickerninja.com/wp-content/themes/sticker-ninja/dist/images/logo-dark_3e368c83.png"}
                    body={"StickerNinja is a sticker printing company that provides awesome, high-quality stickers at a low cost for all of your sticker needs! Thank you for providing us with HSHacks stickers!"}
                    url={"https://stickerninja.com/"}
                />
                <Sponsor
                    tier={"silver"}
                    logo={"https://1000logos.net/wp-content/uploads/2021/04/Costco-logo.png"}
                    body={"Costco is a membership-only warehouse club that provides a wide selection of merchandise. Thank you for supporting HSHacks!"}
                    url={"https://www.costco.com/"}
                />
                <Sponsor
                    tier={"silver"}
                    logo={"https://cdn.oreillystatic.com/images/sitewide-headers/oreilly_logo_mark_red.svg"}
                    body={"O'Reilly is a technology media company that publishes books, online training, and conferences on technology topics. Thank you for providing us with O'Reilly learning platform access!"}
                    url={"https://www.oreilly.com/"}
                />
                <Sponsor
                    tier={"silver"}
                    logo={"https://i.ibb.co/tqHwGZX/echo3-D-brand-logo-2-removebg-preview-1.png"}
                    body={"Echo3D is a 3d asset management company for developers, focusing on API and cloud infrastructure for 3d asset management. Thank you for providing us with Echo3D access!"}
                    url={"https://www.echo3d.com/"}
                />
            </div>



            <br />
            <br />
            <br />
            <br />

            <br />
            <br />

        </div>
    );
}
export default LastYearBody