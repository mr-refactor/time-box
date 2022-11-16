import styles from "../../styles/PrioritiesLayout.module.css";
import { PrioritiesList } from "./PrioritiesList";

export const PrioritiesLayout = () => {
  return (
    <section className={styles.container}>
      <h2>Prioritize Tasks</h2>
      <PrioritiesList />
    </section>
  );
};
