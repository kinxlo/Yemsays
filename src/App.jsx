import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { AboutPage, HomePage, PropertiesPage } from './pages'
import DefaultLayout from './layout/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about-us' element={<AboutPage />} />
          <Route exact path='/properties' element={<PropertiesPage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
