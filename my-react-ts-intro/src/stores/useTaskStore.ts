import { create } from "zustand";
import type { TaskStoreType } from "../types/TaskTypes";

// export const useTaskStore = create<TaskStore>((set, get) => ({
//     tasks: [],
//     setTasks: (tasks: Task[]) => set({ tasks }),
//     storeTask: (title: string) => {
//         const newTask: Task = {
//             id: generateId(),
//             title,
//             completed: false,
//             createdAt: Date.now(),
//         };
//         set((state) => ({ tasks: [newTask, ...state.tasks] }));
//         return newTask;
//     },

//     completeTask: (id: string) =>
//         set((state) => ({
//             tasks: state.tasks.map((t) => (t.id === id ? { ...t, completed: true } : t)),
//         })),

//     removeTask: (id: string) =>
//         set((state) => ({
//             tasks: state.tasks.filter((t) => t.id !== id),
//         })),
// }));

// // Optional helper to initialize store with tasks (call once at startup if needed)
// export const initTaskStore = (initialTasks: Task[] = []) =>
//     useTaskStore.getState().setTasks(initialTasks);

// export default useTaskStore;

const useTaskStore = create<TaskStoreType>((set) => ({
  tasks: [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn TypeScript", completed: true },
    { id: 3, title: "Build a React TS App", completed: false },
  ],
  storeTask: (title: string) => {
    const newTask = {
      id: Date.now(), 
      title,
      completed: false,
    };
    set((state) => ({ tasks: [newTask, ...state.tasks] }));
  },
  completeTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  removeTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));

export default useTaskStore;
