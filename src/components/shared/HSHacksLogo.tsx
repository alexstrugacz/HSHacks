import * as React from "react"
const logo = require("../shared/logo.PNG")

const HSHacksLogo: React.FC<{
    className: string;
}> = (props) => {
    return (
        <img src={logo} className={props.className} />
    );
}
export default HSHacksLogo