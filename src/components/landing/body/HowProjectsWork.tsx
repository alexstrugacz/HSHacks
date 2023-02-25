import * as React from "react"
import HowProjectsWorkCol from "./HowProjectsWorkCol";

import { LightBulbIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const HowProjectsWork: React.FC<{}> = (props) => {
    return (
        <div>
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">How projects work at <a className="text-transparent bg-clip-text text-[#338EDA]">HSHacks</a> </h2>
                <div className={"flex gap-10 mobile:gap-3 mobile:flex-col"}>
                    <HowProjectsWorkCol
                        icon={<WrenchScrewdriverIcon className={"w-6 h-6 mt-[0.5px]"} />}
                        text={"Build a real-world project"}
                        body={"Nonprofit partner Project Headspace and Timing will provide opportunities to build real-world projects that will used by their organization! PH&T focuses on supporting veterans' mental health, so the applications you build will enable them to more effectively do that and have a great impact in the community. You don't have to build the whole finished product within the hackathon -- you may continue working with Project Headspace and Timing on your app after the hackathon is finished."}
                    /><HowProjectsWorkCol
                        icon={<LightBulbIcon className={"w-6 h-6 mt-[0.5px]"} />}
                        text={"Build your own ideas"}
                        body={"You may also build your own ideas around the theme of mental health. You can build a mobile app, web app, or even a hardware project. We'll have mentors and workshops to help you build your project, and you'll have the opportunity to win prizes for your project!"}
                    />
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}
export default HowProjectsWork