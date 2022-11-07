import { lazy } from 'react'

interface Route {
  path: string
  element: React.ComponentType | React.LazyExoticComponent<any>
}
const routes = [
  {
    path: '/',
    element: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/about',
    element: lazy(() => import('@/pages/About')),
  },
] as Route[]

export default routes
