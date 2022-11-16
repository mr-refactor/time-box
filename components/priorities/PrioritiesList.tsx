import { FunctionComponent as FC, useContext, useRef, DragEvent } from "react";
import { TaskContext } from "../../context/TasksContext";
import { Draggable } from "../Draggable";

const useReorderTasks = () => {
  const { tasks, reorderTasks } = useContext(TaskContext);
  const draggingTask = useRef<number>();
  const dragOverTask = useRef<number>();

  function handleDragStart(_e: DragEvent, position: number): void {
    draggingTask.current = position;
  }

  function handleDragEnter(_e: DragEvent, position: number): void {
    if (draggingTask.current === undefined) return;
    dragOverTask.current = position;
    reorderTasks(draggingTask.current, dragOverTask.current);
    draggingTask.current = dragOverTask.current;
    dragOverTask.current = undefined;
  }

  return {
    tasks,
    handleDragStart,
    handleDragEnter,
  };
};

export const PrioritiesList = () => {
  const { tasks, handleDragStart, handleDragEnter } = useReorderTasks();

  return (
    <div>
      {tasks.map((t, index) => (
        <Draggable
          key={t.id}
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
        >
          <p>{t.value}</p>
        </Draggable>
      ))}
    </div>
  );
};
