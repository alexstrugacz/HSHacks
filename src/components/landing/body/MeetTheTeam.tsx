import { TEAM_MEMBERS } from "../../constants/team-members";
import TeamMember from "./TeamMember";

const MeetTheTeam: React.FC<{}> = () => {
    return (

        <div>
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl border-b-2 border-b-[#3f6fa650]">Meet the team behind <a className=" bg-clip-text text-[#338eda]">HSHacks</a></h2>
                <p onClick={() => { }} className={"mt-3 text-gray-300 font-Poppins"}><a className={"text-[#5FA7ED] hover:text-cyan-400 hover:cursor-pointer transition-colors"}>Learn more about them!</a></p>
                <div className="grid grid-cols-3 pt-7 gap-5">
                    {TEAM_MEMBERS.map((member) => {
                        return (
                            <TeamMember
                                name={member.name}
                                description={member.description}
                            />
                        )
                    })}

                </div>

            </div>
        </div>
    )


}

export default MeetTheTeam;