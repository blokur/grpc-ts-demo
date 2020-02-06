import yargs from 'yargs';
import serve from './server/index';
import getSong from './client/get-song';

yargs
    .command(serve)
    .command(getSong)
    .help().argv;
