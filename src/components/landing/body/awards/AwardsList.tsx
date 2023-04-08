import * as React from "react"
import Award from "./Award";
import { ArrowTrendingUpIcon, LightBulbIcon, StarIcon, TrophyIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
const AwardsList: React.FC<{}> = (props) => {
    const ICON_STYLE = "h-6 w-6 mt-[0.5px] text-[#d97706]"
    return (
        <div>
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Project <a className=" bg-clip-text text-[#338eda]">Prizes</a> </h2>
                <br/>

                <div className={"md:grid md:grid-cols-2 md:gap-5 mt-5"}>
                    <Award
                        icon={<TrophyIcon className={ICON_STYLE} />}
                        name={"Best Overall Project"}
                        prizes={["Amazon Gift Card ($175)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "HSHacks Certificate of Achievement"]}
                        description={"The highest scoring project out of any category."}
                    />
                    <Award
                        icon={<StarIcon className={ICON_STYLE} />}
                        name={"Best PH&T Project"}
                        prizes={["Amazon Gift Card ($150)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "HSHacks Certificate of Achievement"]}
                        description={"The highest scoring project that addresses a PH&T project request. If a PH&T project wins Best Overall Project, this award will go to the second highest scoring PH&T project."}
                    />
                    <Award
                        icon={<LightBulbIcon className={ICON_STYLE} />}
                        name={"Best Beginner Project"}
                        prizes={["Amazon Gift Card ($125)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "HSHacks Certificate of Achievement"]}
                        description={"The highest scoring project out of any category."}
                    />
                    <Award
                        icon={<ArrowTrendingUpIcon className={ICON_STYLE} />}
                        name={"Top 5 Projects"}
                        prizes={["1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "HSHacks Certificate"]}
                        description={"The 5 projects that scored highest"}
                    />
                    <Award
                        icon={<WrenchScrewdriverIcon className={ICON_STYLE} />}
                        name={"All Projects"}
                        prizes={["1 Month of Echo3D Premium ($99 Valuation)", "HSHacks Certificate"]}
                        description={""}
                    />
                </div>
                <br />
                <p className={"font-Poppins mt-3"}>Gift Card Prizes will be distributed evenly amongst group members via email after the hackathon.</p>
            </div>
            <br />
            <br />
        </div>
    );
}
export default AwardsList