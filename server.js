const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use(express.json()); // Middleware pour parser le JSON

app.listen(4000, () => {
    console.log('Listening on port 4000');
});