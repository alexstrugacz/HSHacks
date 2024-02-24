export interface ScheduleItem {
    startTime: string,
    eventName: string,
    height: number,
    isEmpty?: boolean
}

export const SCHEDULE_GROUPINGS_2024: {
    time: string,
    items: ScheduleItem[]
}[] = [
        {
            time: "7:50AM",
            items: [
                { startTime: "7:50AM", eventName: "Check-in and Breakfast", height: 1 }
            ]
        },
        {
            time: "8:30AM",
            items: [
                { startTime: "8:30AM", eventName: "Opening Ceremony + Sponsor & Nonprofit Intros", height: 1 }
            ]
        },
        {
            time: "8:45AM",
            items: [
                { startTime: "8:45AM", eventName: "Group Formation", height: 1 }
            ]
        },
        {
            time: "9:00AM",
            items: [
                { startTime: "9:00AM", eventName: "Open Coding Time", height: 1 },
                { startTime: "", eventName: "Intro to React Workshop", height: 1 },
                { startTime: "", eventName: "React Workshop", height: 1 }
            ]
        },
        {
            time: "10:30AM",
            items: [
                { startTime: "9:00AM", eventName: "Open Coding Time", height: 1 },
                { startTime: "", eventName: "Postman APIs Workshop", height: 1 },
                { startTime: "", eventName: "MongoDB/NodeJS Workshop", height: 1 }
            ]
        },
        {
            time: "12:00PM",
            items: [
                { startTime: "12:00PM", eventName: "Lunch Available", height: 1 },
                { startTime: "", eventName: "LangChain AI Workshop", height: 1 },
                { startTime: "", eventName: "AMA w/ Big Tech Developer", height: 1 }
            ]
        },
        {
            time: "1:00PM",
            items: [
                { startTime: "1:00PM", eventName: "Open Coding Time", height: 4 }
            ]
        },
        {
            time: "5:45PM",
            items: [
                { startTime: "5:45PM", eventName: "Presentations to SWE Judges", height: 1 },
                { startTime: "", eventName: "Project Judging by Software Engineers", height: 1 }
            ]
        },
        {
            time: "6:30PM",
            items: [
                { startTime: "6:30PM", eventName: "Dinner", height: 1 }
            ]
        },
        {
            time: "7:45PM",
            items: [
                { startTime: "7:45PM", eventName: "Award Ceremony", height: 1 }
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
            startTime: "7:50AM",
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
            eventName: "Group Formation",
            height: 1
        },
        {
            startTime: "9:00AM",
            eventName: "Open Coding Time",
            height: 2
        },
        {
            startTime: "12:00PM",
            eventName: "Lunch",
            height: 1
        },
        {
            startTime: "1:00PM",
            eventName: "Open Coding Time",
            height: 4
        },
        {
            startTime: "5:45PM",
            eventName: "Presentations to SWE Judges",
            height: 1
        },
        {
            startTime: "6:30PM",
            eventName: "Dinner",
            height: 1
        },
        {
            startTime: "7:45PM",
            eventName: "Award Ceremony",
            height: 1
        },
        {
            startTime: "8:00PM",
            eventName: "Closing Ceremony",
            height: 1
        }
    ],
    [
        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "Intro to React Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "Postman APIs Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "LangChain AI Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "",
            height: 5,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "Project Judging by Software Engineers",
            height: 1
        },
        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },
    ],
    [
        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },
        {
            startTime: "",
            eventName: "React Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "MongoDB/NodeJS Workshop",
            height: 1
        },
        {
            startTime: "",
            eventName: "AMA w/ Big Tech Developer",
            height: 1
        },
        {
            startTime: "",
            eventName: "",
            height: 5,
            isEmpty: true
        },

        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },

        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },

        {
            startTime: "",
            eventName: "",
            height: 1,
            isEmpty: true
        },
    ]
]