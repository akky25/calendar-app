import { FC } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import CalendarBoard from "components/CalendarBoard/CalendarBoard";

dayjs.locale("ja");

const createCalendar = () => {
  const firstDay = dayjs().startOf("month");
  const firstDayIndex = firstDay.day();

  return Array.from(new Array(35)).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;
    const day = firstDay.add(diffFromFirstDay, "day");

    return day;
  });
};

const calendar = createCalendar();
const EnhancedCalendarBoard: FC = () => <CalendarBoard calendar={calendar} />;

export default EnhancedCalendarBoard;
