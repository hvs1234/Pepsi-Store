import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Home'
import Buy from './Buy'
import Product from './Product'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Buy' element={<Buy />}></Route>
          <Route path='/Product' element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App