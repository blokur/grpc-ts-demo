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
    getComments: ISongsService_IGetComments;
    liveReactions: ISongsService_ILiveReactions;
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
interface ISongsService_IGetComments extends grpc.MethodDefinition<songs_pb.Song, songs_pb.Comment> {
    path: string; // "/songs.Songs/GetComments"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<songs_pb.Song>;
    requestDeserialize: grpc.deserialize<songs_pb.Song>;
    responseSerialize: grpc.serialize<songs_pb.Comment>;
    responseDeserialize: grpc.deserialize<songs_pb.Comment>;
}
interface ISongsService_ILiveReactions extends grpc.MethodDefinition<songs_pb.Reaction, songs_pb.Reaction> {
    path: string; // "/songs.Songs/LiveReactions"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<songs_pb.Reaction>;
    requestDeserialize: grpc.deserialize<songs_pb.Reaction>;
    responseSerialize: grpc.serialize<songs_pb.Reaction>;
    responseDeserialize: grpc.deserialize<songs_pb.Reaction>;
}

export const SongsService: ISongsService;

export interface ISongsServer {
    getSong: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, songs_pb.Song>;
    addSongs: grpc.handleClientStreamingCall<songs_pb.Song, google_protobuf_empty_pb.Empty>;
    getComments: grpc.handleServerStreamingCall<songs_pb.Song, songs_pb.Comment>;
    liveReactions: grpc.handleBidiStreamingCall<songs_pb.Reaction, songs_pb.Reaction>;
}

export interface ISongsClient {
    getSong(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    addSongs(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    addSongs(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    addSongs(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    addSongs(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    getComments(request: songs_pb.Song, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<songs_pb.Comment>;
    getComments(request: songs_pb.Song, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<songs_pb.Comment>;
    liveReactions(): grpc.ClientDuplexStream<songs_pb.Reaction, songs_pb.Reaction>;
    liveReactions(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<songs_pb.Reaction, songs_pb.Reaction>;
    liveReactions(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<songs_pb.Reaction, songs_pb.Reaction>;
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
    public getComments(request: songs_pb.Song, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<songs_pb.Comment>;
    public getComments(request: songs_pb.Song, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<songs_pb.Comment>;
    public liveReactions(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<songs_pb.Reaction, songs_pb.Reaction>;
    public liveReactions(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<songs_pb.Reaction, songs_pb.Reaction>;
}
