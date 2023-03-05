import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import {
  AboutPage,
  ContactPage,
  HomePage,
  PropertiesDetailsPage,
  PropertiesPage,
} from './pages'
import DefaultLayout from './layout/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about-us' element={<AboutPage />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/properties' element={<PropertiesPage />} />
          <Route
            exact
            path='/properties/:id/details'
            element={<PropertiesDetailsPage />}
          />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
