import { FC } from "react";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

// import Schedule from "components/Schedule/Schedule";
import Schedule from "containers/Schedule/Schedule";
import { schedulesItem } from "redux/stateType";
import styles from "./style.module.css";

type Props = {
  isToday: boolean;
  textColor: "textPrimary" | "textSecondary";
  day: dayjs.Dayjs;
  schedules: schedulesItem[];
};

const CalendarElement: FC<Props> = ({ isToday, textColor, day, schedules }) => (
  <div className={styles.element}>
    <Typography
      className={styles.date}
      color={textColor}
      align="center"
      variant="caption"
      component="div"
    >
      <span className={isToday ? styles.today : ""}>{day.format("D")}</span>
    </Typography>
    <div className={styles.schedules}>
      {schedules.map((e) => (
        <Schedule key={e.id} schedule={e} />
      ))}
    </div>
  </div>
);

export default CalendarElement;
