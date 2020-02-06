import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const db = low(new FileSync('db.json'));
db.defaults({ songs: [] }).write();

export default db;
