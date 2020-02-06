import { Song } from '../proto/songs_pb';
import db from './db';

export default function(): Song {
    const song = new Song();
    const s = db.get('songs').value()[0] as Song.AsObject;
    song.setId(s.id);
    song.setTitle(s.title);
    song.setArtist(s.artist);
    return song;
}
