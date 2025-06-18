"use client";
import { useEffect } from "react";
import { useTodoStore } from "../stores/todoStore";
import TodoSkeleton from "./TodoSkeleton";

export default function TodoList() {
  const { todos, fetchTodos } = useTodoStore();

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
          className={`p-4 rounded-lg shadow-md ${
            todo.completed ? "bg-green-50" : "bg-white"
          }`}
        >
          <div className="flex items-start">
            <div className="mr-3">
              <input
                type="checkbox"
                checked={todo.completed}
                readOnly
                className="h-5 w-5 text-blue-600"
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
              <p className="text-sm text-gray-500">User ID: {todo.userId}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
