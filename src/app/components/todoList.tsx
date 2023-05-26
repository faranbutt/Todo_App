import axios from "axios";
import React from "react";
import { Todo } from "@/lib/drizzle";
const getData = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/todo");
    if (!res.data) {
      throw new Error("Something went wrong");
    } else {
      return res.data.data;
    }
  } catch (error) {
    console.log((error as { message: string }).message);
  }
};

export default async function TodoList() {
  const todos:Todo[] = await getData();
  return (
    <div>
      {todos.map((todo: { id: number; task: string }) => {
        return (
          <div
            key={todo.id}
            className="bg-gray-100 py-4 px-4 flex items-center shadow rounded-lg gap-x-3"
          >
            <div className="h-3 w-3 rounded-full bg-secondary" />
            <p className="text-lg font-medium">{todo.task}</p>
          </div>
        );
      })}
    </div>
  );
}
