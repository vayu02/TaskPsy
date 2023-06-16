import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos flex justify-evenly w-[90%] flex-wrap'>
      {todos.map((todo, idx) => {
        return (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        )
      })}
    </div>
  )
}

export default TodoList
