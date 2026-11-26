import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  let navigate = useNavigate()
  return (
    <div className='flex justify-center items-center  h-screen w-full'>


      <div className='h-max w-100 bg-amber-200 rounded-2xl flex flex-col items-center py-20 px-10'>
        <h1 className='text-4xl font-bold'>Registratoin</h1>
        <input className='w-full bg-white p-2 my-5 rounded-2xl shadow-md shadow-zinc-50 ' type="text" placeholder='Enter you Class Name' />
        <input className='w-full bg-white p-2  rounded-2xl shadow-md shadow-zinc-50 ' type="text" placeholder='Enter you Phone no' />
        <input className='w-full bg-white p-2 my-5 rounded-2xl shadow-md shadow-zinc-50 ' type="text" placeholder='Enter you Password' />
        <button
          onClick={function () {
            navigate("/allStudents")
          }}
          className='w-full bg-blue-700 text-white font-bold p-2 my-5 rounded-2xl shadow-md shadow-zinc-50 '>Submit</button>
        <h1>Already have an account: <span onClick={function () {
          navigate("/")
        }}>login</span> </h1>
      </div>

    </div>
  )
}

export default Registration
