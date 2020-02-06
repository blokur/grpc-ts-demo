// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var songs_pb = require('./songs_pb.js');
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

function serialize_songs_Comment(arg) {
  if (!(arg instanceof songs_pb.Comment)) {
    throw new Error('Expected argument of type songs.Comment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_songs_Comment(buffer_arg) {
  return songs_pb.Comment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_songs_Song(arg) {
  if (!(arg instanceof songs_pb.Song)) {
    throw new Error('Expected argument of type songs.Song');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_songs_Song(buffer_arg) {
  return songs_pb.Song.deserializeBinary(new Uint8Array(buffer_arg));
}


var SongsService = exports.SongsService = {
  getSong: {
    path: '/songs.Songs/GetSong',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: songs_pb.Song,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_songs_Song,
    responseDeserialize: deserialize_songs_Song,
  },
  addSongs: {
    path: '/songs.Songs/AddSongs',
    requestStream: true,
    responseStream: false,
    requestType: songs_pb.Song,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_songs_Song,
    requestDeserialize: deserialize_songs_Song,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getChat: {
    path: '/songs.Songs/GetChat',
    requestStream: false,
    responseStream: true,
    requestType: songs_pb.Song,
    responseType: songs_pb.Comment,
    requestSerialize: serialize_songs_Song,
    requestDeserialize: deserialize_songs_Song,
    responseSerialize: serialize_songs_Comment,
    responseDeserialize: deserialize_songs_Comment,
  },
  liveChat: {
    path: '/songs.Songs/LiveChat',
    requestStream: true,
    responseStream: true,
    requestType: songs_pb.Comment,
    responseType: songs_pb.Comment,
    requestSerialize: serialize_songs_Comment,
    requestDeserialize: deserialize_songs_Comment,
    responseSerialize: serialize_songs_Comment,
    responseDeserialize: deserialize_songs_Comment,
  },
};

exports.SongsClient = grpc.makeGenericClientConstructor(SongsService);
