import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { HomePage } from './pages'
import DefaultLayout from './layout/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
