// package: list
// file: list.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as list_pb from "./list_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IListServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllItems: IListServiceService_IGetAllItems;
    createItem: IListServiceService_ICreateItem;
    deleteItem: IListServiceService_IDeleteItem;
    filterItems: IListServiceService_IFilterItems;
}

interface IListServiceService_IGetAllItems extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, list_pb.ResultResponse> {
    path: "/list.ListService/GetAllItems";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<list_pb.ResultResponse>;
    responseDeserialize: grpc.deserialize<list_pb.ResultResponse>;
}
interface IListServiceService_ICreateItem extends grpc.MethodDefinition<list_pb.CreateItemReq, list_pb.Item> {
    path: "/list.ListService/CreateItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<list_pb.CreateItemReq>;
    requestDeserialize: grpc.deserialize<list_pb.CreateItemReq>;
    responseSerialize: grpc.serialize<list_pb.Item>;
    responseDeserialize: grpc.deserialize<list_pb.Item>;
}
interface IListServiceService_IDeleteItem extends grpc.MethodDefinition<list_pb.ItemReq, list_pb.Item> {
    path: "/list.ListService/DeleteItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<list_pb.ItemReq>;
    requestDeserialize: grpc.deserialize<list_pb.ItemReq>;
    responseSerialize: grpc.serialize<list_pb.Item>;
    responseDeserialize: grpc.deserialize<list_pb.Item>;
}
interface IListServiceService_IFilterItems extends grpc.MethodDefinition<list_pb.ItemFilterReq, list_pb.Item> {
    path: "/list.ListService/FilterItems";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<list_pb.ItemFilterReq>;
    requestDeserialize: grpc.deserialize<list_pb.ItemFilterReq>;
    responseSerialize: grpc.serialize<list_pb.Item>;
    responseDeserialize: grpc.deserialize<list_pb.Item>;
}

export const ListServiceService: IListServiceService;

export interface IListServiceServer extends grpc.UntypedServiceImplementation {
    getAllItems: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, list_pb.ResultResponse>;
    createItem: grpc.handleUnaryCall<list_pb.CreateItemReq, list_pb.Item>;
    deleteItem: grpc.handleUnaryCall<list_pb.ItemReq, list_pb.Item>;
    filterItems: grpc.handleServerStreamingCall<list_pb.ItemFilterReq, list_pb.Item>;
}

export interface IListServiceClient {
    getAllItems(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    getAllItems(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    getAllItems(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    createItem(request: list_pb.CreateItemReq, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    createItem(request: list_pb.CreateItemReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    createItem(request: list_pb.CreateItemReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    deleteItem(request: list_pb.ItemReq, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    deleteItem(request: list_pb.ItemReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    deleteItem(request: list_pb.ItemReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    filterItems(request: list_pb.ItemFilterReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<list_pb.Item>;
    filterItems(request: list_pb.ItemFilterReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<list_pb.Item>;
}

export class ListServiceClient extends grpc.Client implements IListServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllItems(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public getAllItems(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public getAllItems(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public createItem(request: list_pb.CreateItemReq, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public createItem(request: list_pb.CreateItemReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public createItem(request: list_pb.CreateItemReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public deleteItem(request: list_pb.ItemReq, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public deleteItem(request: list_pb.ItemReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public deleteItem(request: list_pb.ItemReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public filterItems(request: list_pb.ItemFilterReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<list_pb.Item>;
    public filterItems(request: list_pb.ItemFilterReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<list_pb.Item>;
}
