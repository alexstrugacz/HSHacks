import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { TEAM_MEMBERS, ITeamMember } from "../../constants/team-members";
import ColorButton from "../ColorButton";
import TeamMember from "./TeamMember";

const MeetTheTeam: React.FC<{}> = () => {
    return (

        <div>
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl border-b-2 border-b-[#3f6fa650]">Meet the team behind <a className=" bg-clip-text text-[#338eda]">HSHacks</a></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-7 mb-5 gap-10 xl:grid-cols-3">
                    {TEAM_MEMBERS.map((member: ITeamMember) => {
                        return (
                            <TeamMember
                                name={member.name}
                                description={member.description}
                                imageUrl={member.imageUrl}
                            />
                        )
                    })}
                </div>
                {/* <ColorButton
                    text={"Learn more about them"}
                    iconRight={<ChevronRightIcon className={"text-white w-5 h-5 stroke-1 stroke-white"} />}
                    onClick={() => {

                    }}
                /> */}

            </div>
        </div>
    )


}

export default MeetTheTeam;