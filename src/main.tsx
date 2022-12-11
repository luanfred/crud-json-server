import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Cars } from './pages/Cars'
import { Driver } from './pages/Driver'
import { Home } from './pages/Home'
import { SetCars } from './pages/SetCars'
import { SetDriver } from './pages/SetDriver'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/veiculos' element={<Cars />} />
          <Route path='/motorista' element={<Driver />} />
          <Route path='/editCars/:id' element={<SetCars />} />
          <Route path='editDriver/:id' element={<SetDriver />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
