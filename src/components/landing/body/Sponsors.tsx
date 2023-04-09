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
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Proudly presented by <a className=" bg-clip-text text-[#338eda]">our sponsors</a> </h2>
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
                        logo={"https://1000logos.net/wp-content/uploads/2021/04/Costco-logo.png"}
                        body={"Costco is a membership-only warehouse club that provides a wide selection of merchandise. Thank you for supporting HSHacks!"}
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

            </div>
            <br />
            <br />
            <br />
        </div>
    );
}
export default Sponsors