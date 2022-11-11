import { lazy } from 'react'

import { MarketingCaseManagementPath } from './path'

interface Route {
  path: string
  element: React.ComponentType | React.LazyExoticComponent<any>
}
const routes = [
  {
    path: MarketingCaseManagementPath,
    element: lazy(() => import('@/pages/MarketingCaseManagement')),
  },
] as Route[]

export default routes
