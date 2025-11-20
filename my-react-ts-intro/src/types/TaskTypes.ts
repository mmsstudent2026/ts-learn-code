export type TaskType = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskListType = Array<TaskType>;

export type TaskListPropType = {
  tasks: TaskListType;
};

export type TaskItemPropType = {
  task: TaskType;
};

export type TaskStoreType = {
    tasks: TaskType[];
    storeTask : (title: string) => void;
    completeTask : (id: number) => void;
    removeTask : (id: number) => void;
}