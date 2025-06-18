import { create } from "zustand";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[] | null;
  setTodos: (todos: Todo[]) => void;
  fetchTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: null,
  setTodos: (todos) => set({ todos }),
  fetchTodos: async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!res.ok) throw new Error("Failed to fetch");
      const todos = await res.json();
      set({ todos });
    } catch (error) {
      console.error("Error fetching todos:", error);
      set({ todos: [] });
    }
  },
}));
