import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import DefaultRoutes from './utils/DefaultRoute'

function App() {
  return (
    <>
      <Routes>
        <Route element={ <DefaultRoutes /> }>
          <Route path='/' element={ <Home /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
