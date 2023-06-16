import React from 'react'
import { Todo } from '../model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className='todos__scontainer flex w-[29.5%] rounded-[5px] p-[20px] mt-[15px] bg-[url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jp")] '>
      <span className=''>{todo.todo}</span>
      <div className='flex'>
        <span className='icon ml-[10px] text-[25px]  cursor-pointer '>
          <AiFillEdit />
        </span>
        <span className='icon'>
          <AiFillDelete />
        </span>
        <span className='icon'>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
