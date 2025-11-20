import { create } from "zustand";
import type { TaskListType, TaskType } from "../types/TaskTypes";

type TaskStoreType = {
  tasks: TaskListType;
  storeTask: (title: string) => void;
  doneTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const useTaskStore = create<TaskStoreType>((set) => ({
  tasks: [
    { id: 1, title: "Buy groceries", done: false },
    // { id: 2, title: "Write report", done: false },
    // { id: 3, title: "Walk the dog", done: true },
  ],

  storeTask: (title: string) => {
    const newTask: TaskType = {
      id: Date.now(),
      title: title,
      done: false,
    };
    set((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  },

  doneTask: (id: number) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    }));
  },

  deleteTask: (id: number) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id != id),
    }));
  },
}));

export default useTaskStore;
