import * as React from "react"


const HowProjectsWorkCol: React.FC<{
    icon?: React.ReactNode,
    text: string;
    body: string;
}> = (props) => {
    return (
        <div className={"mt-5 flex-1"}>
            <div className={"flex flex-row justify-start gap-2"}>
                {props.icon}
                <p className={"font-Poppins font-bold text-xl"}>{props.text}</p>
            </div>
            <p className={"mt-2 font-Poppins"}>{props.body}</p>
        </div>
    );
}
export default HowProjectsWorkCol