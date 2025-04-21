import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Alert from './pages/Alert'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Dashboard />
   <Alert/>
   </>
  )
}

export default App
