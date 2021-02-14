import { FC } from "react";
import { GridList } from "@material-ui/core";
import dayjs from "dayjs";

import CalendarElement from "components/CalendarElement/CalendarElement";
import DayOfWeekElement from "components/DayOfWeekElement/DayOfWeekElement";
import styles from "./style.module.css";

type Props = {
  calendar: dayjs.Dayjs[];
};

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard: FC<Props> = ({ calendar }) => (
  <div className={styles.container}>
    <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
      {days.map((d) => (
        <li key={d}>
          <DayOfWeekElement dayOfWeek={d} />
        </li>
      ))}
      {calendar.map((c) => (
        <li key={c.toISOString()}>
          <CalendarElement day={c} />
        </li>
      ))}
    </GridList>
  </div>
);

export default CalendarBoard;
