import * as React from "react"
const Activity: React.FC<{
    title: string;
    description: string;
}> = (props) => {
    return (
        <div className={"bg-zinc-50 shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-all hover:cursor-pointer"}>
            <div className={"bg-zinc-50 rounded-lg"}>
                <div className={"h-40 bg-zinc-300"}></div>
                <div className={"p-5"}>
                    <h2 className={"text-black text-center font-Poppins font-bold text-xl"}>{props.title}</h2>
                    <p className={"text-gray-500 text-center font-Poppins text-lg"}>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
export default Activity