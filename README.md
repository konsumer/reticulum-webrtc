> [!WARNING]
> This was originally using a pipe interface to do websocket stuff, which introduces all kinds of weirdness (HLDC ISDN-style data-framing, for example.) I think a better path is to copy [WebsocketClientInterface](https://github.com/liamcottle/reticulum-meshchat/blob/master/src/backend/interfaces/WebsocketClientInterface.py) into your reticulum interfaces/ folder, and use that. I will still work on a web/js client for this, but it will be much cleaner.


This is just a `PipeInterface` that does websockets, so I can play with ideas in javascript.

This is based on [this discussion](https://github.com/markqvist/Reticulum/discussions/877).

### config

```ini
  [[Konsumer WebRTC]]
    type = PipeInterface
    enabled = True
    command = "node PATH_TO/reticulum-webrtc/pipe.js wss://signal.konsumer.workers.dev/ws/reticulum"
    respawn_delay = 5
    outgoing = True
    mode = full
    announce_cap = 2.0
```

You can use my remote websocket server at `wss://signal.konsumer.workers.dev/ws/reticulum` see [signal-worker](https://github.com/konsumer/signal-worker) if you want to host your own on Cloudflare.

```sh
# install dependencies
npm i

# start client A
nomadnet --config test/a/nomad --rnsconfig test/a/rns

# start client B
nomadnet --config test/b/nomad --rnsconfig test/b/rns

```

Now, you can send messages from A to B, or vice-versa.

<img src="https://github.com/user-attachments/assets/b8f244da-0c9c-463c-85c9-1decc0ca5fe9" />

There is also a local test server (for `ws://0.0.0.0:8080`):

```sh
# start your webrtc server
npm start
```

But you will have to modify the config of test a/b to use `ws://0.0.0.0:8080`
