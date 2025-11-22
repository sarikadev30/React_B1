import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
