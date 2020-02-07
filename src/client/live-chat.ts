import fs from 'fs';
import inquirer from 'inquirer';
import client from './client';
import { Comment } from '../proto/songs_pb';

async function liveChat(): Promise<void> {
    const { name, songId } = await inquirer.prompt([
        {
            name: 'name',
            message: 'What is your name?',
        },
        {
            name: 'songId',
            message: 'Which song do you want to discuss?',
        },
    ]);
    const stream = client.liveChat();
    return new Promise(async (resolve, reject) => {
        stream.on('data', (comment: Comment) => {
            fs.writeFileSync(
                `chat-${name}-${comment.getSongId()}.txt`,
                `(${comment.getUsername()}) ${comment.getBody()}\n`,
                {
                    flag: 'a',
                },
            );
        });
        stream.on('end', resolve);
        stream.on('error', reject);

        while (true) {
            const answer = await inquirer.prompt([
                {
                    name: 'message',
                    message: 'Type message:',
                },
            ]);
            const comment = new Comment();
            comment.setUsername(name);
            comment.setBody(answer.message);
            comment.setSongId(songId);
            stream.write(comment);
        }
    });
}

export default {
    command: 'chat',
    describe: 'Chat about a song',
    builder: {},
    handler: async (): Promise<void> => {
        await liveChat();
    },
};
