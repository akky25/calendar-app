/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import dayjs from "dayjs";
import { Form } from "redux/stateType";
import { isSameDay } from "./calendar";

// eslint-disable-next-line import/prefer-default-export
export const setSchedules = (calendar: dayjs.Dayjs[], schedules: Form[]) =>
  calendar.map((c) => ({
    date: c,
    schedules: schedules.filter((e) => isSameDay(e.date as dayjs.Dayjs, c)),
  }));
