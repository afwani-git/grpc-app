// package: list
// file: list.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as list_pb from "./list_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IListServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getList: IListServiceService_IGetList;
    createItem: IListServiceService_ICreateItem;
    deleteList: IListServiceService_IDeleteList;
}

interface IListServiceService_IGetList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, list_pb.ResultResponse> {
    path: "/list.ListService/GetList";
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
interface IListServiceService_IDeleteList extends grpc.MethodDefinition<list_pb.ItemReq, list_pb.Item> {
    path: "/list.ListService/DeleteList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<list_pb.ItemReq>;
    requestDeserialize: grpc.deserialize<list_pb.ItemReq>;
    responseSerialize: grpc.serialize<list_pb.Item>;
    responseDeserialize: grpc.deserialize<list_pb.Item>;
}

export const ListServiceService: IListServiceService;

export interface IListServiceServer extends grpc.UntypedServiceImplementation {
    getList: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, list_pb.ResultResponse>;
    createItem: grpc.handleUnaryCall<list_pb.CreateItemReq, list_pb.Item>;
    deleteList: grpc.handleUnaryCall<list_pb.ItemReq, list_pb.Item>;
}

export interface IListServiceClient {
    getList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    getList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    getList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    createItem(request: list_pb.CreateItemReq, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    createItem(request: list_pb.CreateItemReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    createItem(request: list_pb.CreateItemReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    deleteList(request: list_pb.ItemReq, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    deleteList(request: list_pb.ItemReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    deleteList(request: list_pb.ItemReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
}

export class ListServiceClient extends grpc.Client implements IListServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public getList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public getList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public createItem(request: list_pb.CreateItemReq, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public createItem(request: list_pb.CreateItemReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public createItem(request: list_pb.CreateItemReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public deleteList(request: list_pb.ItemReq, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public deleteList(request: list_pb.ItemReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
    public deleteList(request: list_pb.ItemReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: list_pb.Item) => void): grpc.ClientUnaryCall;
}
