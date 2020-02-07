import { Comment } from '../proto/songs_pb';
import db from './db';

type ListenerFn = (c: Comment) => void;

const listeners: ListenerFn[] = [];

export function registerListener(fn: ListenerFn): void {
    listeners.push(fn);
}

export function addComment(comment: Comment): void {
    // Use of `any` required due to bug in @types/lowdb
    // SEE: https://github.com/typicode/lowdb/issues/349
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbComments = db.get('comments') as any;
    dbComments.push(comment.toObject()).write();
    listeners.map(listener => listener(comment));
}
