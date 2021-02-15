import {  credentials, ServiceError } from '@grpc/grpc-js';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import { ListServiceClient } from '../proto/list_grpc_pb';
import { CreateItemReq, Item, ItemFilterReq, ItemReq, ResultResponse } from '../proto/list_pb';

export class ListService{
  
  private readonly client: ListServiceClient = new ListServiceClient('127.0.0.1:3000', credentials.createInsecure(),{
  'grpc.keepalive_time_ms': 120000,
  'grpc.http2.min_time_between_pings_ms': 120000,
  'grpc.keepalive_timeout_ms': 20000,
  'grpc.http2.max_pings_without_data': 0,
  'grpc.keepalive_permit_without_calls': 1,
  });

  async getList(): Promise<ResultResponse>{
    return new Promise((resolve, reject): void => {
        const req = new Empty();
        this.client.getAllItems(req, (err: ServiceError, res: ResultResponse) => {
          if(err){
            reject(err)
          }else{
            resolve(res);
          }
          this.client.close();
        });
    });
  }

  async createItem(param: CreateItemReq): Promise<Item>{
    return new Promise((resolve, reject): void => {
        
      this.client.createItem(param, (err: ServiceError, response: Item) => {
        if(err){
          reject(err);
        }else{
          resolve(response);
        }
        this.client.close();
      })
  
    })
    
  }

  async deleteItem(param: ItemReq): Promise<Item>{
    return new Promise((resolve, reject) => {
        
      this.client.deleteItem(param,  (err: ServiceError, response: Item) => {
        if(err){
          reject(err);
        }else{
          resolve(response)
        }
        this.client.close();
      })

    })
  }

  filterItems(param: ItemFilterReq){
    return this.client.filterItems(param);
  }

  batchCreate(params: CreateItemReq[]){
    
    return new Promise((resolve, reject) => {
      const call =  this.client.batchCreate((err, response) => {
        if(err){
          reject(err);
        }else{
          resolve(response);
        }
        this.client.close();
      });

      params.map(param => {
        call.write(param);
      })
      
      call.end();
    })

  }
}
