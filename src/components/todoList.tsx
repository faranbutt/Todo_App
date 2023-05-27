import axios from "axios";
import React from "react";
import { Todo } from "@/lib/drizzle";

const getData = async () => {
  try {
    const res = await axios.get("https://todo-appp-faranbutt.vercel.app/api/todo");
    if (!res.data) {
      throw new Error("Something went wrong");
    } else {
      return res.data.data;
    }
  } catch (error) {
    console.log((error as { message: string }).message);
  }
};

export default async function TodoList():Promise<JSX.Element> {
  const todos:Todo[] = await getData();
  return (
    <div className="max-h-[300px] overflow-auto mb-4">
      {todos.map((todo: { id: number; task: string }) => {
        return (
          <div
            key={todo.id}
            className="bg-gray-100 py-4 px-4 flex items-center shadow rounded-lg gap-x-3 my-4 mx-5"
          >
            <div className="h-3 w-3 rounded-full bg-secondary" />
            <p className="text-lg font-medium">{todo.task}</p>
          </div>
        );
      })}
    </div>
  );
}
