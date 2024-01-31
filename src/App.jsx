import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import Login from './login'
import './assets/signup.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  
return (
<div>

<BrowserRouter>
<Routes>
  <Route path='/register' element ={<Signup /> }> </Route>
  <Route path='/login' element ={<Login />}> </Route>
</Routes>
</BrowserRouter>

</div>
)
}

export default App
