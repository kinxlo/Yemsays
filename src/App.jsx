import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import {
  AboutPage,
  Booknow,
  ContactPage,
  HomePage,
  MainDashboard,
  PropertiesDetailsPage,
  PropertiesPage,
} from './pages'

import AdminLayout from './layout/AdminLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about-us' element={<AboutPage />} />
        <Route exact path='/book-now' element={<Booknow />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/properties' element={<PropertiesPage />} />
        <Route
          exact
          path='/properties/:id/details'
          element={<PropertiesDetailsPage />}
        />
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<MainDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
