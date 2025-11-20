import React, { memo } from "react";
import type { FC } from "react";
import type { TaskItemPropType } from "../types/TaskTypes";
import useTaskStore from "../stores/useTaskStore";
import { Trash2 } from "lucide-react";
import Button from "./Button";

const TaskItem: FC<TaskItemPropType> = ({ task: { id, title, completed } }) => {
  const { completeTask, removeTask } = useTaskStore();

  const handleRemove = () => {
    removeTask(id);
  };

  return (
    <article
      aria-labelledby={`task-${id}`}
      className="flex items-center gap-4 border-2 border-stone-600 p-4 "
    >
      <input
        id={`task-${id}`}
        type="checkbox"
        checked={completed}
        onChange={() => completeTask(id)}
        aria-checked={completed}
        className="w-4 h-4 text-indigo-600"
      />
      <p
        id={`task-${id}`}
        className={`text-stone-500 ${
          completed ? "line-through text-stone-400" : ""
        }`}
      >
        {title}
      </p>
      <Button variant="solid" onClick={handleRemove} className="ml-auto">
        <Trash2 />
      </Button>
    </article>
  );
};

export default memo(TaskItem);
