import React from 'react'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      className='flex w-[90%] relative items-center input'
      onSubmit={handleAdd}
    >
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a Task'
        className=' w-[100%] rounded-[50px] py-[20px] px-[30px] text-[25px] border-none input__box'
      />
      <button
        className='absolute w-[50px] h-[50px] m-[12px] rounded-[50px] right-0 border-none text-[#fff] go_btn bg-bgBlue '
        type='submit'
      >
        GO
      </button>
    </form>
  )
}

export default InputFeild
