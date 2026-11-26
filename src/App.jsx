import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Registration from './pages/Registration.jsx'
import AllStudents from './pages/AllStudents.jsx'
import Sidebar from './components/Sidebar.jsx'
import StudentCreate from './pages/StudentCreate.jsx'

const App = () => {
  return (
    <div className='flex flex-row'>
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route  path='/allStudents' element={<AllStudents/>} />
        <Route path='/studentCreate' element={<StudentCreate/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
