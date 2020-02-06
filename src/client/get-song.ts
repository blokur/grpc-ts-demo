import client from './client';
import { Song } from '../proto/songs_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import Table from 'cli-table';

function getSong(): Promise<Song> {
    console.log('Getting a song...');
    return new Promise<Song>((resolve, reject) => {
        client.getSong(new Empty(), (err, song) => {
            if (err) {
                return reject(err);
            }
            return resolve(song);
        });
    });
}

export default {
    command: 'get',
    describe: 'Get songs',
    builder: {},
    handler: async (): Promise<void> => {
        const song = await getSong();
        const table = new Table();
        table.push(
            {
                'Song ID': song.getId(),
            },
            {
                Title: song.getTitle(),
            },
            {
                Artist: song.getArtist(),
            },
        );
        console.log(table.toString());
    },
};
