import { Plus } from "lucide-react";
import Button from "./Button";
import useTaskStore from "../stores/useTaskStore";
import { useState, type ChangeEvent, type KeyboardEvent } from "react";

const TaskCreateForm = () => {
  const [text, setText] = useState<string>("");
  const { storeTask } = useTaskStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    storeTask(text);
    setText("");
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      storeTask(e.currentTarget.value);
      setText("");
    }
  };

  return (
    <div className={` border-2 border-stone-600 p-5 flex gap-5 mb-5`}>
      <input
        className=" text-stone-500 focus:outline-0 w-full"
        placeholder="Write your new task"
        value={text}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
      <Button onClick={handleClick} variant="solid">
        <Plus />
      </Button>
    </div>
  );
};

export default TaskCreateForm;
