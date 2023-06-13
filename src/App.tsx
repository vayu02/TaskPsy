import React, { useRef, useState } from 'react'
import './App.css'
import InputFeild from './components/InputFeild'
import { Todo } from './model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const inputRef = useRef()

  let handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }
  console.log(todos)

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center bg-bgBlue '>
      <span className='uppercase text-[40px] my-[30px]  z-1 text-center text-[#fff]  '>
        Taskify
      </span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos && todos.map((t, i) => <li key={i}>{t.todo}</li>)}
    </div>
  )
}

export default App
