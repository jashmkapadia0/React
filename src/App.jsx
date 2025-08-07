import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register_Class from './Register_Class.jsx';
import Register_function from './Register_function.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Router>
            <Routes>
              <Route path="/" element={
                <>
                  <Link to="/register">Register using Class Component</Link><br />
                  <Link to="/register_function">Register using Function Component</Link>
                </>
              } />
              <Route path="/register" element={<Register_Class />} />
              <Route path="/register_function" element={<Register_function />} />
            </Routes>
          </Router>
          
      </div>
    </>
  )
}

export default App
