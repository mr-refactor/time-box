import {
  FormEvent,
  ChangeEvent,
  FunctionComponent,
  useState,
  useContext,
} from "react";
import { TaskContext } from "../../context/TasksContext";

const useForm = () => {
  const [value, setValue] = useState("");
  const { addTask } = useContext(TaskContext);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    addTask(value);
    setValue("");
  }

  return { handleSubmit, handleChange, value };
};

export const AddTaskForm: FunctionComponent = () => {
  const { handleSubmit, handleChange, value } = useForm();

  return (
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
  );
};
