import { FunctionComponent as FC, useContext, useState } from "react";
import { TaskContext } from "../../context/TasksContext";
import { Task } from "../../types/Task";
import { XIcon, PencilIcon } from "./Icon";
import styles from "../../styles/TaskBox.module.css";

interface TaskProps {
  task: Task;
}

const useEditing = (task: Task): any => {
  const { editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.value);

  function startEditing(): void {
    setIsEditing(true);
  }

  function updateTask(): void {
    editTask(task.id, editValue);
    setIsEditing(false);
  }

  return { isEditing, startEditing, editValue, updateTask, setEditValue };
};

export const TaskComponent: FC<TaskProps> = ({ task }) => {
  const { removeTask } = useContext(TaskContext);
  const { isEditing, startEditing, updateTask, editValue, setEditValue } =
    useEditing(task);

  return (
    <li>
      <div className={styles["list-item"]}>
        {isEditing ? (
          <form onSubmit={updateTask} onBlur={updateTask}>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          </form>
        ) : (
          <span>{task.value}</span>
        )}
        <XIcon handleClick={() => removeTask(task.id)} />
        <PencilIcon handleClick={startEditing} />
      </div>
    </li>
  );
};
