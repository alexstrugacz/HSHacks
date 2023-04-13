import * as React from "react"
import { ArrowTrendingUpIcon, LightBulbIcon, StarIcon, TrophyIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import Award from "../landing/body/awards/Award";
const ICON_STYLE = "h-6 w-6 mt-[0.5px] text-white"
const AwardsAndPrizes: React.FC<{}> = (props) => {
    return (
        <div>
            <div className={"md:grid md:grid-cols-2 md:gap-5 mt-5"}>
                <Award
                    icon={<TrophyIcon className={ICON_STYLE} />}
                    name={"Best Overall Project"}
                    prizes={["Amazon Gift Card ($175)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "HSHacks Certificate of Achievement"]}
                    description={"The highest scoring project out of any category."}
                    dark={true}
                />
                <Award
                    icon={<StarIcon className={ICON_STYLE} />}
                    name={"Best PH&T Project"}
                    prizes={["Amazon Gift Card ($150)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "HSHacks Certificate of Achievement"]}
                    description={"The highest scoring project that addresses a PH&T project request. If a PH&T project wins Best Overall Project, this award will go to the second highest scoring PH&T project."}
                    dark={true}
                />
                <Award
                    icon={<LightBulbIcon className={ICON_STYLE} />}
                    name={"Best Beginner Project"}
                    prizes={["Amazon Gift Card ($125)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "HSHacks Certificate of Achievement"]}
                    description={"The highest scoring project out of any category."}
                    dark={true}
                />
                <Award
                    icon={<ArrowTrendingUpIcon className={ICON_STYLE} />}
                    name={"Top 5 Projects"}
                    prizes={["1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "HSHacks Certificate"]}
                    description={"The 5 projects that scored highest"}
                    dark={true}
                />
                <Award
                    icon={<WrenchScrewdriverIcon className={ICON_STYLE} />}
                    name={"All Projects"}
                    prizes={["1 Month of Echo3D Premium ($99 Valuation)", "HSHacks Certificate"]}
                    description={""}
                    dark={true}
                />
            </div>
            <br />
            <p className={"font-Poppins mt-3 text-zinc-300"}>Gift Card Prizes will be distributed evenly amongst group members via email after the hackathon.</p>

            <p className={"italic text-zinc-200 font-Poppins text-lg mt-10"}>👋 Have any questions? Call over a mentor (in blue shirts) or open a thread in #code-help on Discord</p>
        </div>
    );
}
export default AwardsAndPrizes