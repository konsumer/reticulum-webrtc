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

# start a client to talk to
nomadnet --config testn --rnsconfig testrns

# start your regular client (should have PipeInterface config, above)
nomadnet
```

<img width="1530" height="1037" alt="Screenshot 2025-09-13 at 8 12 25 PM" src="https://github.com/user-attachments/assets/030da9aa-3f0e-417e-8c57-2bff83325f77" />
