import styles from "../../styles/PrioritiesLayout.module.css";
import Link from "next/link";
import { PrioritiesList } from "./PrioritiesList";

export const PrioritiesLayout = () => {
  return (
    <section className={styles.container}>
      <h2>Prioritize Tasks</h2>
      <PrioritiesList />
      <Link href="/">Back</Link>
    </section>
  );
};
