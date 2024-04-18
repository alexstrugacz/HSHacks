export interface ScheduleItem {
    startTime: string,
    eventName: string,
    height: number,
    isEmpty?: boolean,
    compact?: boolean;
}

export const SCHEDULE_GROUPINGS_2024: {
    time: string,
    items: ScheduleItem[]
}[] = [
        {
            time: "8:00AM",
            items: [
                { startTime: "8:00AM", eventName: "Check-in and Breakfast", height: 1 }
            ]
        },
        {
            time: "8:30AM",
            items: [
                { startTime: "8:30AM", eventName: "Opening Ceremony + Sponsor & Nonprofit Intros", height: 1 },
                { startTime: "8:45AM", eventName: "Start Coding Projects", height: 1 },
            ]
        },
        {
            time: "8:45AM",
            items: [
                { startTime: "", eventName: "HTML/CSS Workshop", height: 1 },
                { startTime: "", eventName: "React Workshop", height: 1 }
            ]
        },
        {
            time: "9:30AM",
            items: [
                { startTime: "8:45AM", eventName: "Group Formation (If you need it)", height: 1 }
            ]
        },
        {
            time: "10:00AM",
            items: [
                { startTime: "", eventName: "Postman APIs Workshop", height: 1 },
                { startTime: "", eventName: "MongoDB/NodeJS Workshop", height: 1 }
            ]
        },
        {
            time: "11:15AM",
            items: [
                {
                    startTime: "",
                    eventName: "Build Your Programming Toolbox: Workshop",
                    height: 1.25,
                },
            ]
        },
        {
            time: "12:00PM",
            items: [
                { startTime: "12:00PM", eventName: "Lunch Available", height: 1 },
                {
                    startTime: "",
                    eventName: "AMA w/ Big Tech Engineer",
                    height: 1
                },
            ]
        },
        {
            time: "12:45PM",
            items: [
                { startTime: "1:00PM", eventName: "Open Coding Time", height: 4 }
            ]
        },
        {
            time: "1:30PM",
            items: [
                {
                    startTime: "",
                    eventName: "AI w/ Tensorflow and Python Workshop",
                    height: 1
                },
                {
                    startTime: "",
                    eventName: "Project Presentation Workshop",
                    height: 1
                },

            ]
        },
        {
            time: "3:15PM",
            items: [
                { startTime: "3:15PM", eventName: "Minigame", height: 4 }
            ]
        },
        {
            time: "5:30PM",
            items: [
                { startTime: "5:45PM", eventName: "Presentations to SWE Judges", height: 1 },
                { startTime: "5:45PM", eventName: "Dinner Available (eat before/after presenting)", height: 1 },
            ]
        },
        {
            time: "7:45PM",
            items: [
                { startTime: "7:45PM", eventName: "Awards & Closing Ceremony", height: 1 }
            ]
        },
        {
            time: "8:00PM",
            items: [
                { startTime: "8:00PM", eventName: "The End of an Awesome Day!", height: 1 }
            ]
        }
    ]



export const SCHEDULE_2024: ScheduleItem[][] = [
    [
        {
            startTime: "8:00AM",
            eventName: "Check-in and Breakfast",
            height: 1
        },
        {
            startTime: "8:30AM",
            eventName: "Opening Ceremony + Sponsor & Nonprofit Intros",
            height: 1
        },
        {
            startTime: "8:45AM",
            eventName: "Open Coding Time",
            height: 3.9
        },
        {
            startTime: "12:00PM",
            eventName: "Lunch Arrives",
            height: 1
        },
        {
            startTime: "1:00PM",
            eventName: "Open Coding Time",
            height: 4
        },
        {
            startTime: "5:30PM",
            eventName: "Presentations to SWE Judges",
            height: 2
        },
        {
            startTime: "7:45PM",
            eventName: "Closing Ceremony",
            height: 1
        }
    ],
    [
        {
            startTime: "",
            eventName: "",
            height: 2,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "HTML/CSS Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "Team Formation",
            height: 0.65
        },
        {
            startTime: "",
            eventName: "Postman APIs Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "Build Your Programming Toolbox: Workshop",
            height: 1.25,
        },
        {
            startTime: "",
            eventName: "AMA w/ Big Tech Engineer",
            height: 1
        },
        {
            startTime: "",
            eventName: "",
            height: 0.5,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "AI w/ Tensorflow and Python Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "",
            height: 0.5,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "Minigame",
            height: 0.8
        },
        {
            startTime: "",
            eventName: "",
            height: 1.2,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "Dinner Available",
            height: 1
        },
        {
            startTime: "",
            eventName: "",
            height: 2,
            isEmpty: true
        },
    ],
    [
        {
            startTime: "",
            eventName: "",
            height: 2,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "Intermediate React Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "",
            height: 0.65,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "MongoDB/NodeJS Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "",
            height: 2.75,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "Project Presentation Workshop",
            height: 1
        },

        {
            startTime: "",
            eventName: "",
            height: 5.5,
            isEmpty: true
        },
    ]
]