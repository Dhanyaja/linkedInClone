import React from 'react'

const SidebarOptions = ({Icon, title}) => {
  return (
    <div className='flex items-center gap-2 mb-2'>
        {Icon && <Icon sx={{height: "18px"}} /> }
        <p className='hover:underline font-medium'>{title}</p>
    </div>
  )
}

export default SidebarOptions
