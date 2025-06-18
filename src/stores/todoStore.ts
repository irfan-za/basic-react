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
  toggleTodo: (todoId: number) => void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: null,
  setTodos: (todos) => set({ todos }),
  fetchTodos: async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!res.ok) throw new Error("Failed to fetch");
      const todos = await res.json();
      set({ todos });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ todos: [] });
    }
  },
  toggleTodo: (todoId: number) => {
    const { todos } = get();
    if (!todos) return;

    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    set({ todos: updatedTodos });
  },
}));
