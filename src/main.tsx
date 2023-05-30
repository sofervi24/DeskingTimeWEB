import ReactDOM from 'react-dom/client'
import Home from './pages/landing/index'
import About from './pages/landing/about'
import Contact from './pages/landing/contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  </BrowserRouter>
)
