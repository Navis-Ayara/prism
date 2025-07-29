import { Routes, Route } from 'react-router'
import Dashboard from '../pages/Dashboard'
import Home from '@/pages/Home';
import Features from '@/pages/Features';
import Pricing from '@/pages/Pricing';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Status from '@/pages/Status';

function AppRoutes() {
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/status' element={<Status />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoutes;