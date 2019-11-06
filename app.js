const express = require('express');
const User = require('./src/entities/User');
const authRouter = require('./src/routes/AuthRoutes')();
const bodyParser = require('body-parser');

const app = express();
var port = process.env.PORT || 3000;
var hostname = process.env.hostname || "127.0.0.1";


app.use('/uploads', express.static('./src/uploads'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.use('/api/auth', authRouter);



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});