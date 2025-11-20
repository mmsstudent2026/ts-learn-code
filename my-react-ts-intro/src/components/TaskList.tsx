import useTaskStore from "../stores/useTaskStore";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTaskStore();

  return (
    <>
      <h1 className=" text-stone-600 font-bold text-2xl ">
        Task List ( {tasks.filter((task) => task.done).length} / {tasks.length})
      </h1>
      <div className=" flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
