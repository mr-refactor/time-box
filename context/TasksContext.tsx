import { createContext, useState, ReactNode, FunctionComponent } from "react";
import { Task } from "../types/Task";
interface ContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (index: string) => void;
  editTask: (id: string, newValue: string) => void;
  reorderTasks: (startIndex: number, replaceIndex: number) => void;
}
interface Props {
  children?: ReactNode;
}

export const TaskContext = createContext<ContextProps>({
  // tasks: [],
  // addTask: (task: Task) => undefined,
  // removeTask: (id: string) => undefined,
  // editTask: (id: string, newValue: string) => undefined,
  // reorderTasks: (startIndex: number, replaceIndex: number) => undefined
} as ContextProps);

export const TasksContextProvider: FunctionComponent<Props> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: Task): void {
    setTasks((prev) => [...prev, task]);
  }

  function removeTask(id: string): void {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function editTask(id: string, newValue: string) {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            value: newValue,
          };
        }
        return task;
      });
    });
  }

  function reorderTasks(startIndex: number, replaceIndex: number) {
    setTasks((prev) => {
      const tasksClone = [...prev];
      const targetTask = prev[startIndex];
      tasksClone.splice(startIndex, 1);
      tasksClone.splice(replaceIndex, 0, targetTask);
      return tasksClone;
    });
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        removeTask,
        reorderTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
