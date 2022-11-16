import { FunctionComponent as FC, useContext, useState } from "react";
import { TaskContext } from "../../context/TasksContext";
import styles from "../../styles/PrioritiesLayout.module.css";
import { Draggable } from "../Draggable";

export const PrioritiesList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((t) => (
        <Draggable key={t.id}>
          <p className={styles["draggable-task"]}>{t.value}</p>
        </Draggable>
      ))}
    </div>
  );
};
