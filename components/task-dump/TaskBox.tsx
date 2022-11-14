import { FunctionComponent } from "react";
import styles from "../../styles/TaskBox.module.css";

interface TaskBoxProps {
  taskList: string[];
}

interface TaskProps {
  value: string;
}

export const TaskBox: FunctionComponent<TaskBoxProps> = ({ taskList }) => {
  return (
    <div className={styles.box}>
      <ul>
        {taskList.map((t, i) => (
          <Task key={`${i}-${t}`} value={t} />
        ))}
      </ul>
    </div>
  );
};

const Task: FunctionComponent<TaskProps> = ({ value }) => {
  return (
    <li>
      <p className={styles["list-item"]}>
        {value}
        <XIcon />
      </p>
    </li>
  );
};

const XIcon = () => {
  return (
    <svg
      className={styles["x-icon"]}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
    </svg>
  );
};
