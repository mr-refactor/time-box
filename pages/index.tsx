import Head from "next/head";
import styles from "../styles/Home.module.css";
import { TaskDump } from "../components/task-dump/TaskDump";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Time Box</title>
        <meta
          name="description"
          content="Get more out of your day with Time Box. Follow the time boxing template to organize your schedule and get more done."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TaskDump />
    </div>
  );
}
