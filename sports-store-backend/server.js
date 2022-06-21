import http from 'http'
import express from 'express'
import debug from 'debug'

import app from './app.js'

debug('nodestr:server');

const port=normalizePort(process.env.port || '3001');
app.set('port', port);

const server=http.createServer(app);
const router=express.Router();

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log("Rodando na porta "+port);


function normalizePort(val){
    const port=parseInt(val);
    if(isNaN(port)){
        return val;
    }
    if(port>=0){
        return port;
    }
    return false;
}

function onError(error){
    if(error.sysall!=='listen'){
        throw error;
    }
    const bind=typeof port==='string'
    switch(error.code){
        case 'EACCES':
            console.error(bind+' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind+' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr=server.address();
    const bind=typeof addr==='string' ? 'pipe '+addr : 'port '+addr.port;
    debug('Listening on '+bind);
}