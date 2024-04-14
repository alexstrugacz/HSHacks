import * as React from "react"
import Award from "./Award";
import { ArrowTrendingUpIcon, LightBulbIcon, StarIcon, TrophyIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
const AwardsList: React.FC<{
    projectThemesPage?: boolean;
}> = (props) => {
    const ICON_STYLE = `h-6 w-6 mt-[0.5px] ${props.projectThemesPage ? "text-white" : "text-[#d97706]"}`
    return (
        <div>
            <div className={`max-w-6xl w-full mx-auto ${props.projectThemesPage ? "" : " px-5 md:px-20"}`}>
                {!props.projectThemesPage && (
                    <>
                        <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Project <a className=" bg-clip-text text-[#338eda]">Prizes</a> </h2>
                        <br />
                    </>
                )}

                <div className={"md:grid md:grid-cols-2 md:gap-5 mt-5"}>
                    <Award
                        icon={<TrophyIcon className={ICON_STYLE} />}
                        name={"First Place"}
                        prizes={["Amazon Gift Card ($200)", "AWS Credits from CodeCrafters", "6 months of Draftbit Pro ($360 valuation)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "InterviewCake Interview Prep Course", "HSHacks First Place Certificate", "Axure RP Team Edition", "Sponsored Swag"]}
                        description={"The highest scoring project out of any category."}
                        dark={props.projectThemesPage}
                    />
                    <Award
                        icon={<TrophyIcon className={ICON_STYLE} />}
                        name={"Second Place"}
                        prizes={["Amazon Gift Card ($150)", "AWS Credits from CodeCrafters", "6 months of Draftbit Pro ($360 valuation)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "InterviewCake Interview Prep Course", "HSHacks Second Place Certificate", "Sponsored Swag"]}
                        description={"The highest scoring project out of any category."}
                        dark={props.projectThemesPage}
                    />
                    <Award
                        icon={<TrophyIcon className={ICON_STYLE} />}
                        name={"Third Place"}
                        prizes={["Amazon Gift Card ($100)", "AWS Credits from CodeCrafters", "6 months of Draftbit Pro ($360 valuation)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "InterviewCake Interview Prep Course", "HSHacks Third Place Certificate", "Sponsored Swag"]}
                        description={"The highest scoring project out of any category."}
                        dark={props.projectThemesPage}
                    />
                    <Award
                        icon={<LightBulbIcon className={ICON_STYLE} />}
                        name={"Best Beginner Project"}
                        prizes={["Amazon Gift Card ($100)", "AWS Credits from CodeCrafters", "6 months of Draftbit Pro ($360 valuation)", "1 Year of Wolfram|One & Wolfram|Alpha Pro ($375 Valuation)", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "InterviewCake Interview Prep Course", "HSHacks Best Beginner Project Certificate", "Sponsored Swag"]}
                        description={"The highest scoring project out of any category."}
                        dark={props.projectThemesPage}
                    />
                    <Award
                        icon={<WrenchScrewdriverIcon className={ICON_STYLE} />}
                        name={"All Projects"}
                        prizes={["6 months of Draftbit Pro ($360 valuation)", "1 Year of Wolfram|One", "1 Month of Echo3D Premium ($99 Valuation)", "1 Month of O'Reilly Learning Platform ($49 Valuation)", "HSHacks Certificate"]}
                        description={""}
                        dark={props.projectThemesPage}
                    />
                </div>
                <br />
                <p className={"font-Poppins mt-3 text-white"}>Gift Card Prizes will be distributed evenly amongst group members via email after the hackathon.</p>
            </div>
            <br />
            <br />
        </div>
    );
}
export default AwardsList