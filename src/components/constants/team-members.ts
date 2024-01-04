import Efe from "../../assets/people/efe.png";
import Miguel from "../../assets/people/miguel.png";

export interface ITeamMember {
    name: string;
    description: string;
    imageUrl?: string;
}

export const TEAM_MEMBERS: ITeamMember[] = [
    {
        name: "Efe Ozalp",
        description: "Junior, Prospect HS",
        imageUrl: Efe
    },
    {
        name: "Miguel Aenlle",
        description: "Senior, John Hersey HS",
        imageUrl: Miguel
    },
    {
        name: "Keenan Nguyen",
        description: "Junior, John Hersey HS"
    },
    {
        name: "Alex Strugacz",
        description: "Senior, John Hersey HS"
    },
    {
        name: "Matthew Lundeen",
        description: "Junior, Prospect HS"
    },
    {
        name: "Ali Alchikh Ibrahim",
        description: "Sophomore, John Hersey HS"
    },
    {
        name: "Richard Fetyko",
        description: "Sophomore, John Hersey HS"
    },
    {
        name: "Albert Kim",
        description: "Junior, Prospect HS"
    }
]