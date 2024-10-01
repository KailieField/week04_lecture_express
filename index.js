const  exress = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World');
})

// http://localhost:3000/
app.post('/',  (req, res) => {
    res.send('POST - Hello World');
})

// Listening to server
app.listen(SERVER_PORT, () => {
    console.log(`Server us running on http://localhost:${SERVER_PORT}`);
})