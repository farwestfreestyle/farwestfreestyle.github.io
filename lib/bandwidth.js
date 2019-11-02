export default class MeasureBandwidth {
  constructor () {
    this.init = false
    this.avgArr = []
    this.imageUrl = 'https://www.cueframehq.com/icon.png'
    this.downloadSize = 104361
    this.startTime = 0
    this.endTime = 0
  }
  showProgressMessage (msg) {
    const m = document.getElementById('msg')
    let _msg = ''
    if (typeof msg === 'string') {
      _msg = msg
    } else {
      let str = ''
      for (let i = 0; i < msg.length; i++) {
        str += msg[i]
      }
      _msg = str
    }
    m.innerHtml = _msg
    const oProgress = document.getElementById('progress')
    if (oProgress) {
      const actualHTML = (typeof msg === 'string') ? msg : msg.join('<br />')
      oProgress.innerHTML = actualHTML
    }
  }
  initiateSpeedDetection () {
    if (!this.init) {
      this.showProgressMessage('Loading the image, please wait...')
    }
    this.init = true
    window.setTimeout(() => {
      this.measureConnectionSpeed()
    }, 1)
  }
  measureConnectionSpeed () {
    const download = new Image()
    download.onload = () => {
      this.endTime = (new Date()).getTime()
      this.showResults()
    }
    /* download.onerror = function (err, msg) {
      this.showProgressMessage('Invalid image, or error downloading')
    } */
    this.startTime = (new Date()).getTime()
    const cacheBuster = '?nnn=' + this.startTime
    download.src = this.imageUrl + cacheBuster
  }
  showResults () {
    const duration = (this.endTime - this.startTime) / 1000
    const bitsLoaded = this.downloadSize * 8
    const speedBps = (bitsLoaded / duration).toFixed(2)
    const speedKbps = (speedBps / 1024).toFixed(2)
    const speedMbps = (speedKbps / 1024).toFixed(2)
    this.showProgressMessage([
      'Your connection speed is:',
      speedBps + ' bps',
      speedKbps + ' kbps',
      speedMbps + ' Mbps'
    ])
    if (this.avgArr.length > 10) {
      let total = 0
      this.avgArr.forEach((item) => {
        total += parseInt(item)
      })
      console.log('total', total)
      const avg = (total / this.avgArr.length)
      this.showProgressMessage(`Average Connection speed is ${avg} Mbps`)
    } else {
      this.avgArr.push(speedMbps)
      this.start()
    }
  }
  start () {
    this.initiateSpeedDetection()
  }
}
