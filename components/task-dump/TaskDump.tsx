import styles from "../../styles/TaskDump.module.css";

export const TaskDump = () => {
  return (
    <section className={styles.container}>
      <h2>Task Dump</h2>
      <form>
        <label htmlFor="tasks">Today&apos;s Tasks</label>
        <input id="tasks" name="tasks" placeholder="One task for today."></input>
        <button type="submit">Add</button>
      </form>
      <div className={styles.box}></div>
    </section>
  );
};
