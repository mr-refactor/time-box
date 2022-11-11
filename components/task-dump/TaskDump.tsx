import { useState, FormEvent, ChangeEvent } from "react";
import styles from "../../styles/TaskDump.module.css";

const useForm = () => {
  const [value, setValue] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("form submitted");
  }

  return { handleSubmit, handleChange, value };
};

export const TaskDump = () => {
  const { handleSubmit, handleChange, value } = useForm();

  return (
    <section className={styles.container}>
      <h2>Task Dump</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tasks">Today&apos;s Tasks</label>
        <input
          type="text"
          value={value}
          id="tasks"
          name="tasks"
          placeholder="One task for today."
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
      <div className={styles.box}></div>
    </section>
  );
};
