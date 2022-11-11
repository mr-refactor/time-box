import { FormEvent } from "react";
import styles from "../../styles/TaskDump.module.css";

const useForm = () => {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log('form submitted')
    }

    return handleSubmit;
}

export const TaskDump = () => {
  const handleSubmit = useForm();

  return (
    <section className={styles.container}>
      <h2>Task Dump</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tasks">Today&apos;s Tasks</label>
        <input id="tasks" name="tasks" placeholder="One task for today."></input>
        <button type="submit">Add</button>
      </form>
      <div className={styles.box}></div>
    </section>
  );
};
