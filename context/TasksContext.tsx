import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FunctionComponent,
} from "react";

interface ContextProps {
  tasks?: string[];
  setTasks?: Dispatch<SetStateAction<never[]>>;
}

interface Props {
  children?: ReactNode;
}

export const TaskContext = createContext<ContextProps>({});

export const TasksContextProvider: FunctionComponent<Props> = ({
  children,
}) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
