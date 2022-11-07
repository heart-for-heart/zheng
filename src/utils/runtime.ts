import { getAthenaDomain } from '@h/h-toolbox/src/domain'
import {
  root,
  isDevelopment,
  domain,
  isProdEnv,
  isAlphaEnv,
} from '@h/h-toolbox/src/runtime'

let protocol = 'https'
let cookieDomain = '127.0.0.1'

if (root) {
  if (isDevelopment) {
    cookieDomain = root.location.hostname
  } else {
    cookieDomain = `.${domain}`
  }
  // eslint-disable-next-line prefer-destructuring
  protocol = root.location.protocol
}

const athenaUrl = `${protocol}//${getAthenaDomain(domain)}`

const genAthenaMicroService = (service: string, gateway = athenaUrl) =>
  `${gateway}/${service}`

const bossUrl = genAthenaMicroService('boss')
const panguUrl = genAthenaMicroService('pangu')

export default {
  domain,
  cookieDomain,
  athenaUrl,
  bossUrl,
  panguUrl,
  isDevelopment,
  isProdEnv,
  isAlphaEnv,
}
