import { FC } from "react";
import { GridList } from "@material-ui/core";
import dayjs from "dayjs";

import CalendarElement from "components/CalendarElement/CalendarElement";
import styles from "./style.module.css";

type Props = {
  calendar: dayjs.Dayjs[];
};

const CalendarBoard: FC<Props> = ({ calendar }) => (
  <div className={styles.container}>
    <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
      {calendar.map((c) => (
        <li key={c.toISOString()}>
          <CalendarElement>{c.format("D")}</CalendarElement>
        </li>
      ))}
    </GridList>
  </div>
);

export default CalendarBoard;
