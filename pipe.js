import WebSocket from 'ws'

const ws = new WebSocket('ws://0.0.0.0:8080')
ws.on('error', console.error)

ws.on('open', () => {
  process.stdin.on('data', (data) => {
    ws.send(data)
  })
})

ws.on('message', (data) => {
  process.stdout.write(data)
})
