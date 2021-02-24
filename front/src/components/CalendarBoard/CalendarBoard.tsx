import { FC } from "react";
import { GridList } from "@material-ui/core";
import dayjs from "dayjs";

import CalendarElement from "containers/CalendarElement/CalendarElement";
import DayOfWeekElement from "components/DayOfWeekElement/DayOfWeekElement";
import { CalendarState } from "redux/calendar/calendar-slice";
import styles from "./style.module.css";

type Props = {
  calendar: dayjs.Dayjs[];
  month: CalendarState;
  openAddScheduleDialog: () => void;
};

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard: FC<Props> = ({
  calendar,
  month,
  openAddScheduleDialog,
}) => (
  <div className={styles.container}>
    <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
      {days.map((d) => (
        <li key={d}>
          <DayOfWeekElement dayOfWeek={d} />
        </li>
      ))}
      {calendar.map((c) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          key={c.toISOString()}
          onClick={openAddScheduleDialog}
          onKeyUp={openAddScheduleDialog}
        >
          <CalendarElement day={c} month={month} />
        </li>
      ))}
    </GridList>
  </div>
);

export default CalendarBoard;
