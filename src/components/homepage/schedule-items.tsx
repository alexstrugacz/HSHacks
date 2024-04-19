import { Battery100Icon, Battery50Icon, BellIcon, ChatBubbleLeftRightIcon, CodeBracketIcon, CommandLineIcon, ComputerDesktopIcon, GiftIcon, MicrophoneIcon, PuzzlePieceIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { IScheduleItem } from "./IScheduleItem"

const EMOJI_STYLE = "h-8 text-cyan-700 transition-all";
const EMOJI_INACTIVE_STYLE = "h-8 text-cyan-900 transition-all";

export const SCHEDULE_ITEMS: IScheduleItem[] = [
    {
        i: 1,
        number: 1,
        emoji: <BellIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <BellIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Check-In & Breakfast",
        startTime: "8:00AM",
        endTime: "8:30AM",
        minutes: 30,
        description: "Check in, get your HSHacks T-Shirt and Hack Club/HSHacks stickers.\nGrab a donut and coffee while waiting for the Opening Ceremony"
    },
    {
        i: 2,
        number: 2,
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
        number: 3,
        emoji: <WrenchScrewdriverIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <WrenchScrewdriverIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Intro to HTML, CSS, JS",
        startTime: "8:45AM",
        endTime: "9:30AM",
        minutes: 15,
        description: "Explore the fundementals of HTML and CSS and get introduced to new concepts that help you get started in coding! This workshop is hosted by software engineer and consultant Husein Kareem!"
    },
    {
        i: 4,
        number: 3,
        emoji: <WrenchScrewdriverIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <WrenchScrewdriverIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Build a Mini-Calendar w/ React",
        startTime: "8:45AM",
        endTime: "9:30AM",
        minutes: 15,
        description: "Explore the industry-standard framework being used by top tech companies to build websites."
    },
    {
        i: 6,
        number: 5,
        emoji: <ChatBubbleLeftRightIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <ChatBubbleLeftRightIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Team Formation",
        startTime: "9:30AM",
        endTime: "9:45AM",
        minutes: 15,
        description: "Meet other HSHackers and form a new group!"
    },
    {
        i: 7,
        number: 6,
        emoji: <CodeBracketIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <CodeBracketIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Open Coding Time",
        startTime: "9:45AM",
        endTime: "10:00AM",
        minutes: 15,
        description: "Free time to code! There are no workshops or events currently happening."
    },
    {
        i: 8,
        number: 7,
        emoji: <WrenchScrewdriverIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <WrenchScrewdriverIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Postman APIs Workshop",
        startTime: "10:00AM",
        endTime: "11:00AM",
        minutes: 60,
        description: "Learn the basics of REST APIs at this workshop, hosted by our sponsor Postman!"
    },
    {
        i: 9,
        number: 7,
        emoji: <WrenchScrewdriverIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <WrenchScrewdriverIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "NodeJS/MongoDB Backend Workshop",
        startTime: "10:00AM",
        endTime: "11:00AM",
        minutes: 60,
        description: "Build a project while learning NodeJS and MongoDB. This is hosted in the presentation room."
    },
    {
        i: 10,
        number: 8,
        emoji: <CodeBracketIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <CodeBracketIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Open Coding Time",
        startTime: "11:00AM",
        endTime: "11:15AM",
        minutes: 15,
        description: "Free time to code! There are no workshops or events currently happening."
    },
    {
        i: 11,
        number: 9,
        emoji: <MicrophoneIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <MicrophoneIcon className={EMOJI_INACTIVE_STYLE} />,
        italic: true,
        title: "Build Your Programming Toolbox: Workshop",
        startTime: "11:15AM",
        endTime: "12:00PM",
        minutes: 45,
        description: "Larry Schrof, former software engineer at Meta and Shopify, will go over the tools, languages, and methodologies you need to know to be a successful software engineer!"
    },
    {
        i: 12,
        number: 10,
        emoji: <Battery100Icon className={EMOJI_STYLE} />,
        inactiveEmoji: <Battery100Icon className={EMOJI_INACTIVE_STYLE} />,
        title: "Lunch",
        startTime: "12:00PM",
        endTime: "12:45PM",
        minutes: 45,
        description: "Grab some food in the eating area of the ARC!"
    },
    {
        i: 13,
        number: 10,
        emoji: <MicrophoneIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <MicrophoneIcon className={EMOJI_INACTIVE_STYLE} />,
        italic: true,
        title: "Larry Shrof AMA",
        startTime: "12:10PM",
        endTime: "12:55PM",
        minutes: 45,
        description: "Larry Schrof, former software engineer at Meta and Shopify, will host an AMA where you can ask him anything about his career, software engineering, or anything else you're curious about!"
    },
    {
        i: 14,
        number: 11,
        emoji: <CodeBracketIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <CodeBracketIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Open Coding Time",
        startTime: "12:55PM",
        endTime: "1:30PM",
        minutes: 35,
        description: "Free time to code! There are no workshops or events currently happening."
    },
    {
        i: 15,
        number: 12,
        emoji: <WrenchScrewdriverIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <WrenchScrewdriverIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "AI MNIST Digit Recognition Workshop",
        startTime: "1:30PM",
        endTime: "2:15PM",
        minutes: 45,
        description: "This is a workshop about creating an AI using Python and Tensorflow to recognize MNIST Handwritten Digits! This workshop is a great way to get started with AI and Machine Learning!"
    },
    {
        i: 16,
        number: 12,
        emoji: <WrenchScrewdriverIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <WrenchScrewdriverIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Project Presentation Workshop",
        startTime: "1:30PM",
        endTime: "2:15PM",
        minutes: 45,
        description: "In this workshop, you'll learn how to present your project to the judges effectively! This is a great way to learn how to communicate your ideas, pitch concepts, and more!"
    },
    {
        i: 17,
        number: 13,
        emoji: <PuzzlePieceIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <PuzzlePieceIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Pictionary",
        startTime: "2:15PM",
        endTime: "3:15PM",
        minutes: 60,
        description: "Let's take a break from coding and play a minigame!"
    },
    {
        i: 18,
        number: 14,
        emoji: <PuzzlePieceIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <PuzzlePieceIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "TypeRacer Competition",
        startTime: "3:15PM",
        endTime: "4:00PM",
        minutes: 15,
        description: "Let's take a break from coding and play a minigame! $45 Desmos gift card reward to the winner!"
    },
    {
        i: 19,
        number: 15,
        emoji: <CodeBracketIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <CodeBracketIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Open Coding Time",
        startTime: "3:30PM",
        endTime: "5:30PM",
        minutes: 120,
        description: "Free time to code! There are no workshops or events currently happening."
    },
    {
        i: 20,
        number: 16,
        emoji: <Battery100Icon className={EMOJI_STYLE} />,
        inactiveEmoji: <Battery100Icon className={EMOJI_INACTIVE_STYLE} />,
        title: "Dinner + Project Demos",
        startTime: "5:30PM",
        endTime: "7:00PM",
        minutes: 150,
        description: "We’ll hang out and eat some pizza while the judges determine awards."
    },
    {
        i: 21,
        number: 17,
        emoji: <Battery100Icon className={EMOJI_STYLE} />,
        inactiveEmoji: <Battery100Icon className={EMOJI_INACTIVE_STYLE} />,
        title: "Dinner + Slides",
        startTime: "7:00PM",
        endTime: "7:45PM",
        minutes: 45,
        description: "We’ll hang out and eat some pizza while the judges determine awards."
    },
    {
        i: 22,
        number: 17,
        emoji: <PuzzlePieceIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <PuzzlePieceIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Paper.io Minigame",
        startTime: "7:00PM",
        endTime: "7:30PM",
        minutes: 15,
        description: "Let's take a break from coding and play a minigame!"
    },
    {
        i: 23,
        number: 18,
        emoji: <MicrophoneIcon className={EMOJI_STYLE} />,
        inactiveEmoji: <MicrophoneIcon className={EMOJI_INACTIVE_STYLE} />,
        title: "Closing Ceremony",
        startTime: "7:45PM",
        endTime: "8:00PM",
        minutes: 15,
        description: "We’ll wrap up the hackathon and thank our sponsors and volunteers"
    }
]