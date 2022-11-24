import { FunctionComponent as FC, useContext } from "react";
import { TaskContext } from "../../context/TasksContext";
import { Task } from "../../types/Task";
import styles from "../../styles/TaskBox.module.css";
interface TaskProps {
  task: Task;
}

interface IconProps {
  taskId: string;
}

export const TaskBox: FC = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className={styles.box}>
      <ul>
        {tasks.map((t) => (
          <Task key={t.id} task={t} />
        ))}
      </ul>
    </div>
  );
};

const Task: FC<TaskProps> = ({ task }) => {
  return (
    <li>
      <p className={styles["list-item"]}>
        {task.value}
        <XIcon taskId={task.id} />
      </p>
    </li>
  );
};

// TODO: refactor to just a icon component that takes an icon and a handler
const XIcon: FC<IconProps> = ({ taskId }) => {
  const { removeTask } = useContext(TaskContext);
  function handleClick(): void {
    removeTask(taskId);
  }

  return (
    <svg
      onClick={handleClick}
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

const PencilIcon: FC<IconProps> = () => {
  const { removeTask } = useContext(TaskContext);
  function handleClick(): void {
    console.log("hello")
  }

  return (
    <svg
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
      <path
        fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
      />
    </svg>
  );
};
