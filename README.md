### JavaScript Task
Issue tracker built for recruitment purpose
#### Stack
MongoDb, Express.js, React, TypeScript, Docker

#### To run application:
```npm start``` or ```docker-compose up```

#### Tests and linter:
```npm run lint``` or ```npm run test```

#### Description
In this case I've made simple issue tracker. Server is based on Express app with server side rendered React components.
React components can be found on ```src/front```. Of course there is configured eslint. Application can run by npm/docker/docker-compose.
There is no documentation for that project because i believe it is clean, self-reported and it's easy to understand file and code structure.

#### Improvement
* remove bootstrap and jQuery (because of size of libraries)
* unit tests
* pagination
* Redis
