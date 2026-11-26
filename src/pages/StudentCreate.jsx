import React from 'react'
import { useNavigate } from 'react-router-dom'

const StudentCreate = () => {
    let navigate = useNavigate()
  return (
   
<div className='flex-1 m-5 p-6 bg-white rounded-2xl shadow-lg shadow-zinc-200 border border-zinc-100'>

    <h1 className='text-2xl font-bold text-zinc-800 mb-6'>Add New Student</h1>

    <form className='flex flex-col gap-4'>

        <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-zinc-700'>Name</label>
            <input type="text" placeholder='Enter student name' className='p-3 rounded-lg border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition' />
        </div>

        <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-zinc-700'>Email</label>
            <input type="email" placeholder='Enter student email' className='p-3 rounded-lg border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition' />
        </div>

        <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-zinc-700'>Phone Number</label>
            <input type="tel" placeholder='Enter phone number' className='p-3 rounded-lg border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition' />
        </div>

        <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-zinc-700'>Address</label>
            <input type="text" placeholder='Enter student address' className='p-3 rounded-lg border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition' />
        </div>

        <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-zinc-700'>Image URL</label>
            <input type="text" placeholder='Enter image URL' className='p-3 rounded-lg border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition' />
        </div>

        <button 
        onClick={function (){
            navigate("/allStudents")
        }}
        type="submit" className='mt-2 bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200'>
            Add Student
        </button>

    </form>
</div>

  )
}

export default StudentCreate
