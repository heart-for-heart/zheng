import { makeAutoObservable } from 'mobx'

class Data {
  currentCase = null

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentCase = res => {
    console.log('res', res)
    this.currentCase = res
  }
}

export default Data
