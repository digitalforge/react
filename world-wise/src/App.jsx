// import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import CityList from './components/CityList'
import City from './components/City'
import PageNotFound from './pages/PageNotFound'
import CountryList from './components/CountryList'
import Form from './components/Form'
import { CitiesProvider } from './contexts/CitiesContext'
import { AuthProvider } from './contexts/FakeAuthContext'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path='login' element={<Login />} />
              <Route path='product' element={<Product />} />
              <Route path='pricing' element={<Pricing />} />
              <Route
                path='app'
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to='cities' />} />
                <Route path='cities' element={<CityList />} />
                <Route path='cities/:id' element={<City />} />
                <Route path='countries' element={<CountryList />} />
                <Route path='form' element={<Form />} />
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  )
}

export default App
