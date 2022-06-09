const express = require('express');
const app = express();
const PORT = 8080;
const contestantsRoute = require('./routes/contestants');

app.set('view engine', 'ejs');

app.use('/contestants', contestantsRoute);

app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
})