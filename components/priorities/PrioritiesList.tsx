import { FunctionComponent as FC, useContext, useState } from "react";
import { TaskContext } from "../../context/TasksContext";

export const PrioritiesList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((t) => (
        <p key={t.id}>{t.value}</p>
      ))}
    </div>
  );
};
