import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import MyContainer from './components/MyContainer'
import { Route, BrowserRouter, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {
          <>
          <Header />
          <MyContainer />
          </>
        } />
        <Route path="/about" element= {
          <>
          <Header />
          <About />
          </>
        } />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
