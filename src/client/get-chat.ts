import client from './client';
import { Song, Comment } from '../proto/songs_pb';

function printChat(songId: number): Promise<void> {
    console.log(`Getting chat for song ${songId}`);
    const song = new Song();
    song.setId(songId);
    return new Promise<void>((resolve, reject) => {
        const stream = client.getChat(song);
        stream.on('data', (comment: Comment) => {
            console.log(`(${comment.getUsername()}) ${comment.getBody()}`);
        });
        stream.on('end', resolve);
        stream.on('error', reject);
    });
}

export default {
    command: 'get-chat',
    describe: 'Get the chat comments on a song',
    builder: {
        songId: {
            demand: true,
            number: true,
        },
    },
    handler: async (argv): Promise<void> => {
        await printChat(argv.songId);
    },
};
