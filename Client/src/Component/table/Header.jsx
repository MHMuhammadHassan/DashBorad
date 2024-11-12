import React from 'react'

const Header = ({setSearch}) => {
  const returnSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <div className='flex justify-between border bg-slate-50 max-w-[94vw] rounded-lg shadow-lg w-full m-2 mb-0 p-2  '>

        <div className='flex flex-col justify-start'>
                <h3 className='font-bold text-xl'>Patients</h3>
                <p className='font-light text-sm'>Patient details and Activity logs</p>
        </div>

        <input type="text" onChange={returnSearch} placeholder='Search' className='w-50 p-2 h-8 rounded-3xl border border-gray-100 '/>


      </div>
    </>
  )
}

export default Header;
