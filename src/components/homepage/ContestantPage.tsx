import * as React from "react"
import ProjectOption from "./ProjectOption";
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
                "Placeholder Project 1",
                "https://google.com"
            ],
            [
                2,
                "Placeholder Project 2",
                "https://google.com"
            ],
            [
                3,
                "Placeholder Project 3",
                "https://google.com"
            ]
        ]


    return (
        <div className={"flex-1 w-full min-h-full flex flex-col items-center justify-start p-10 pt-0 md:pt-10"}>
            <div className={"flex flex-col gap-5 w-full max-w-6xl"}>
                <p className={"text-zinc-200 font-Poppins mt-10 text-xl"}>There are two types of projects you can build at HSHacks: <b className={"text-white"}>🔨 PH&T Project Request</b> or <b className={"text-white"}>💡Original idea.</b></p>
                <ul>
                    <li className={"flex items-start text-xl"}>
                        <p className={"text-zinc-200 font-Poppins w-20 md:w-5 text-xl"}>•</p>
                        <p className={"font-Poppins text-zinc-300"}>
                            <b className={"text-white font-regular"}>🔨 PH&T Project Requests</b> address one of three project requests below, and may be further developed to deployment after the hackathon.
                        </p>
                    </li>
                    <li className={"flex items-start text-xl mt-3"}>
                        <p className={"text-zinc-200 font-Poppins w-20 md:w-5 text-xl"}>•</p>
                        <p className={"font-Poppins text-zinc-300"}>
                            <b className={"text-white font-regular"}>💡 Original Ideas</b> address the theme of Mental Health, and are based on unique ideas.
                        </p>
                    </li>
                </ul>
                <br />
                <br />
                <h2 className={"text-2xl font-bold font-Poppins text-white border-b-[2px] border-b-zinc-600 pb-3"}>🔨 PH&T Project Requests</h2>
                <p className={"font-Poppins text-zinc-300 text-xl"}>PH&T Project Request Projects must be web-based, and only need to address one Project Request. If you're up for it, try to address multiple Project Requests!</p>
                <p className={"text-xl text-zinc-300 font-Poppins font-bold"}>Project Options</p>
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

                <p className={"text-xl text-zinc-300 font-Poppins font-bold"}>Scoring Rubric</p>
                <div className={"w-full overflow-auto"}>
                    <table className="table-fixed bg-zinc-100 rounded-lg overflow-hidden shadow-lg">
                        <thead>
                            <tr className={"bg-zinc-300 rounded-lg font-Poppins"}>
                                {PROJECT_REQUEST_RUBRIC[0].map((item, index) => {
                                    return (
                                        <th key={`col-${index}`} className={"w-1/5 text-left text-bold p-2"}>{item}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {PROJECT_REQUEST_RUBRIC.slice(1).map((item, index) => {
                                return (
                                    <tr key={`tr-${index}`} className={"border-b-2 border-b-zinc-200"}>
                                        <td className={"p-2 font-Poppins w-1/5 bg-zinc-200 align-text-top"}>{item[0]}</td>
                                        {item.slice(1).map((item2, index2) => {
                                            return (
                                                <td key={`item-${index2}-${index}`} className={"p-2 font-Poppins w-1/5 bg-zinc-100 align-text-top hover:cursor-pointer hover:bg-zinc-200 transition-all"}>{item2}</td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <br />
                <h2 className={"text-2xl font-bold font-Poppins text-white border-b-[2px] border-b-zinc-600 pb-3"}>💡 Original Idea Guidelines</h2>
                <p className={"font-Poppins text-zinc-300 text-xl"}>Build a website, app, or game that addresses the Mental Health Theme based on an original idea.</p>
                <p className={"text-xl text-zinc-300 font-Poppins font-bold"}>Scoring Rubric</p>
                <div className={"w-full overflow-auto"}>
                    <table className="table-fixed bg-zinc-100 rounded-lg overflow-hidden shadow-lg">
                        <thead>
                            <tr className={"bg-zinc-300 rounded-lg font-Poppins"}>
                                {INDIVIDUAL_RUBRIC[0].map((item, index) => {
                                    return (
                                        <th key={`col-${index}`} className={"w-1/5 text-left text-bold p-2"}>{item}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {INDIVIDUAL_RUBRIC.slice(1).map((item, index) => {
                                return (
                                    <tr key={`tr-${index}`} className={"border-b-2 border-b-zinc-200"}>
                                        <td className={"p-2 font-Poppins w-1/5 bg-zinc-200 align-text-top"}>{item[0]}</td>
                                        {item.slice(1).map((item2, index2) => {
                                            return (
                                                <td key={`item-${index2}-${index}`} className={"p-2 font-Poppins w-1/5 bg-zinc-100 align-text-top hover:cursor-pointer hover:bg-zinc-200 transition-all"}>{item2}</td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <br />


            </div>
        </div>
    );
}
export default ContestantPage