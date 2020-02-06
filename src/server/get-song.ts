import { Song } from '../proto/songs_pb';

export default function(): Song {
    const song = new Song();
    song.setId(1);
    song.setTitle('Title');
    song.setArtist('Artist');
    return song;
}
