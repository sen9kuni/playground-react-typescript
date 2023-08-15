import { Routes, Route } from 'react-router-dom'
import TimerTest from './pages/TimerTest.page'
import BruhUgotRedirect from './pages/BruhUgotRedirect.page'

function App() {
  return (
    <Routes>
      <Route path='/' element={<TimerTest />} />
      <Route path='/redirect' element={<BruhUgotRedirect />} />
    </Routes>
  )
}

export default App
