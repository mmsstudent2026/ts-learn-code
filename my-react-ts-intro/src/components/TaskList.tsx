import type { FC } from "react";
import type { TaskListPropType } from "../types/TaskTypes";
import TaskItem from "./TaskItem";

const TaskList: FC<TaskListPropType> = ({tasks}) => {
  return (
    <div className=" space-y-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
