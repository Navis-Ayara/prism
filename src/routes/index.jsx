import { Routes, Route } from 'react-router'
import Dashboard from '../pages/Dashboard'

function AppRoutes() {
    return (
        <Routes>
          <Route index element={<></>} /> {/* TODO: Create landing page component*/}
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoutes;