This will eventually be it's own Interface (made in python) for reticulum, that allows WebRTC interfaces. For now, it's just a `PipeInterface`, so I can play with ideas in javascript.

This is based on [this discussion](https://github.com/markqvist/Reticulum/discussions/877).

### config

```ini
  [[Local WebRTC Tester]]
    type = PipeInterface
    interface_enabled = True
    command = "node PATH_TO/reticulum-webrtc/pipe.js ws://0.0.0.0:8080"
    respawn_delay = 5
    outgoing = True
    mode = full
    announce_cap = 2.0
```

There is a test server:

```sh
# install dependencies
npm i

npm start
```
