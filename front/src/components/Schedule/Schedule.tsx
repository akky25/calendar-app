import { FC } from "react";

// import { Button } from "@material-ui/core";

import { schedulesItem } from "redux/stateType";
import styles from "./style.module.css";

type Props = {
  schedule: schedulesItem;
};
const Schedule: FC<Props> = ({ schedule }) => (
  <div className={styles.schedule}>{schedule.title}</div>
);

export default Schedule;
