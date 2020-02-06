import { Song } from '../proto/songs_pb';
import db from './db';

export default function(): Song {
    const song = new Song();
    const songs = db.get('songs').value() as Song.AsObject[];
    const s = songs[Math.floor(Math.random() * songs.length)];
    song.setId(s.id);
    song.setTitle(s.title);
    song.setArtist(s.artist);
    return song;
}
