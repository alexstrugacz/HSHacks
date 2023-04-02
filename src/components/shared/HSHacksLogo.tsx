import * as React from "react"
const logo = require("../shared/logo.PNG")
const whiteLogo = require("../shared/white-logo.png")

const HSHacksLogo: React.FC<{
    className: string;
    white?: boolean
}> = (props) => {
    return (
        <img src={props.white ? whiteLogo : logo} className={props.className} />
    );
}
export default HSHacksLogo