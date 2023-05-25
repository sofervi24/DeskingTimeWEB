import ReactDOM from 'react-dom/client'
import Home from './pages/landing/index'
import About from './pages/landing/about'
import Contact from './pages/landing/contact'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import Forgot from './pages/auth/forgot'
import Validate from './pages/auth/validate'
import Dashboard from './pages/dashboard/index'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/forgot' element={<Forgot />}/>
      <Route path='/validate' element={<Validate />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  </BrowserRouter>
)
