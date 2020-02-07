import { Song } from '../proto/songs_pb';
import db from './db';

export default function(song: Song): void {
    // Use of `any` required due to bug in @types/lowdb
    // SEE: https://github.com/typicode/lowdb/issues/349
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbSongs = db.get('songs') as any;
    song.setId(dbSongs.value().length + 1);
    dbSongs.push(song.toObject()).write();
}
