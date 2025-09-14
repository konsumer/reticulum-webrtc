import WebSocket from 'ws'

const [, , URL = 'ws://0.0.0.0:8080'] = process.argv

const ws = new WebSocket(URL)
ws.on('error', console.error)

ws.on('open', () => {
  process.stdin.on('data', (data) => {
    ws.send(data)
  })
})

ws.on('message', (data) => {
  process.stdout.write(data)
})
