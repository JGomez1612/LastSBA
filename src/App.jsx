import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/games" element={<GamesPage />} /> */}
        {/* <Route path="/reviews" element={<ReviewsPage />} /> */}
      </Routes>
    </>
  )
}

export default App
