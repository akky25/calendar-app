import { FC } from "react";
import { Typography } from "@material-ui/core";

import styles from "./style.module.css";

type Props = {
  dayOfWeek: string;
};

const CalendarElement: FC<Props> = ({ dayOfWeek }) => (
  <div className={styles.element}>
    <Typography
      className={styles.days}
      color="textSecondary"
      align="center"
      variant="caption"
      component="div"
    >
      {dayOfWeek}
    </Typography>
  </div>
);

export default CalendarElement;
