// package: songs
// file: songs.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as songs_pb from "./songs_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ISongsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSong: ISongsService_IGetSong;
    addSongs: ISongsService_IAddSongs;
    getChat: ISongsService_IGetChat;
    liveChat: ISongsService_ILiveChat;
}

interface ISongsService_IGetSong extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, songs_pb.Song> {
    path: string; // "/songs.Songs/GetSong"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<songs_pb.Song>;
    responseDeserialize: grpc.deserialize<songs_pb.Song>;
}
interface ISongsService_IAddSongs extends grpc.MethodDefinition<songs_pb.Song, google_protobuf_empty_pb.Empty> {
    path: string; // "/songs.Songs/AddSongs"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<songs_pb.Song>;
    requestDeserialize: grpc.deserialize<songs_pb.Song>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISongsService_IGetChat extends grpc.MethodDefinition<songs_pb.Song, songs_pb.Comment> {
    path: string; // "/songs.Songs/GetChat"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<songs_pb.Song>;
    requestDeserialize: grpc.deserialize<songs_pb.Song>;
    responseSerialize: grpc.serialize<songs_pb.Comment>;
    responseDeserialize: grpc.deserialize<songs_pb.Comment>;
}
interface ISongsService_ILiveChat extends grpc.MethodDefinition<songs_pb.Comment, songs_pb.Comment> {
    path: string; // "/songs.Songs/LiveChat"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<songs_pb.Comment>;
    requestDeserialize: grpc.deserialize<songs_pb.Comment>;
    responseSerialize: grpc.serialize<songs_pb.Comment>;
    responseDeserialize: grpc.deserialize<songs_pb.Comment>;
}

export const SongsService: ISongsService;

export interface ISongsServer {
    getSong: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, songs_pb.Song>;
    addSongs: grpc.handleClientStreamingCall<songs_pb.Song, google_protobuf_empty_pb.Empty>;
    getChat: grpc.handleServerStreamingCall<songs_pb.Song, songs_pb.Comment>;
    liveChat: grpc.handleBidiStreamingCall<songs_pb.Comment, songs_pb.Comment>;
}

export interface ISongsClient {
    getSong(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    addSongs(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    addSongs(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    addSongs(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    addSongs(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    getChat(request: songs_pb.Song, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<songs_pb.Comment>;
    getChat(request: songs_pb.Song, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<songs_pb.Comment>;
    liveChat(): grpc.ClientDuplexStream<songs_pb.Comment, songs_pb.Comment>;
    liveChat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<songs_pb.Comment, songs_pb.Comment>;
    liveChat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<songs_pb.Comment, songs_pb.Comment>;
}

export class SongsClient extends grpc.Client implements ISongsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getSong(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    public getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    public getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    public addSongs(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    public addSongs(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    public addSongs(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    public addSongs(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    public getChat(request: songs_pb.Song, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<songs_pb.Comment>;
    public getChat(request: songs_pb.Song, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<songs_pb.Comment>;
    public liveChat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<songs_pb.Comment, songs_pb.Comment>;
    public liveChat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<songs_pb.Comment, songs_pb.Comment>;
}
