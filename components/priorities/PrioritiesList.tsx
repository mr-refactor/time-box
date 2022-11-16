import { FunctionComponent as FC, useContext, useState } from "react";
import { TaskContext } from "../../context/TasksContext";
import styles from "../../styles/PrioritiesLayout.module.css";

export const PrioritiesList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((t) => (
        <p className={styles["draggable-task"]} key={t.id}>
          {t.value}
        </p>
      ))}
    </div>
  );
};
