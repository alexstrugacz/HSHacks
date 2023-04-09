import * as React from "react"
const ContestantPage: React.FC<{}> = (props) => {
    return (
        <div className={"flex-1 w-full min-h-full flex flex-col items-start justify-start p-10"}>
            <div className={"flex items-center gap-5 max-w-6xl"}>
                <img className={"h-24"} src={"https://i.ibb.co/kKS1yBX/image.png"} />
                <p className={"text-xl text-gray-200 font-Poppins"}>
                    <a className={"text-white font-bold hover:text-zinc-300 hover:cursor-pointer transition-colors"} href={"https://projectheadspaceandtiming.org"} target={"_blank"}>Project Headspace & Timing</a> is a nonprofit that works to promote positive mental health practices for Illinois veterans.
                </p>
            </div>
            <div className={"flex flex-col gap-5 max-w-6xl"}>
                <p className={"text-zinc-300 font-Poppins mt-10"}>There are two types of projects you can build: PH&T Project Request or Original Idea. PH&T Project Requests address a PH&T problem directly, and may be further developed to deployment after the hackathon. Original ideas address the theme.</p>
                <h1 className={"text-white"}>PH&T Project Requests</h1>
                <p></p>
                <h1 className={"text-white"}>Theme</h1>
                <p></p>
            </div>
        </div>
    );
}
export default ContestantPage