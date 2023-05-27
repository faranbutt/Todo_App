import Image from 'next/image'
import TodoList from '../components/todoList'
import AddTodo from '@/components/AddTodo'

export default function Home() {
  return (
   <main className='flex bg-gradient-to-tr from-primary to-secondary h-screen justify-center items-center'>
    <div className='px-5 py-5 w-full max-w-md bg-gradient-to-br from-[#D9D9D941]/50 to-[#D9D9D941]/25 backdrop:blur-xl bg-opacity-50 shadow-xl rounded-xl' >
      {/* @ts-expect-error Server Component */}
      <TodoList/>
      <AddTodo />
      <div className='w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-6' />
    </div>
   </main>
  )
}
