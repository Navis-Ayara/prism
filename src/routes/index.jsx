import { Routes, Route } from 'react-router'
import Dashboard from '../pages/Dashboard'
import Home from '@/pages/Home';

function AppRoutes() {
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoutes;