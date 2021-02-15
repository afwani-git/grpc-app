import {   sendUnaryData, ServerUnaryCall, UntypedHandleCall, status as errorStatus } from '@grpc/grpc-js';
import { ServerDuplexStream, ServerReadableStream, ServerWritableStream} from '@grpc/grpc-js/build/src/server-call';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { v4 as uuidv4 } from 'uuid';
import { IListServiceServer } from '../proto/list_grpc_pb';
import { ItemReq, CreateItemReq, Item, ResultResponse, ItemFilterReq, UpdateItemReq } from '../proto/list_pb';

const checkValid = (item: Item): boolean => {
        
    const validStatus = ['pending', 'done', 'doing'];

    if(item.getTitle().length < 3){
        return false;
    }

    if(!validStatus.includes(item.getStatus())){
        return false
    }
    
    return true;
}

let list: Item[] = [];

export class ListService implements IListServiceServer{
    [method: string]: UntypedHandleCall;

    createItem(call: ServerUnaryCall<CreateItemReq, Item> , callback: sendUnaryData<Item> ){
    
        const item: Item = new Item()
                            .setId(uuidv4())
                            .setTitle(call.request.getTitle())
                            .setStatus(call.request.getStatus());

        const isValid = checkValid(item);
        
        if(!isValid){
            callback({
                code: errorStatus.UNIMPLEMENTED,
                message: 'error item given is invalid',
                details: 'error item given is invalid',
            })
        }
    
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
        
        if(!item){
            callback({
                code: errorStatus.NOT_FOUND,
                message: 'item not found',
                details: 'item not found',
            })
        }

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

            const isValid = checkValid(item);
            
            if(!isValid){
                callback({
                    code: errorStatus.UNIMPLEMENTED,
                    message: 'error item given is invalid',
                    details: 'error item given is invalid',
                })
            }

            result.push(item);
            list.push(item);
        });

        call.on('erro',(err) => {
            callback(err, null);
        });

        call.on('end',() => {
            response.setResultsList(result)
            callback(null, response);
        });
    }
    
    updateItem(call: ServerDuplexStream<UpdateItemReq, Item>){
        
        const param = new Item();

        call.on('data',(data: UpdateItemReq) => {
            
            param.setId(data.getId());
            param.setTitle(data.getTitle());
            param.setStatus(data.getStatus());

            list.map((item) => {
                if(item.getId() == param.getId()){
                    item.setTitle(param.getTitle());
                    item.setStatus(param.getStatus());
                    call.write(item);
                }
            });

        });

        call.on('error',(err) => {
            console.error(err);
        });

        call.on('end', () => {
            call.end();
        })
    }
}
