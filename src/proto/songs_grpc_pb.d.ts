// GENERATED CODE -- DO NOT EDIT!

// package: songs
// file: songs.proto

import * as songs_pb from "./songs_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ISongsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSong: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, songs_pb.Song>;
  addSongs: grpc.MethodDefinition<songs_pb.Song, google_protobuf_empty_pb.Empty>;
  getComments: grpc.MethodDefinition<songs_pb.Song, songs_pb.Comment>;
  liveReactions: grpc.MethodDefinition<songs_pb.Reaction, songs_pb.Reaction>;
}

export const SongsService: ISongsService;

export class SongsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getSong(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<songs_pb.Song>): grpc.ClientUnaryCall;
  getSong(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<songs_pb.Song>): grpc.ClientUnaryCall;
  getSong(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<songs_pb.Song>): grpc.ClientUnaryCall;
  addSongs(callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientWritableStream<songs_pb.Song>;
  addSongs(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientWritableStream<songs_pb.Song>;
  addSongs(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientWritableStream<songs_pb.Song>;
  getComments(argument: songs_pb.Song, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<songs_pb.Comment>;
  getComments(argument: songs_pb.Song, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<songs_pb.Comment>;
  liveReactions(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<songs_pb.Reaction, songs_pb.Reaction>;
  liveReactions(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<songs_pb.Reaction, songs_pb.Reaction>;
}
