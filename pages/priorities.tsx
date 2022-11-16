import Head from "next/head";
import { PrioritiesLayout } from "../components/priorities/PrioritiesLayout";

export default function PrioritiesPage() {
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
      <PrioritiesLayout />
    </div>
  );
}
