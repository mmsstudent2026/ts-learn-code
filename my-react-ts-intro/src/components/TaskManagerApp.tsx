import Container from "./Container";
import TaskCreateForm from "./TaskCreateForm";
import TaskList from "./TaskList";

const TaskManagerApp = () => {
  return (
    <Container className=" flex  flex-col p-5 gap-5">
      <h1 className=" text-stone-600 font-bold text-2xl ">Task Manager</h1>
      <TaskCreateForm />
      
      <TaskList />
    </Container>
  );
};

export default TaskManagerApp;
