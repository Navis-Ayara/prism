import { Routes, Route } from 'react-router'
import Dashboard from '../pages/Dashboard'
import Home from '@/pages/Home';
import Features from '@/pages/Features';

function AppRoutes() {
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoutes;