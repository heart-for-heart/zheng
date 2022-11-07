import { HRest } from '@h/h-rest'
import camelizeInterceptor from '@h/h-rest/lib/interceptors/camelize'
import decamelizeInterceptor from '@h/h-rest/lib/interceptors/decamelize'
import { stringify } from 'query-string'

import runtime from '@/utils/runtime'

const paramsSerializer = (params: Record<string, unknown>) => stringify(params)

const bossRest = new HRest({
  baseURL: runtime.bossUrl,
  cache: 'no-cache',
  paramsSerializer,
})

const athenaRest = new HRest({
  baseURL: runtime.athenaUrl,
  cache: 'no-cache',
  paramsSerializer,
})

const restList = [bossRest, athenaRest]

const configRest = () => {
  restList.forEach(rest => {
    rest.interceptor.request.use(decamelizeInterceptor)
    rest.interceptor.response.use(camelizeInterceptor)
  })
}

configRest()

export const setAuthorization = (token: string) => {
  restList.forEach(rest => {
    rest.setConfig({
      headers: { Authorization: token },
    })
  })
}

export { athenaRest, bossRest }
