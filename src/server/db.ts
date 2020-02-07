import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const db = low(new FileSync('db.json'));
db.defaults({
    songs: [
        {
            id: 1,
            title: 'The Box',
            artist: 'Roddy Ricch',
        },
        {
            id: 2,
            title: 'Life Is Good',
            artist: 'Future Featuring Drake',
        },
        {
            id: 3,
            title: 'Circles',
            artist: 'Post Malone',
        },
        {
            id: 4,
            title: 'Memories',
            artist: 'Maroon 5',
        },
        {
            id: 5,
            title: 'Someone You Loved',
            artist: 'Lewis Capaldi',
        },

        {
            id: 6,
            title: '10,000 Hours',
            artist: 'Dan + Shay & Justin Bieber',
        },
        {
            id: 7,
            title: 'Dance Monkey',
            artist: 'Tones And I',
        },
        {
            id: 8,
            title: 'Roxanne',
            artist: 'Arizona Zervas',
        },
        {
            id: 9,
            title: "Don't Start Now",
            artist: 'Dua Lipa',
        },
        {
            id: 10,
            title: 'everything i wanted',
            artist: 'Billie Eilish',
        },
    ],
    comments: [
        {
            songId: 2,
            username: 'Emily Watson',
            body: `Behind the window was a reflection that only instilled fear.`,
        },
        {
            songId: 8,
            username: 'Jeffery Vega',
            body: `I am out of paper for the printer.`,
        },
        {
            songId: 3,
            username: 'Sandra Gibbs',
            body: `Don't piss in my garden and tell me you're trying to help my plants grow.`,
        },
        {
            songId: 6,
            username: 'Sarah Webb',
            body: `I like going out to parties with friends or watching TV.`,
        },
        {
            songId: 6,
            username: 'Amos Miles',
            body: `When motorists sped in and out of traffic, all she could think of was those in need of a transplant.`,
        },
        {
            songId: 2,
            username: 'Andy Fowler',
            body: `The memory we used to share is no longer coherent.`,
        },
        {
            songId: 1,
            username: 'Doug Stanley',
            body: `She works two jobs to make ends meet; at least, that was her reason for not having time to join us.`,
        },
        {
            songId: 2,
            username: 'Keith Hogan',
            body: `Abstraction is often one floor above you.`,
        },
        {
            songId: 8,
            username: 'Melissa Guzman',
            body: `We all agreed; it was a magnificent evening.`,
        },
        {
            songId: 8,
            username: 'Olivia Washington',
            body: `The river stole the gods.`,
        },
        {
            songId: 1,
            username: 'Tanya Murray',
            body: `She found his complete dullness interesting.`,
        },
        {
            songId: 9,
            username: 'Lola Rodriquez',
            body: `The knives were out and she was sharpening hers.`,
        },
        {
            songId: 1,
            username: 'Sheldon Campbell',
            body: `The random sentence generator generated a random sentence about a random sentence.`,
        },
        {
            songId: 8,
            username: 'Michelle Wise',
            body: `Malls are great places to shop; I can find everything I need under one roof.`,
        },
        {
            songId: 4,
            username: 'Clarence Cox',
            body: `We have a lot of rain in June.`,
        },
        {
            songId: 1,
            username: 'Bobbie Berry',
            body: `He was disappointed when he found the beach to be so sandy and the sun so sunny.`,
        },
        {
            songId: 3,
            username: 'Joan Rose',
            body: `Please tell me you don't work in a morgue.`,
        },
        {
            songId: 4,
            username: 'Ebony Newman',
            body: `I love bacon, beer, birds, and baboons.`,
        },
        {
            songId: 4,
            username: 'Manuel Newton',
            body: `The tortoise jumped into the lake with dreams of becoming a sea turtle.`,
        },
        {
            songId: 4,
            username: 'Anne Wilkins',
            body: `So long and thanks for the fish.`,
        },
    ],
}).write();

export default db;
