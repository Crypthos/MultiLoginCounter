let express = require('express')
let app = express();

let users = [];

app.get('/', (req, res ) => {
    res.json(users);
})

app.listen(8889);
