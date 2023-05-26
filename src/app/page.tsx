import Image from 'next/image'
import TodoList from './components/todoList'


export default function Home() {
  return (
   <main className='flex bg-gradient-to-tr from-primary to-secondary h-screen justify-center items-center'>
    <div className='px-3 py-4 w-full max-w-md bg-white shadow-xl rounded-xl' >
      {/* @ts-expect-error Server Component */}
      <TodoList/>
      <div className='w-1/2 h-1.5 bg-black/80 rounded mx-auto'></div>
    </div>
   </main>
  )
}
