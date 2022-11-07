import { athenaRest } from './rest'

export default () => ({
  trackSensor: (body: Record<string, string>) =>
    athenaRest.post('/view_stats/', body),
})
