import { FC } from "react";
import dayjs from "dayjs";

import CalendarElement from "components/CalendarElement/CalendarElement";
import { CalendarState } from "redux/calendar/calendar-slice";
import { getMonth } from "services/calendar";

type Props = {
  day: dayjs.Dayjs;
  month: CalendarState;
};

const EnhancedCalendarElement: FC<Props> = ({ day, month }) => {
  // 当日かどうか判断
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);

  // 今月以外をグレーダウン
  const currentMonth = getMonth(month);
  const textColor =
    day.month() === currentMonth.month() ? "textPrimary" : "textSecondary";

  return <CalendarElement isToday={isToday} textColor={textColor} day={day} />;
};

export default EnhancedCalendarElement;
