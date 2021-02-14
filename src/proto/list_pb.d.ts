// package: list
// file: list.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Item extends jspb.Message { 
    getId(): string;
    setId(value: string): Item;

    getTitle(): string;
    setTitle(value: string): Item;

    getStatus(): string;
    setStatus(value: string): Item;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
    export type AsObject = {
        id: string,
        title: string,
        status: string,
    }
}

export class ItemFilterReq extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): ItemFilterReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemFilterReq.AsObject;
    static toObject(includeInstance: boolean, msg: ItemFilterReq): ItemFilterReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemFilterReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemFilterReq;
    static deserializeBinaryFromReader(message: ItemFilterReq, reader: jspb.BinaryReader): ItemFilterReq;
}

export namespace ItemFilterReq {
    export type AsObject = {
        status: string,
    }
}

export class CreateItemReq extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreateItemReq;

    getStatus(): string;
    setStatus(value: string): CreateItemReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateItemReq.AsObject;
    static toObject(includeInstance: boolean, msg: CreateItemReq): CreateItemReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateItemReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateItemReq;
    static deserializeBinaryFromReader(message: CreateItemReq, reader: jspb.BinaryReader): CreateItemReq;
}

export namespace CreateItemReq {
    export type AsObject = {
        title: string,
        status: string,
    }
}

export class ResultResponse extends jspb.Message { 
    clearResultsList(): void;
    getResultsList(): Array<Item>;
    setResultsList(value: Array<Item>): ResultResponse;
    addResults(value?: Item, index?: number): Item;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResultResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResultResponse): ResultResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResultResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResultResponse;
    static deserializeBinaryFromReader(message: ResultResponse, reader: jspb.BinaryReader): ResultResponse;
}

export namespace ResultResponse {
    export type AsObject = {
        resultsList: Array<Item.AsObject>,
    }
}

export class ItemReq extends jspb.Message { 
    getId(): string;
    setId(value: string): ItemReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemReq.AsObject;
    static toObject(includeInstance: boolean, msg: ItemReq): ItemReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemReq;
    static deserializeBinaryFromReader(message: ItemReq, reader: jspb.BinaryReader): ItemReq;
}

export namespace ItemReq {
    export type AsObject = {
        id: string,
    }
}
