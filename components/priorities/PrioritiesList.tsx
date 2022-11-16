import { FunctionComponent as FC, useContext, useState } from "react";
import { TaskContext } from "../../context/TasksContext";
import { Draggable } from "../Draggable";

export const PrioritiesList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((t) => (
        <Draggable key={t.id}>
          <p>{t.value}</p>
        </Draggable>
      ))}
    </div>
  );
};
