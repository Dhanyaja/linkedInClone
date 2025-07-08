import React from 'react'

const PostOptions = ({Icon, title}) => {
  return (
    <div className='flex flex-row items-center gap-2 text-[#404040] hover:text-black hover:bg-gray-200 p-[10px] cursor-pointer px-[20px]'>
      {Icon && <Icon /> }
      <p className='font-semibold'>{title}</p>
    </div>
  )
}

export default PostOptions
