import { RouterProvider } from 'react-router-dom'

import { Header } from './components/header'
import { router } from './routes'

export default function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}
