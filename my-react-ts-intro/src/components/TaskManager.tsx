import useTaskStore from "../stores/useTaskStore";
import Container from "./Container";
import TaskCreateForm from "./TaskCreateForm";
import TaskList from "./TaskList";

function TaskManager() {
  const { tasks } = useTaskStore();

  return (
    <Container className=" p-5 space-y-5">
      <h1 className=" text-3xl font-bold text-stone-700 ">
        Task Manager Component
      </h1>
      <TaskCreateForm />
      <TaskList tasks={tasks} />
    </Container>
  );
}

export default TaskManager;
