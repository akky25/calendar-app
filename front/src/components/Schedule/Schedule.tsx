import { FC } from "react";

// import { Button } from "@material-ui/core";

import { Form } from "redux/stateType";
import styles from "./style.module.css";

type Props = {
  schedule: Form;
};
const Schedule: FC<Props> = ({ schedule }) => (
  <div className={styles.schedule}>{schedule.title}</div>
);

export default Schedule;
