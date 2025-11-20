import { Plus } from "lucide-react";
import Button from "./Button";
import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import useTaskStore from "../stores/useTaskStore";

const TaskCreateForm = () => {
  const [newTask, setNewTask] = useState("");

  const { storeTask } = useTaskStore();

  return (
    <form>
      <div className={` border-2 border-stone-600 p-5 flex gap-5`}>
        <input
          className=" text-stone-500 w-full focus-visible:outline-0"
          placeholder="Click to type new task"
          value={newTask}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTask(e.target.value)
          }
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" && newTask.trim() !== "") {
              e.preventDefault();
              // Call the storeTask function from the store to add the new task
              storeTask(newTask.trim());
              setNewTask("");
              console.log(e.currentTarget.value);
            }
          }}
          autoFocus
        />
        <Button variant="solid" className="ml-auto">
          <Plus />
        </Button>
      </div>
    </form>
  );
};

export default TaskCreateForm;
