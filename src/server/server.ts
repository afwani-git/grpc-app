import { Server, ServerCredentials } from '@grpc/grpc-js';
import {  ListServiceService } from '../proto/list_grpc_pb';
import { ListService  } from './services';

function server(){

    const server = new Server();
    server.addService(ListServiceService, new ListService());
    server.bindAsync('127.0.0.1:3000', ServerCredentials.createInsecure(),(_err, port) => {
        server.start();
        console.log('listening in port '+port);
    });
    
}

server();
