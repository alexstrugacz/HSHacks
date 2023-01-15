import * as React from "react"
const Divider: React.FC<{}> = (props) => {
    return (
        <div className={"bg-gradient-to-r py-5 flex justify-center from-[#FF5360] to-[#21E4FC]"}>
            <p className={"text-white font-Poppins font-bold text-lg md:text-2xl"}>What we'll do at Innovate Chicago</p>
        </div>
    );
}
export default Divider