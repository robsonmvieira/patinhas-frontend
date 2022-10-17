import Login from '../../pages/Login'
import Home from '../../pages/Home'
import { Routes, Route } from 'react-router-dom'

export const RoutesPaths = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
  </Routes>
)
