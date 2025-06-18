import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Header from './components/header'
import Footer from './components/footer'
import Home from './components/Home'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Checkout from './components/checkout'

import './App.css'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='flex content-center flex-col gap-10 '>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy-policy' element={<Privacy />} />
            <Route path='/checkout' element={<Checkout/>} ></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
