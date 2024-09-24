import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import AppLayout from './pages/AppLayout'
import PageNotFound from './pages/PageNotFound'
//import PageNav from './components/PageNav'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='app' element={<AppLayout />}>
            <Route index element={<p>List of Cities 1</p>} />
            <Route path='cities' element={<p>List of Cities</p>} />
            <Route path='countries' element={<p>List of Countries</p>} />
            <Route path='form' element={<p>Form</p>} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
