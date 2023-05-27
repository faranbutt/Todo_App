'use client'
import { newTodo } from "@/lib/drizzle";
import axios from "axios";
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function AddTodo() {
    const [task,setTask] = useState<newTodo | null>(null);
    const router = useRouter();
    const handleSubmit = async () => {

        try{
            if(task){
               const res =  await axios.post('https://todo-appp-faranbutt.vercel.app/api/todo',{
                task:task.task
            })
            setTask(null);
            router.refresh();

            }

        }catch(error){
            console.log((error as {message:string}).message);
        }
        
    }
  return (
    <div>
        <form className="w-full flex gap-x-3 mx-4">
            <input type="text" className="rounded-full w-full py-4 px-5 border focus:outline-secondary" onChange={(e)=>setTask({task: e.target.value})}/>
            <button type="button" className="shrink-0 flex bg-gradient-to-b from-primary to-secondary p-4 rounded-full" onClick={handleSubmit}>
                <Image src={'/Vector.svg'} alt="arrow" width={15} height={15}/>    
            </button>
        </form>
    </div>
  )
}
