import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TabLayout from './components/layout/TabLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 px-6 flex">
      <TabLayout/>
    </div>
  )
}

export default App
