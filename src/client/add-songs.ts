import _ from 'lodash';
import client from './client';
import { Song } from '../proto/songs_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import inquirer from 'inquirer';

function addSongs(): (song: Song | null) => void {
    const stream = client.addSongs((err, res: Empty) => {
        if (err) {
            throw err;
        }
        _.noop(res);
    });
    return (song: Song | null): void => {
        if (song == null) {
            stream.end();
            return;
        }
        stream.write(song);
    };
}

async function inputSong(): Promise<Song> {
    const answers = await inquirer.prompt([
        {
            name: 'title',
            message: 'What is the song title?',
        },
        {
            name: 'artist',
            message: 'Who is the artist?',
        },
    ]);
    const song = new Song();
    song.setTitle(answers.title);
    song.setArtist(answers.artist);
    return song;
}

async function shouldAddMore(): Promise<boolean> {
    const answer = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: 'Would you like to add another song?',
    });
    return answer.more;
}

export default {
    command: 'add-songs',
    describe: 'Add songs',
    builder: {},
    handler: async (): Promise<void> => {
        const addSong = addSongs();
        addSong(await inputSong());
        while (await shouldAddMore()) {
            addSong(await inputSong());
        }
        addSong(null);
    },
};
