import {flipACoin, countFlips, coinFlips, coinFlip} from './modules/coin.mjs';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

const express = require('express');
const app = express();

const args = require('minimist')(process.argv.slice(2));
args['port']
const port = args.port || process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
})

app.get('/app/', (req, res) => {
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
 })

app.get('/app/flip/', (req, res) => {
        res.statusCode = 200;
        let flip = coinFlip();
        res.json({"flip": flip});
        res.writeHead( res.statusCode, { 'Content-Type' : 'application/json' });  
})

app.get('/app/flips/:number', (req, res) => {
    res.statusCode = 200;
    const flips = coinFlips(req.params.number);
    const count = countFlips(flips);
    res.status(200).json({"raw": flips, "summary": count});
})

app.get('/app/flip/call/heads', (req, res) => {
    res.statusCode = 200;
    let result = flipACoin('heads');
    res.send(record);
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });  
})

app.get('/app/flip/call/tails', (req, res) => {
    res.statusCode = 200;
    let result = flipACoin('tails');
    res.send(record);
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });  
})

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});
