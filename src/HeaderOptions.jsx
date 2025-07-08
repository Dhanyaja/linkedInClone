import React from 'react'

const HeaderOptions = ({avatar, Icon, title}) => {
  return (
    <div className='headerOptions flex flex-col items-center mr-[20px] text-gray-600 cursor-pointer hover:text-black'>
        {Icon && <Icon className='headerOption__icon' />}
        {avatar && <img src={avatar} alt="" className='headerOption__icon h-[20px] rounded-full' />}
        <h3 className='headerOption__title text-xs '>{title}</h3>
    </div>
  )
}

export default HeaderOptions
