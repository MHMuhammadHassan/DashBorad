import React from 'react'

const User = ({Name,Des}) => {
  return (
    <>
      <div className='flex bg-slate-100 rounded-l p-2 m-4 border-none shadow-xl  w-[20vw] flex-col items-start justify-start '>
        <h1 className='ml-2  text-[20px] font-bold'>{Name}</h1>
        <p className=' ml-2 text-sm'>{Des}</p>
      </div>
    </>
  )
}

export default User;
