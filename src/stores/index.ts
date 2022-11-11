import DataStore from './data'
import UserStore from './user'

const stores = {
  userS: new UserStore(),
  dataS: new DataStore(),
}

export type Stores = typeof stores

export default stores
