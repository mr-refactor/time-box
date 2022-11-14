import styles from "../../styles/TaskDump.module.css";
import { AddTaskForm } from "./AddTaskForm";
import { TaskBox } from "./TaskBox";

export const TaskDump = () => {
  return (
    <section className={styles.container}>
      <h2>Task Dump</h2>
      <AddTaskForm/>
      <TaskBox />
    </section>
  );
};
