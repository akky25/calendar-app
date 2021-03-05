import { FC } from "react";
import { GridList } from "@material-ui/core";
import dayjs from "dayjs";

import CalendarElement from "containers/CalendarElement/CalendarElement";
import DayOfWeekElement from "components/DayOfWeekElement/DayOfWeekElement";
import { CalendarState } from "redux/calendar/calendar-slice";
import { schedulesItem } from "redux/stateType";
// import useGetMembers from "hooks/use-get-schedules";
import styles from "./style.module.css";

type Props = {
  calendar: {
    date: dayjs.Dayjs;
    schedules: schedulesItem[];
  }[];
  month: CalendarState;
  openAddScheduleDialog: (value: schedulesItem) => void;
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
      {calendar.map(({ date, schedules }) => {
        const onclick = () => openAddScheduleDialog({ date });

        return (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li key={date.toISOString()} onClick={onclick} onKeyUp={onclick}>
            <CalendarElement day={date} month={month} schedules={schedules} />
          </li>
        );
      })}
    </GridList>
  </div>
);
export default CalendarBoard;
