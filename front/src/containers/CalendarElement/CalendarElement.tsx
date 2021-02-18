import { FC } from "react";
import dayjs from "dayjs";

import CalendarElement from "components/CalendarElement/CalendarElement";

type Props = {
  day: dayjs.Dayjs;
};

const EnhancedCalendarElement: FC<Props> = ({ day }) => {
  // 当日かどうか判断
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);

  // 今月以外をグレーダウン
  const textColor =
    day.month() === today.month() ? "textPrimary" : "textSecondary";

  return <CalendarElement isToday={isToday} textColor={textColor} day={day} />;
};

export default EnhancedCalendarElement;
