import moment from 'moment';
import * as React from 'react';
export interface IScheduleItem {
    i: number;
    number: number;
    emoji: React.ReactNode;
    inactiveEmoji: React.ReactNode;
    title: string;
    startTime: string;
    startDatetime: moment.Moment;
    endTime: string;
    endDatetime: moment.Moment;
    minutes: number;
    italic?: boolean;
    description?: string;
    location?: string;
    resourceLink?: string;
}