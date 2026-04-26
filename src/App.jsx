import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calculator from './Calculator/page'

function App() {

  return (
    <BrowserRouter basename="/BMI-Calculator">
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
