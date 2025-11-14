import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Screens/Home'
import { Routes, Route } from 'react-router-dom'
import Favorite from './Screens/Favorite'

function App() {

  return (

    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />

      </Routes>
    </main>


  );
}

export default App
