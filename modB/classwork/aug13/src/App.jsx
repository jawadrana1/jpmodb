import { useState } from 'react'
import Header from './Components/Header/Header'
import Button from './Components/Button/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>app</h1>
      <Header/>
      <Button/>
    </>
  )
}

export default App
