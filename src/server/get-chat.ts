import { Comment } from '../proto/songs_pb';
import db from './db';

export default async function(songId: number): Promise<Comment[]> {
    const comments = db.get('comments').value() as Comment.AsObject[];
    return comments
        .filter(comment => comment.songId === songId)
        .map(c => {
            const comment = new Comment();
            comment.setSongId(c.songId);
            comment.setBody(c.body);
            comment.setUsername(c.username);
            return comment;
        });
}
