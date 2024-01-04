import * as React from "react"
import NavbarWrapper from "../../navbar/NavbarWrapper";
import LastYearBody from "./LastYearBody";
import LastYearHeader from "./LastYearHeader";

const LastYear: React.FC<{}> = (props) => {
    return (
        <div>
            <NavbarWrapper>
                <LastYearHeader />
                <LastYearBody />
            </NavbarWrapper>
        </div>
    );
}
export default LastYear