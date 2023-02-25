import * as React from "react"
const DividerCell: React.FC<{
    number: string;
    title: string;
}> = (props) => {
    return (
        <div className={"flex-1"}>
            <h3 className={"text-white font-bold font-Poppins text-4xl"}>{props.number}</h3>
            <p className={"font-Poppins text-white text-lg"}>{props.title}</p>
        </div>
    );
}
export default DividerCell