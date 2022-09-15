import WebSocket from 'ws'

import MockDeviceLogger from './MockDeviceLogger.js'

const DEFAULT_PORT = 8080

const STARTING_LOCATIONS = [[40.104294, -116.427831],
                           [40.086186, -116.462942],
                           [40.120986, -116.356206],
                           [40.139038, -116.449662],
                           [40.001838, -116.350304]]

let PORT = process.argv.slice(2)[0] || DEFAULT_PORT

if (PORT) {
  PORT = parseInt(PORT, 10)
  if (!PORT) {
    PORT = DEFAULT_PORT
    console.log(`Port argument must be numeric! Defaulting to port ${DEFAULT_PORT}.`)
  }
}

const wss = new WebSocket.Server({
  port: PORT
})

const trucks = STARTING_LOCATIONS.map((location, index) => new MockDeviceLogger(100000000 + index, location[0], location[1]))

trucks.forEach(truck => { truck.startCollectingData() })

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(message);
    if (message === 'START') {
      console.log('Received start signal, funneling device data to client')

      trucks.forEach(truck => { truck.startTransmitting(ws) })
    }
  })

  ws.on('error', error => {
    console.log(error)
  })

  ws.on('close', () => {
    console.log('Client closed connection')
    trucks.forEach(truck => { truck.stopTransmitting() })
  })
})
