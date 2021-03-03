/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, MouseEvent } from "react";

import { schedulesItem } from "redux/stateType";
import styles from "./style.module.css";

type Props = {
  schedule: schedulesItem;
  onClickSchedule: (e: MouseEvent<HTMLInputElement>) => void;
};

const Schedule: FC<Props> = ({ schedule, onClickSchedule }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    className={styles.schedule}
    onClick={(e: MouseEvent<HTMLInputElement>) => onClickSchedule(e)}
  >
    {schedule.title}
  </div>
);

export default Schedule;
