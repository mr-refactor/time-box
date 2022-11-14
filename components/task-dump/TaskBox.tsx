import { FunctionComponent } from "react";
import styles from "../../styles/TaskDump.module.css";

interface TaskBoxProps {
  taskList: string[];
}

interface TaskProps {
  value: string;
}

export const TaskBox: FunctionComponent<TaskBoxProps> = ({ taskList }) => {
  return (
    <div className={styles.box}>
      {taskList.map((t, i) => (
        <Task key={`${i}-${t}`} value={t} />
      ))}
    </div>
  );
};

const Task: FunctionComponent<TaskProps> = ({ value }) => {
  return <p>{value}</p>;
};
