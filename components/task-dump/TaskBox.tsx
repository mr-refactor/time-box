import {
  FunctionComponent as FC,
  useContext,
} from "react";
import { TaskContext } from "../../context/TasksContext";
import { TaskComponent } from "./TaskComponent";
import styles from "../../styles/TaskBox.module.css";

export const TaskBox: FC = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className={styles.box}>
      <ul>
        {tasks.map((t) => (
          <TaskComponent key={t.id} task={t} />
        ))}
      </ul>
    </div>
  );
};


