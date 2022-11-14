import { useState, FormEvent, ChangeEvent } from "react";
import styles from "../../styles/TaskDump.module.css";
import { AddTaskForm } from "./AddTaskForm";
import { TaskBox } from "./TaskBox";

const useForm = () => {
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    addToTaskList(value);
    setValue("");
  }

  function addToTaskList(task: string): void {
    setTaskList((prev) => [...prev, task]);
  }

  return { handleSubmit, handleChange, value, taskList };
};

export const TaskDump = () => {
  const { handleSubmit, handleChange, value, taskList } = useForm();

  return (
    <section className={styles.container}>
      <h2>Task Dump</h2>
      <AddTaskForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={value}
      />
      <TaskBox taskList={taskList} />
    </section>
  );
};
