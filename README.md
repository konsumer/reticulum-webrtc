This will eventually be it's own Interface (made in python) for reticulum, that allows WebRTC interfaces. For now, it's just a `PipeInterface`, so I can play with ideas in javascript.

This is based on [this discussion](https://github.com/markqvist/Reticulum/discussions/877).

### config

```ini
  [[Local WebRTC Tester]]
    type = PipeInterface
    enabled = True
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

# start your webrtc server
npm start

# start client A
nomadnet --config test/a/nomad --rnsconfig test/a/rns

# start client B
nomadnet --config test/b/nomad --rnsconfig test/b/rns
```

Now, you can send messages from A to B, or vice-versa.

<img src="https://github.com/user-attachments/assets/b8f244da-0c9c-463c-85c9-1decc0ca5fe9" />
