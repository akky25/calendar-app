/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import dayjs from "dayjs";
import { schedulesItem, resScheduleItem } from "redux/stateType";
import { isSameDay } from "./calendar";

const isScheduleEmpty = (schedule: schedulesItem) =>
  !schedule.title && !schedule.description && !schedule.location;

// eslint-disable-next-line import/prefer-default-export
export const setSchedules = (
  calendar: dayjs.Dayjs[],
  schedules: schedulesItem[]
) =>
  calendar.map((c) => ({
    date: c,
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));

export const formatSchedule = (schedule: resScheduleItem): schedulesItem => ({
  ...schedule,
  date: dayjs(schedule.date),
});

export const isCloseDialog = (schedule: schedulesItem) => {
  const message = "保存されていない変更を破棄しますか？";

  // eslint-disable-next-line no-alert
  return isScheduleEmpty(schedule) || window.confirm(message);
};
