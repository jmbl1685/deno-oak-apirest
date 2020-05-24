## Deno Api Rest (oak)
### Simple rest api using Deno + oak

https://deno-oak-apirest.herokuapp.com/v1/players

#### Methods

- POST /v1/players
- GET /v1/players
- GET /v1/players/:playerId
- PUT /v1/players/:playerId
- DELETE /v1/players/:playerId

NOTE: For testing purposes the data storage is in memory, can add the database of your choice.


#### Getting Started

- Install Deno (https://deno.land/#installation)
- Check version (Required: 1.0.x )
- Dev mode: 
```sh
  $ npm i nodemon -g
  $ nodemon
```
- Normal mode
```sh
  $ deno run --allow-all src/app.ts
```

- Heroku Buildpack
  - https://github.com/chibat/heroku-buildpack-deno.git


#### Support
- https://deno.land/
- https://oakserver.github.io/oak/