import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TasksContextProvider } from "../context/TasksContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TasksContextProvider>
      <Component {...pageProps} />
    </TasksContextProvider>
  );
}
