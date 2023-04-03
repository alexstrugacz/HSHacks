import { Battery100Icon, Battery50Icon, BellIcon, ChatBubbleLeftRightIcon, CodeBracketIcon, CommandLineIcon, ComputerDesktopIcon, GiftIcon, MicrophoneIcon, PuzzlePieceIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { IScheduleItem } from "./IScheduleItem"

const EMOJI_STYLE = "h-8 text-cyan-700 transition-all";
const EMOJI_INACTIVE_STYLE = "h-8 text-cyan-900 transition-all";

export const SCHEDULE_ITEMS: IScheduleItem[] = [
    {
        i: 1,
        emoji: <BellIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <BellIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Check-In & Breakfast",
        startTime: "7:50AM",
        endTime: "8:30AM",
        minutes: 40,
        description: "Check in, get your HSHacks T-Shirt and Hack Club/HSHacks stickers.\nGrab a donut and coffee while waiting for the Opening Ceremony"
    }, {
        i: 2,
        emoji: <MicrophoneIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <MicrophoneIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Opening Ceremony & Keynote",
        startTime: "8:30AM",
        endTime: "8:45AM",
        minutes: 15,
        description: "Project Headspace and Timing (partnered nonprofit) keynote, theme announcement, and project requests\nOverview of the hackathon and sponsors afterwards"
    },
    {
        i: 3,
        emoji: <ChatBubbleLeftRightIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <ChatBubbleLeftRightIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Team Formation",
        startTime: "8:45AM",
        endTime: "9:00AM",
        minutes: 15,
        description: "Meet up with your team or team up with new hackathon members!"
    },
    {
        i: 4,
        emoji: <CommandLineIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <CommandLineIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Personal Website Workshop",
        startTime: "9:00AM",
        endTime: "10:00AM",
        minutes: 60,
        description: "Build your own personal website using HTML and CSS at the live Personal Website workshop! No prior experience needed."
    },
    {
        i: 5,
        emoji: <WrenchScrewdriverIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <WrenchScrewdriverIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Postman APIs Workshop",
        startTime: "10:00AM",
        endTime: "11:00AM",
        minutes: 60,
        description: "Learn the basics of REST APIs at this workshop, hosted by our sponsor Postman!"
    },
    {
        i: 6,
        emoji: <CodeBracketIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <CodeBracketIcon className={EMOJI_INACTIVE_STYLE} />,
        italic: true,
        title: "Open Coding Time",
        startTime: "11:00AM",
        endTime: "12:00PM",
        minutes: 60,
        description: "Your time to code! Call over a mentor if you need any support."
    },
    {
        i: 7,
        emoji: <Battery100Icon className={EMOJI_STYLE} />,
        inactiveEmoji: <Battery100Icon className={EMOJI_INACTIVE_STYLE} />,
        title: "Lunch",
        startTime: "12:00PM",
        endTime: "12:45PM",
        minutes: 45,
        description: "Grab some food in the eating area of the ARC"
    },
    {
        i: 8,
        emoji: <CodeBracketIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <CodeBracketIcon className={EMOJI_INACTIVE_STYLE} />,
        italic: true,
        title: "Open Coding Time",
        startTime: "12:45PM",
        endTime: "1:45PM",
        minutes: 60,
        description: "Your time to code! Call over a mentor if you need any support."
    },
    {
        i: 9,
        emoji: <MicrophoneIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <MicrophoneIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Jimmy McDermott AMA",
        startTime: "1:45PM",
        endTime: "2:15PM",
        minutes: 30,
        description: "Jimmy McDermott, CTO of Transeo, an edtech company, will join via Zoom to hold an AMA & share his experiences with coding, hackathons, and more!"
    },
    {
        i: 10,
        emoji: <CodeBracketIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <CodeBracketIcon className={EMOJI_INACTIVE_STYLE} />,
        italic: true,
        title: "Open Coding Time",
        startTime: "2:15PM",
        endTime: "3:45PM",
        minutes: 90,
        description: "Your time to code! Call over a mentor if you need any support."
    },
    {
        i: 11,
        emoji: <PuzzlePieceIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <PuzzlePieceIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Minigame/Breaktime",
        startTime: "3:45PM",
        endTime: "4:15PM",
        minutes: 30,
        description: "Let's take a break from coding and play a minigame!."
    }, // add another open coding time
    {
        i: 12,
        emoji: <CodeBracketIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <CodeBracketIcon className={EMOJI_INACTIVE_STYLE} />,
        italic: true,
        title: "Open Coding Time",
        startTime: "4:15PM",
        endTime: "5:45PM",
        description: "Your time to code! Call over a mentor if you need any support.",
        minutes: 90
    },
    {
        i: 13,
        emoji: <ComputerDesktopIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <ComputerDesktopIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Project Demos",
        startTime: "5:45PM",
        endTime: "6:45PM",
        minutes: 60,
        description: "Coding will halt at 5:45PM, and we’ll show off the awesome projects built at the hackathon to the judges and other participants!"
    },
    {
        i: 14,
        emoji: <Battery100Icon className={EMOJI_STYLE} />,
        inactiveEmoji: <Battery100Icon className={EMOJI_INACTIVE_STYLE} />,
        title: "Dinner",
        startTime: "6:45PM",
        endTime: "7:30PM",
        minutes: 45,
        description: "We’ll hang out and eat some pizza while the judges determine awards"
    },
    {
        i: 15,
        emoji: <GiftIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <GiftIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Awards Ceremony",
        startTime: "7:30PM",
        endTime: "7:45PM",
        minutes: 15,
        description: "Here we’ll announce project awards and prizes!"
    },
    {
        i: 16,
        emoji: <MicrophoneIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <MicrophoneIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Closing Ceremony",
        startTime: "7:45PM",
        endTime: "8:00PM",
        minutes: 15,
        description: "We’ll wrap up the hackathon and thank our sponsors and volunteers"
    }
]