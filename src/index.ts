import yargs from 'yargs';
import serve from './server/index';
import getSong from './client/get-song';
import addSongs from './client/add-songs';

yargs
    .command(serve)
    .command(getSong)
    .command(addSongs)
    .help().argv;
