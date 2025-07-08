import React from 'react'

const FeedOptions = ({Icon, title, color}) => {
  return (
    <div className='flex gap-2 items-center cursor-pointer hover:bg-gray-200 px-[20px] py-[10px]'>
      {Icon && <Icon sx={{color: {color}}} /> }
      <p className='text-[#484848] text-sm font-medium'>{title}</p>
    </div>
  )
}

export default FeedOptions
