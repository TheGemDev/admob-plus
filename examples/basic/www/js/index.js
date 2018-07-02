'use strict'

const app = {
  initialize() {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    )
  },

  onDeviceReady() {
    this.receivedEvent('deviceready')

    admob.interstitial.prepare()
    document.addEventListener(
      'admob.interstitial.load',
      () => {
        admob.interstitial.show()
      },
      false
    )
  },

  receivedEvent(id) {
    const parentElement = document.getElementById(id)
    const listeningElement = parentElement.querySelector('.listening')
    const receivedElement = parentElement.querySelector('.received')

    listeningElement.setAttribute('style', 'display:none;')
    receivedElement.setAttribute('style', 'display:block;')

    console.log(`Received Event: ${id}`)
  },
}

app.initialize()
