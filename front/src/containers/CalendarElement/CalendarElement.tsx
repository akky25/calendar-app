import { FC } from "react";
import dayjs from "dayjs";

import CalendarElement from "components/CalendarElement/CalendarElement";
import { CalendarState } from "redux/calendar/calendar-slice";
import { schedulesItem } from "redux/stateType";
import { getMonth, isSameDay } from "services/calendar";

type Props = {
  day: dayjs.Dayjs;
  month: CalendarState;
  schedules: schedulesItem[];
};

const EnhancedCalendarElement: FC<Props> = ({ day, month, schedules }) => {
  // 当日かどうか判断
  const today = dayjs();
  const isToday = isSameDay(day, today);

  // 今月以外をグレーダウン
  const currentMonth = getMonth(month);
  const textColor =
    day.month() === currentMonth.month() ? "textPrimary" : "textSecondary";

  return (
    <CalendarElement
      isToday={isToday}
      textColor={textColor}
      day={day}
      schedules={schedules}
    />
  );
};

export default EnhancedCalendarElement;
