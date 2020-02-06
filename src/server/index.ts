import grpc from 'grpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Song, Reaction } from '../proto/songs_pb';
import { ISongsServer, SongsService } from '../proto/songs_grpc_pb';
import getSong from './get-song';
import addSong from './add-song';

class SongsServer implements ISongsServer {
    getSong(call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<Song>): void {
        callback(null, getSong());
    }
    addSongs(call: grpc.ServerReadableStream<Song>, callback: grpc.sendUnaryData<Empty>): void {
        call.on('data', (song: Song) => {
            addSong(song);
        });
        call.on('end', () => callback(null, new Empty()));
    }
    getComments(call: grpc.ServerWritableStream<Song>): void {
        console.log('getComments', call);
    }
    liveReactions(call: grpc.ServerDuplexStream<Reaction, Reaction>): void {
        console.log('liveReactions', call);
    }
}

function serve(): void {
    const server = new grpc.Server();
    server.addService<ISongsServer>(SongsService, new SongsServer());
    console.log(`Listening on ${process.env.PORT}`);
    server.bind(`localhost:${process.env.PORT}`, grpc.ServerCredentials.createInsecure());
    server.start();
}

export default {
    command: 'serve',
    describe: 'Start the gRPC server',
    builder: {},
    handler: serve,
};
