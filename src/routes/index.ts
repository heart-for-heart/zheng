import { lazy } from 'react'

interface Route {
  path: string
  element: React.ComponentType | React.LazyExoticComponent<any>
}
const routes = [
  {
    path: '/marketing_case_management',
    element: lazy(() => import('@/pages/MarketingCaseManagement')),
  },
] as Route[]

export default routes
