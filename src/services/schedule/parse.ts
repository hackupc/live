import { getHourTimestamp, getDateTimestamp } from '@/services/dates'
import {
  RawSchedule,
  RawScheduleDay,
  RawScheduleEvent,
  Schedule,
  ScheduleDay,
  ScheduleEvent,
} from './types'

function parseScheduleEvent(
  event: RawScheduleEvent,
  dayTimestamp: number
): ScheduleEvent {
  const hourTimestamp = dayTimestamp + getHourTimestamp(event.startHour)

  return {
    ...event,
    startTmsp: hourTimestamp,
    endTmsp: event.endHour
      ? dayTimestamp + getHourTimestamp(event.endHour)
      : hourTimestamp,
  }
}

function parseScheduleDay(
  day: RawScheduleDay,
  baseTimeOffset: number
): ScheduleDay {
  const dayTimestamp = getDateTimestamp(day.date) + baseTimeOffset

  return {
    ...day,
    startTmsp: dayTimestamp,
    endTmsp: dayTimestamp + 24 * 60 * 60,
    events: day.events.map((event) => parseScheduleEvent(event, dayTimestamp)),
  }
}

export function parseSchedule(rawSchedule: RawSchedule): Schedule {
  const schedule: Schedule = {
    ...rawSchedule,
    days: rawSchedule.days.map((day) =>
      parseScheduleDay(day, rawSchedule.baseTimeOffset)
    ),
  }

  return schedule
}
