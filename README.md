# Installation
1. Install packages
    - `npm install`
2. Start server
    - `node index.js`
    - OR `npx nodemon index.js`

## Endpoints
1. `GET /contestants`
    - Returns all contestants. You can add the following query params:
    - `?order=age`
    - `?orger=age_descending`
    - `?country=UK` or `?country=USA`

2. `GET /contestants/:id`