"use client";
import { useEffect } from "react";
import { useTodoStore } from "../stores/todoStore";
import TodoSkeleton from "./TodoSkeleton";
import Image from "next/image";

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
          onClick={() => toggleTodo(todo.id)}
          className={`p-4 rounded-lg shadow-md transition-all cursor-pointer hover:shadow-lg ${
            todo.completed ? "bg-green-50" : "bg-white"
          }`}
        >
          <div className="flex items-start">
            {todo.completed && (
              <Image
                src={"/icons/checked.svg"}
                alt={"Todo Status Icon"}
                width={24}
                height={24}
                className="transition-all"
              />
            )}
            <div className="ml-3">
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
