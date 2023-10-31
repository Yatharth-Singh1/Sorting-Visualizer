const express = require ("express");
const app = express();
const hostname = '127.0.0.1';
const port = 80;

app.use(express.static('public'));


app.listen(port,()=>{
    console.log(`App running at : http://${hostname}:${port}`)
});