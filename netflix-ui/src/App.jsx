import { useState } from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Netflix from "./pages/Netflix"
import Signup from "./pages/Signup"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/Signup' element={<Signup />} />
        <Route exact path='/' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App