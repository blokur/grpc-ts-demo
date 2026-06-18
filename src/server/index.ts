import * as grpc from '@grpc/grpc-js';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Song, Comment } from '../proto/songs_pb';
import { ISongsServer, SongsService } from '../proto/songs_grpc_pb';
import getSong from './get-song';
import addSong from './add-song';
import getChat from './get-chat';
import { addComment, registerListener } from './live-chat';

const createSongsServer = (): ISongsServer => ({
    getSong(_call, callback): void {
        console.log(`${new Date().toISOString()}    getSong`);
        callback(null, getSong());
    },
    addSongs(call, callback): void {
        console.log(`${new Date().toISOString()}    addSongs`);
        call.on('data', (song: Song) => {
            addSong(song);
        });
        call.on('end', () => callback(null, new Empty()));
    },
    async getChat(call): Promise<void> {
        console.log(`${new Date().toISOString()}    getChat`);
        const song = call.request as Song;
        const comments = await getChat(song.getId());
        for (const comment of comments) {
            call.write(comment);
        }
        call.end();
    },
    liveChat(call): void {
        console.log(`${new Date().toISOString()}    liveChat`);
        registerListener((comment) => call.write(comment));
        call.on('data', (comment: Comment) => {
            addComment(comment);
        });
        call.on('end', () => call.end());
    }
});

function serve(): void {
    const server = new grpc.Server();
    // @ts-ignore
    server.addService(SongsService, createSongsServer());
    server.bindAsync(`localhost:${process.env.PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            throw err;
        }
        console.log(`Listening on ${port}`);
        server.start();
    });
}

export default {
    command: 'serve',
    describe: 'Start the gRPC server',
    builder: {},
    handler: serve,
};
