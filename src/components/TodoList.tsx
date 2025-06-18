"use client";
import { useEffect } from "react";
import { useTodoStore } from "../stores/todoStore";
import TodoSkeleton from "./TodoSkeleton";

export default function TodoList() {
  const { todos, fetchTodos, toggleTodo } = useTodoStore();

  useEffect(() => {
    if (todos === null) {
      fetchTodos();
    }
  }, [todos, fetchTodos]);

  if (!todos) {
    return <TodoSkeleton />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`p-4 rounded-lg shadow-md transition-colors ${
            todo.completed ? "bg-green-50" : "bg-white"
          }`}
        >
          <div className="flex items-start">
            <div className="mr-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-5 w-5 text-blue-600 transition-opacity disabled:opacity-50 cursor-pointer"
              />
            </div>
            <div>
              <h3
                className={`font-medium ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-gray-900"
                }`}
              >
                {todo.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
