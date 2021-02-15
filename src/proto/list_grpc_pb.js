// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var list_pb = require('./list_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_list_CreateItemReq(arg) {
  if (!(arg instanceof list_pb.CreateItemReq)) {
    throw new Error('Expected argument of type list.CreateItemReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_list_CreateItemReq(buffer_arg) {
  return list_pb.CreateItemReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_list_Item(arg) {
  if (!(arg instanceof list_pb.Item)) {
    throw new Error('Expected argument of type list.Item');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_list_Item(buffer_arg) {
  return list_pb.Item.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_list_ItemFilterReq(arg) {
  if (!(arg instanceof list_pb.ItemFilterReq)) {
    throw new Error('Expected argument of type list.ItemFilterReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_list_ItemFilterReq(buffer_arg) {
  return list_pb.ItemFilterReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_list_ItemReq(arg) {
  if (!(arg instanceof list_pb.ItemReq)) {
    throw new Error('Expected argument of type list.ItemReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_list_ItemReq(buffer_arg) {
  return list_pb.ItemReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_list_ResultResponse(arg) {
  if (!(arg instanceof list_pb.ResultResponse)) {
    throw new Error('Expected argument of type list.ResultResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_list_ResultResponse(buffer_arg) {
  return list_pb.ResultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ListServiceService = exports.ListServiceService = {
  getAllItems: {
    path: '/list.ListService/GetAllItems',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: list_pb.ResultResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_list_ResultResponse,
    responseDeserialize: deserialize_list_ResultResponse,
  },
  createItem: {
    path: '/list.ListService/CreateItem',
    requestStream: false,
    responseStream: false,
    requestType: list_pb.CreateItemReq,
    responseType: list_pb.Item,
    requestSerialize: serialize_list_CreateItemReq,
    requestDeserialize: deserialize_list_CreateItemReq,
    responseSerialize: serialize_list_Item,
    responseDeserialize: deserialize_list_Item,
  },
  deleteItem: {
    path: '/list.ListService/DeleteItem',
    requestStream: false,
    responseStream: false,
    requestType: list_pb.ItemReq,
    responseType: list_pb.Item,
    requestSerialize: serialize_list_ItemReq,
    requestDeserialize: deserialize_list_ItemReq,
    responseSerialize: serialize_list_Item,
    responseDeserialize: deserialize_list_Item,
  },
  filterItems: {
    path: '/list.ListService/FilterItems',
    requestStream: false,
    responseStream: true,
    requestType: list_pb.ItemFilterReq,
    responseType: list_pb.Item,
    requestSerialize: serialize_list_ItemFilterReq,
    requestDeserialize: deserialize_list_ItemFilterReq,
    responseSerialize: serialize_list_Item,
    responseDeserialize: deserialize_list_Item,
  },
  batchCreate: {
    path: '/list.ListService/BatchCreate',
    requestStream: true,
    responseStream: false,
    requestType: list_pb.CreateItemReq,
    responseType: list_pb.ResultResponse,
    requestSerialize: serialize_list_CreateItemReq,
    requestDeserialize: deserialize_list_CreateItemReq,
    responseSerialize: serialize_list_ResultResponse,
    responseDeserialize: deserialize_list_ResultResponse,
  },
};

exports.ListServiceClient = grpc.makeGenericClientConstructor(ListServiceService);
