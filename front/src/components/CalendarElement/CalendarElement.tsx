import { FC } from "react";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

import styles from "./style.module.css";

type Props = {
  day: dayjs.Dayjs;
};

const CalendarElement: FC<Props> = ({ day }) => {
  // 当日かどうか判断
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);

  // 今月以外をグレーダウン
  const textColor =
    day.month() === today.month() ? "textPrimary" : "textSecondary";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(day.date() === 1 ? "M月D日" : "D")}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
