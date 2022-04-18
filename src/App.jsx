
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { EditClient } from './pages/EditClient'
import { Home } from './pages/Home'
import { NewClient } from './pages/NewClient'
import {SeeClient} from './pages/SeeClient'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/clients" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<SeeClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
