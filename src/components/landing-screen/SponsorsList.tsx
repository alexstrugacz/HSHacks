import * as React from "react"
import SponsorCell from "./SponsorCell";
const SponsorsList: React.FC<{}> = (props) => {

    const GOLD_SPONSORS = [
        "https://i.ibb.co/YfdgkMF/nav-logo.png",
        "https://i.ibb.co/Pr46qFS/hc.png",
    ]
    const SILVER_SPONSORS = [
        "https://i.ibb.co/cNmrc5N/logo-dark-3e368c83.png",
        "https://i.ibb.co/pdcTvh8/oreilly.png",
        "https://i.ibb.co/tqHwGZX/echo3-D-brand-logo-2-removebg-preview-1.png",
    ]

    return (
        <div className={"mt-10"}>
            <h2 className={"text-zinc-300 font-bold text-xl font-Poppins mb-3"}>Powered By</h2>
            <div>
                <div className={"flex flex-wrap mt-2 gap-2 opacity-90"}>
                    <SponsorCell src={"https://i.ibb.co/WfjLmFM/66degrees.png"} large />
                    {GOLD_SPONSORS.map(sponsor => {
                        return (
                            <SponsorCell src={sponsor} />
                        )
                    })}
                </div>
                <div className={"flex flex-wrap mt-2 gap-2 opacity-90"}>
                    {SILVER_SPONSORS.map(sponsor => {
                        return (
                            <SponsorCell src={sponsor} small />
                        )
                    })}
                    <SponsorCell src={"https://i.ibb.co/Q9mqsKz/costco.png"} />
                </div>
            </div>
        </div>
    );
}
export default SponsorsList