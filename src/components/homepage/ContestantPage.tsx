import * as React from "react"
import ProjectOption from "./ProjectOption";
import AwardsList from "../landing/body/awards/AwardsList";
import AwardsAndPrizes from "./AwardsAndPrizes";
const ContestantPage: React.FC<{}> = (props) => {

    const INDIVIDUAL_RUBRIC = [
        ['Criteria/Score', 4, 3, 2, 1],
        ['Problem Relevancy', 'Directly related to mental health', 'x', 'Loosely connected to mental health. ex) sleep tracker', 'Not connected to mental health'],
        ['Quality of Solution', 'Unique solution that addresses the problem', 'Similar solutions exist but it solves the problem', 'Not unique, but addresses the problem but does not solve it', 'Not unique and does not address the problem at all'],
        ['Functionality', 'Project works and runs smoothly', 'Some parts of the project work', 'Functionality attempted but seems broken', 'Does not work at all'],
        ['Aesthetics & UX', 'Looks very professional', 'Looks somewhat professional', 'Little effort put forth for appearance', 'No effort put forth for appearance'],
        ['Presentation', 'Problem & solution are effectively communicated in a fun, engaging way', 'Problem & solution are effectively communicated', 'Idea comes across but isn\'t cohesive', 'Had a hard time understanding the idea']
    ];


    const PROJECT_REQUEST_RUBRIC = [
        ['Criteria/Score', 4, 3, 2, 1],
        ['Problem Relevancy', 'Immediate 4 for Project Requests'],
        ['Quality of Solution', "Fully addresses the selected project request", "Addresses most of the selected project request", "Addresses part of the selected project request", "Does not address the selected project request"],
        ['Functionality', 'Project works and runs smoothly', 'Some parts of the project work', 'Functionality attempted but seems broken', 'Does not work at all'],
        ['Aesthetics & UX', 'Looks very professional', 'Looks somewhat professional', 'Little effort put forth for appearance', 'No effort put forth for appearance'],
        ['Presentation', 'Problem & solution are effectively communicated in a fun, engaging way', 'Problem & solution are effectively communicated', 'Idea comes across but isn\'t cohesive', 'Had a hard time understanding the idea']
    ]

    const PROJECT_REQUESTS: [
        number,
        string,
        string
    ][] = [
            [
                1,
                "Scholarship Finder",
                "https://devpost.com/software/sigma-scholar"
            ],
            [
                2,
                "Charity Finder",
                "https://devpost.com/software/charity-foundation"
            ],
            [
                3,
                "EasyMeal",
                "https://devpost.com/software/easymeal"
            ]
        ]


    return (
        <div className={"flex-1 w-full min-h-full flex flex-col items-center justify-start p-10 pt-0"}>
            <div className={"flex flex-col gap-1 w-full max-w-6xl"}>
                <p className={"text-zinc-200 font-Poppins mt-10 text-xl p-0"}>HSHacks 2024 Theme:</p>
                <p className={"text-zinc-200 font-Poppins text-3xl pt-0 font-bold"}>Service to Others</p>
                <br />
                <h2 className={"text-2xl font-bold font-Poppins text-white border-b-[2px] border-b-zinc-600 pb-3 mb-3"}>Rules</h2>
                <p className={"text-xl text-zinc-300 font-Poppins"}>Must be written during HSHacks (can use external libraries)</p>
                <p className={"text-xl text-zinc-300 font-Poppins"}>Must revolve around the theme</p>
                <p className={"text-xl text-zinc-300 font-Poppins"}>Max. 5 participants per team</p>
                <p className={"text-xl text-zinc-300 font-Poppins"}>Can build anything (website, app, game, etc.) using any technology (language, framework, etc.)</p>

                <br />

                <p className={"text-xl text-zinc-300 font-Poppins font-bold mb-3"}>Example Projects:</p>
                <div className={"grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}>
                    {PROJECT_REQUESTS.map((request, index) => {
                        return (
                            <ProjectOption
                                key={`project-option-${index}`}
                                number={index + 1}
                                projectRequestName={request[1]}
                                extLink={request[2]}
                            />
                        )
                    })}

                </div>
                <br />
                <h2 className={"text-2xl font-bold font-Poppins text-white border-b-[2px] border-b-zinc-600 pb-3"}>Awards & Prizes</h2>
                <AwardsList projectThemesPage />
                <br />
                <br />
            </div>
        </div>
    );
}
export default ContestantPage