import { createBrowserRouter } from 'react-router-dom'

import { ButtonPage } from './pages/button-page'
import NavigationPage from './pages/navigation-page'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [{ path: '/', element: <ButtonPage /> }],
  },

  {
    path: '/',
    children: [{ path: '/navigation', element: <NavigationPage /> }],
  },
])
