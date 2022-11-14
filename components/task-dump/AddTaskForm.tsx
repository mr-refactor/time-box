import { FormEvent, ChangeEvent, FunctionComponent } from "react";

interface Props {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const AddTaskForm: FunctionComponent<Props> = ({
  handleSubmit,
  handleChange,
  value,
}) => {
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
