import { useState } from 'react'

import './App.css'
import UserList from './component/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList/>
    </>
  )
}

export default App
