import * as React from "react"
const Sponsor: React.FC<{
    url: string,
    src: string
}> = (props) => {
    return (
        <a href={props.url} target="_blank" className={"flex justify-center items-center flex-1"}>
            <img className={"hover:scale-105 hover:cursor-pointer transition-all object-contain h-12 "} src={props.src} />
        </a>
    );
}
export default Sponsor