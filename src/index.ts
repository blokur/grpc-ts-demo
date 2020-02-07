import yargs from 'yargs';
import serve from './server/index';
import getSong from './client/get-song';
import addSongs from './client/add-songs';
import getChat from './client/get-chat';
import liveChat from './client/live-chat';

yargs
    .command(serve)
    .command(getSong)
    .command(addSongs)
    .command(getChat)
    .command(liveChat)
    .help().argv;
