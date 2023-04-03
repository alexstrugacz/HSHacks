import * as React from 'react';
export interface IScheduleItem {
    i: number;
    emoji: React.ReactNode;
    inactiveEmoji: React.ReactNode;
    title: string;
    startTime: string;
    endTime: string;
    minutes: number;
    italic?: boolean;
    description?: string;
    location?: string;
    resourceLink?: string;
}