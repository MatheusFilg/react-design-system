import { createBrowserRouter } from 'react-router-dom'

import AvatarPage from './pages/avatar-page'
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

  {
    path: '/',
    children: [{ path: '/avatar', element: <AvatarPage /> }],
  },
])
