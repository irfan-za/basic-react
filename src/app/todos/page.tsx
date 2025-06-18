import TodoList from "@/components/TodoList";
import React from "react";

export default function TodosPage() {
  return (
    <div className="container mx-auto  p-4 pt-12 md:pt-16">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Todo List</h1>
        <p className="text-gray-600 mb-8">Manage any tasks easily</p>
      </div>
      <TodoList />
    </div>
  );
}
