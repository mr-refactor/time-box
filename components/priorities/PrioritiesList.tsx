import { FunctionComponent as FC, useContext, useRef, DragEvent } from "react";
import { TaskContext } from "../../context/TasksContext";
import { Draggable } from "../Draggable";

export const PrioritiesList = () => {
  const { tasks, reorderTasks } = useContext(TaskContext);
  const draggingTask = useRef<number>();
  const dragOverTask = useRef<number>();

  const handleDragStart = (e: DragEvent, position: number): void => {
    draggingTask.current = position;
  };

  const handleDragEnter = (e: DragEvent, position: number): void => {
    dragOverTask.current = position;
  };

  function handleDragEnd(): void {
    if (
      draggingTask.current === undefined ||
      dragOverTask.current === undefined
    )
      return;
    reorderTasks(draggingTask.current, dragOverTask.current);

    draggingTask.current = undefined;
    dragOverTask.current = undefined;
  }

  return (
    <div>
      {tasks.map((t, index) => (
        <Draggable
          key={t.id}
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDragEnd={handleDragEnd}
        >
          <p>{t.value}</p>
        </Draggable>
      ))}
    </div>
  );
};
