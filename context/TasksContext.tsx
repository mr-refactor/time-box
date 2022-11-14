import {
  createContext,
  useState,
  ReactNode,
  FunctionComponent,
} from "react";

interface ContextProps {
  tasks: string[];
  addTask: (task: string) => void;
  removeTask: (index: number) => void;
  editTask: (index: number, newState: string) => void;
}

interface Props {
  children?: ReactNode;
}

export const TaskContext = createContext<ContextProps>({
  tasks: [],
  addTask: (task: string) => undefined,
  removeTask: (index: number) => undefined,
  editTask: (index: number, newState: string) => undefined,
});

export const TasksContextProvider: FunctionComponent<Props> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(task: string): void {
    setTasks((prev) => [...prev, task]);
  }

  function removeTask(index: number): void {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  }

  function editTask(index: number, newState: string) {
    setTasks((prev) => {
        prev[index] = newState;
        return prev;
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        removeTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
