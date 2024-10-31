import { createBrowserRouter } from 'react-router-dom'

import AvatarPage from './pages/avatar-page'
import ButtonPage from './pages/button-page'
import CardPage from './pages/card-page'
import NavigationPage from './pages/navigation-page'
import TagPage from './pages/tag-page'
import TooltipPage from './pages/tooltip-page'

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

  {
    path: '/',
    children: [{ path: '/tag', element: <TagPage /> }],
  },

  {
    path: '/',
    children: [{ path: '/card', element: <CardPage /> }],
  },

  {
    path: '/',
    children: [{ path: '/tooltip', element: <TooltipPage /> }],
  },
])
