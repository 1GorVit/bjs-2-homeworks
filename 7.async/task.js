class AlarmClock {
  constructor () {
    this.alarmCollection = []
    this.intervalId = null
  }
  addClock (time, clock) {
    if (!time || !clock) {
      throw new Error('Отсутствуют обязательные аргументы')
    }
    if (this.alarmCollection.some((value, index, arr) => value === clock)) {
      console.warn('Уже присутствует звонок на это же время')
    }
    let obj = { callback: clock, time: time, canCall: true }
    this.alarmCollection.push(obj)
  }
  removeClock (time) {
    const arr = this.alarmCollection.filter(
      (value, index, arr) => value.time !== time
    )
    this.alarmCollection = arr
  }
  getCurrentFormattedTime () {
    return new Date().toLocaleTimeString('ru-Ru', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  start () {
    if (this.intervalId) {
      return
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((item, index, array) => {
        if (
          item.time === this.getCurrentFormattedTime() &&
          item.canCall === true
        ) {
          item.canCall = false
          item.callback()
        }
      })
    }, 1000)
  }
  stop () {
    clearInterval(this.intervalId)
    this.intervalId = null
  }
  resetAllCalls () {
    this.alarmCollection.forEach((item, index, array) => {
      item.canCall = true
    })
  }
  clearAlarms () {
    this.stop()
    this.alarmCollection = []
  }
}