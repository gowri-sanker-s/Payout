import React from 'react'
import Side from './components/sidebar/Side'
import Navbar from './components/navbar/Navbar'
import Overview from './components/overview/Overview'
import Main from './components/main/Main'
import './App.css'
const App = () => {
  return (
    <div className='app-main'>

      <div className='left'>
      <Side/>
      </div>
      <div className='right'>
      <Navbar/>
      <Overview/>
      <Main/>

      </div>
    </div>
  )
}

export default App
