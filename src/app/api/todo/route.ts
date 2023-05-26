import { NextResponse, NextRequest } from "next/server";
import { db, todoTable, Todo, newTodo } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  try {
    await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255))`;
    const res = await db.select().from(todoTable);
    return NextResponse.json({ data: res });
  } catch (error) {
    console.log((error as {message:string}).message);
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export async function POST(request: NextRequest) {
  const { task }: { task: string } = await request.json();
  try {
    if (task) {
      const res =await db.insert(todoTable).values({
        task:task
      }).returning();
      console.log(res);
      return NextResponse.json({ message: "Task was added" });
      
    } else {
      throw new Error("No task was filled");
    }
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
