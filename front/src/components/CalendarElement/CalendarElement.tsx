import { FC } from "react";

import styles from "./style.module.css";

const CalendarElement: FC = ({ children }) => (
  <div className={styles.element}>{children}</div>
);

export default CalendarElement;
