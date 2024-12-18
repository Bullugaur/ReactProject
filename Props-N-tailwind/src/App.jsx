import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-950 mb-4'>Tailwind Test</h1>
      <Card username='Bulbul' btnText='Click me' />
      <Card username='hello' btnText='visit me'/>
    </>
  )
}

export default App
