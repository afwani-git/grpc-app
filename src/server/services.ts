import {  ClientWritableStream, sendUnaryData, ServerUnaryCall, UntypedHandleCall  } from '@grpc/grpc-js';
import { ServerReadableStream, ServerWritableStream} from '@grpc/grpc-js/build/src/server-call';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { v4 as uuidv4 } from 'uuid';
import { IListServiceServer } from '../proto/list_grpc_pb';
import { ItemReq, CreateItemReq, Item, ResultResponse, ItemFilterReq } from '../proto/list_pb';

let list: Item[] = [];

export class ListService implements IListServiceServer{
    [method: string]: UntypedHandleCall;

    createItem(call: ServerUnaryCall<CreateItemReq, Item> , callback: sendUnaryData<Item> ){
        let item: Item = new Item()
                            .setId(uuidv4())
                            .setTitle(call.request.getTitle())
                            .setStatus(call.request.getStatus());
        list.push(item);
        callback(null, item);
        
    }

    getAllItems(_call: ServerUnaryCall<Empty, ResultResponse>, callback: sendUnaryData<ResultResponse>){
        
        const response = new ResultResponse();

        response.setResultsList(list);

        return callback(null, response);
    }

    deleteItem(call: ServerUnaryCall<ItemReq, Item>, callback: sendUnaryData<Item>){
        const id = call.request.getId();    
        
        let item: Item;

        item =  list.find(data => data.getId() == id);
        
        list =  list.filter(data => data.getId() != item.getId());

        callback(null, item);
    }
    
    filterItems(call: ServerWritableStream<ItemFilterReq, Item>){
        list.map(data => {
            if(data.getStatus() == call.request.getStatus()){
                call.write(data);
            }
        })
        
        call.end();
    }

    batchCreate(call: ServerReadableStream<CreateItemReq, ResultResponse>, callback: sendUnaryData<ResultResponse>){
        
        const item: Item = new Item();
        const result: Item[] = [];
        const response = new ResultResponse();

        call.on('data', (data: CreateItemReq) => {
            item.setTitle(data.getTitle());
            item.setStatus(data.getStatus());
            item.setId(uuidv4());
            result.push(item);
        });

        call.on('erro',(err) => {
            callback(err, null);
        });

        call.on('end',() => {
            response.setResultsList(result)
            callback(null, response);
        });
    }


}
