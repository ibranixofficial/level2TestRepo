import React from 'react'
import students from '../data/StudentData.js'
import { useNavigate } from 'react-router-dom'

const AllStudents = () => {
  let navigate = useNavigate()
  return (
    <div className='h-screen flex-1 bg-amber-300'>


      <div className='flex justify-between p-5' >
        <h1 className='text-3xl font-bold '>All Student Page</h1>
        <button
        onClick={function (){
          navigate("/studentCreate")
        }}
        className='border-2 border-zinc-200 shadow-md shadow-neutral-400 p-2 px-5 rounded-2xl bg-blue-400 text-white'>Student Create</button>
      </div>


      <div className='flex flex-row flex-wrap justify-center'>
        {
          students.map(function (studentData) {
            return (

              <div className='w-80 m-5 p-5 bg-white rounded-2xl shadow-lg shadow-zinc-200/60 border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>

                <div className='w-full h-64 mb-5 overflow-hidden rounded-xl bg-zinc-100'>
                  <img
                    src={studentData.image}
                    alt={studentData.name}
                    className='w-full h-full object-cover'
                  />
                </div>

                <h1 className='text-xl font-bold text-zinc-800 mb-1'>{studentData.name}</h1>

                <h1 className='text-sm text-zinc-500 mb-4'>{studentData.email}</h1>

                <div className='space-y-3 border-t border-zinc-100 pt-4'>

                  <h1 className='text-sm text-zinc-600'>
                    <span className='font-semibold text-zinc-800'>ID:</span> {studentData.id}
                  </h1>

                  <h1 className='text-sm text-zinc-600'>
                    <span className='font-semibold text-zinc-800'>Address:</span> {studentData.address}
                  </h1>

                  <h1 className='text-sm text-zinc-600'>
                    <span className='font-semibold text-zinc-800'>Phone:</span> {studentData.phoneNo}
                  </h1>

                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default AllStudents
