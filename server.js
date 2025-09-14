import { WebSocketServer } from 'ws'

const { PORT = 8080 } = process.env

const wss = new WebSocketServer({ port: PORT })

wss.on('connection', function connection(ws) {
  ws.on('error', console.error)

  ws.on('message', (data) => {
    console.error('received:', data.toString('hex'))
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client != ws) {
        client.send(data, { binary: true })
      }
    })
  })
})

console.log(`Server listening on ws://0.0.0.0:${PORT}`)
