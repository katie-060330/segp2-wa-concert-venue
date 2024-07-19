const events = [
    // July Concerts
    {

        id: 0,
        title: 'Chapell Roan',
        start: new Date(2024, 6, 5, 19, 0, 0),
        end: new Date(2024, 6, 5, 22, 0, 0),
        desc: 'Chapel Roan performs her latest hits in an electrifying live show.',
        type: 'concert',

        genre: 'pop',
        venue: 'A',

        decade: '2020s'

    },

    {

        id: 1,
        title: 'Taylor Swift',

        start: new Date(2024, 6, 6, 19, 0, 0),

        end: new Date(2024, 6, 6, 22, 0, 0),

        desc: 'Join Taylor Swift for an unforgettable night of pop music.',

        type: 'concert',

        genre: 'pop',

        decade: '2020s' 

    },

    {

        id: 2,

        title: 'Coachella',

        start: new Date(2024, 6, 7, 18, 0, 0),

        end: new Date(2024, 6, 7, 21, 0, 0),

        desc: 'A festival featuring various pop artists. Don\'t miss out!',

        type: 'festival',
        genre: 'pop',

        decade: '2020s'

    },

    {

        id: 3,
        title: 'Gracie Abrams',

        start: new Date(2024, 6, 12, 19, 0, 0),

        end: new Date(2024, 5, 12, 22, 0, 0),
        desc: 'Gracie Abrams mis going on tour, dont miss it, performing her new album the secret of us. after gaining popularity opening for taylor swift tickets are selling fast',

        type: 'concert',
        genre: 'indie',
        decade: '2000s'
    },

    {
        id: 4,

        title: 'Dua Lipa',
        start: new Date(2024, 6, 13, 19, 0, 0),

        end: new Date(2024, 6, 13, 22, 0, 0),

        desc: 'Dance the night away with Dua Lipa and her chart-topping songs.',

        type: 'concert',
        genre: 'pop',
        decade: '2020s' 

    },

    {

        id: 5,

        title: 'Summer Pop',
        start: new Date(2024, 6, 14, 18, 0, 0),

        end: new Date(2024, 6, 14, 21, 0, 0),
        desc: 'A summer evening filled with pop music from top artists.',

        type: 'festival',

        genre: 'pop',
        decade: '2020s'

    },

    {

        id: 6,
        title: 'Zach Bryane',

        start: new Date(2024, 6, 19, 19, 0, 0),

        end: new Date(2024, 6, 19, 22, 0, 0),

        desc: 'Zach Bryan just released his new album, see it live here in ottawa ',
        type: 'concert',

        genre: 'country',
        decade: '2020s' 

    },

    {
        id: 7,
        title: 'Boots and Hearts',

        start: new Date(2024, 6, 20, 19, 0, 0),

        end: new Date(2024, 6, 20, 22, 0, 0),

        desc: 'An evening of pop fusion with various artists.',
        type: 'concert',

        genre: 'country',
        decade: '2020s'

    },

    {
        id: 8,
        title: 'Weekend Pop',
        start: new Date(2024, 6, 21, 18, 0, 0),
        end: new Date(2024, 6, 21, 21, 0, 0),
        desc: 'A weekend blast of pop music with multiple performers.',

        type: 'festival',

        genre: 'pop',

        decade: '2020s'

    },

    // August Concerts

    {
        id: 9,

        title: 'Mt. Joy',
        start: new Date(2024, 7, 2, 19, 0, 0),

        end: new Date(2024, 7, 2, 22, 0, 0),

        desc: 'See hits like silver lining and highway queen live in ottawa ',

        type: 'concert',
        genre: 'indie',
        decade: '2020s'

    },
    {

        id: 10,
        title: 'Weekend Party',
        start: new Date(2024, 7, 3, 19, 0, 0),
        end: new Date(2024, 7, 3, 22, 0, 0),

        desc: 'Party all weekend with your favorite pop artists.',
        type: 'festival',

        genre: 'pop',
        decade: '2020s'

    },
    {
        id: 11,
        title: 'Pop Stars Unite',

        start: new Date(2024, 7, 4, 18, 0, 0),

        end: new Date(2024, 7, 4, 21, 0, 0),
        desc: 'An evening with various pop stars performing together.',

        type: 'concert',

        genre: 'pop',
        decade: '2020s'

    },
    {

        id: 12,
        title: 'Stephen Sanchez',

        start: new Date(2024, 7, 9, 19, 0, 0),

        end: new Date(2024, 7, 9, 22, 0, 0),
        desc: 'Stephen Sanchez, popular for his love songs, come with your partner to see your favorite love songs ',
        type: 'concert',
        genre: 'love',
        decade: '2010s'
    },
    {

        id: 13,
        title: 'ABBA',
        start: new Date(2024, 7, 10, 19, 0, 0),

        end: new Date(2024, 7, 10, 22, 0, 0),

        desc: 'ABBAs classic hits preformed live with hologram ',

        type: 'concert',
        genre: 'pop',

        decade: '1970s'

    },

    {
        id: 14,
        title: 'Blues Fest',

        start: new Date(2024, 7, 11, 18, 0, 0),
        end: new Date(2024, 7, 11, 21, 0, 0),

        desc: 'A summer festival with top pop artists.',

        type: 'festival',

        genre: 'pop',

        decade: '2020s'

    },
    {
        id: 15,
        title: 'Billie Eilish',
        start: new Date(2024, 7, 16, 19, 0, 0),

        end: new Date(2024, 7, 16, 22, 0, 0),

        desc: 'Billie Eilish performs live with her unique sound.',
        type: 'concert',
        genre: 'alternative',
        decade: '2020s'
    },

    {
        id: 16,

        title: 'Fleetwood Mac',

        start: new Date(2024, 7, 17, 19, 0, 0),

        end: new Date(2024, 7, 17, 22, 0, 0),

        desc: 'Fleetwood Mac brings their magical pop performance to the stage.',
        type: 'concert',

        genre: 'pop',
        decade: '1970s'
    },
    {

        id: 17,

        title: 'Weekend Pop',
        start: new Date(2024, 7, 18, 18, 0, 0),
        end: new Date(2024, 7, 18, 21, 0, 0),

        desc: 'A weekend bash with pop music from various artists.',
        type: 'festival',

        genre: 'pop',

        decade: '2020s'

    },
    {
        id: 18,
        title: 'Renne Rapp',
        start: new Date(2024, 7, 23, 19, 0, 0),

        end: new Date(2024, 7, 23, 22, 0, 0),

        desc: 'Renne Rapp, new album snow angle just game out along with the mean girls the musical here songs from both here!',

        type: 'concert',
        genre: 'pop',
        decade: '2010s'
    },

    {
        id: 19,

        title: 'Sabrina Carpenter',
        start: new Date(2024, 7, 24, 19, 0, 0),
        end: new Date(2024, 7, 24, 22, 0, 0),

        desc: 'PLEASE PLEASE PLEASE come see sabrina live in ottawa',
        type: 'concert',
        genre: 'pop',

        decade: '2020s'

    },
    {
        id: 20,
        title: 'Summer End Pop',

        start: new Date(2024, 7, 25, 18, 0, 0),

        end: new Date(2024, 7, 25, 21, 0, 0),

        desc: 'Celebrate the end of summer with a festival of pop music.',

        type: 'festival',
        genre: 'pop',
        decade: '2020s'

    },
    // Occasional Weekday Concerts

    {
        id: 21,
        title: 'Midweek Pop',

        start: new Date(2024, 6, 10, 19, 0, 0),

        end: new Date(2024, 6, 10, 21, 0, 0),
        desc: 'Take a midweek break with some pop music.',

        type: 'concert',
        genre: 'pop',

        decade: '2020s'

    },
    {

        id: 22,

        title: 'Olivia Rodrigo',
        start: new Date(2024, 7, 6, 19, 0, 0),

        end: new Date(2024, 7, 6, 21, 0, 0),

        desc: 'Olivia Rodrigo performs her hits on a Tuesday night.',

        type: 'concert',
        genre: 'pop',
        decade: '2020s'
    },
    {

        id: 23,
        title: 'Rolling Stones',

        start: new Date(2024, 7, 12, 19, 0, 0),

        end: new Date(2024, 7, 12, 22, 0, 0),

        desc: 'The Rolling Stones bring their legendary rock sound to the stage.',
        type: 'concert',

        genre: 'rock',

        decade: '1980s'
    },
    {

        id: 24,
        title: 'Queen',

        start: new Date(2024, 7, 13, 19, 0, 0),
        end: new Date(2024, 7, 13, 22, 0, 0),
        desc: 'Experience the iconic music of Queen live in concert.',
        type: 'concert',

        genre: 'rock',

        decade: '1970ss'
    },

    {
        id: 25,
        title: 'Adele',
        start: new Date(2024, 7, 14, 19, 0, 0),
        end: new Date(2024, 7, 14, 22, 0, 0),

        desc: 'Adele performs her soulful hits in an intimate live show.',

        type: 'concert',

        genre: 'soul',

        decade: '2010s'

    },
    {
        id: 26,

        title: 'Gracie Abrams',

        start: new Date(2024, 7, 15, 19, 0, 0),
        end: new Date(2024, 7, 15, 22, 0, 0),

        desc: 'Gracie Abrams performs her heartfelt songs live.',
        type: 'concert',

        genre: 'indie',
        decade: '2020s'

    },

    {

        id: 27,
        title: 'Noah Kahan',
        start: new Date(2024, 3, 9, 19, 0, 0),

        end: new Date(2024, 3, 9, 22, 0, 0),

        desc: 'Noah Kahan brings his unique folk-pop sound to the stage.',

        type: 'concert',

        genre: 'folk',
        decade: '2020s'
    },

    {
        id: 28,

        title: 'Marc Ambor',
        start: new Date(2024, 1, 18, 19, 0, 0),
        end: new Date(2024, 1, 18, 22, 0, 0),
        desc: 'Marc Ambor performs his latest hits in a captivating live show.',
        type: 'concert',

        genre: 'pop',
        decade: '2020s'
    },

    {
        id: 29,

        title: 'TALK',

        start: new Date(2024, 3, 20, 19, 0, 0),

        end: new Date(2024, 3, 20, 22, 0, 0),
        desc: 'Canadian artist TALK performs his latest music.',
        type: 'concert',

        genre: 'alternative',
        decade: '2020s'
    },

    {
        id: 30,
        title: 'Jazz Night',
        start: new Date(2024, 7, 19, 19, 0, 0),

        end: new Date(2024, 7, 19, 22, 0, 0),
        desc: 'An evening of smooth jazz with various artists.',
        type: 'concert',
        genre: 'jazz',

        decade: '2020s'
    }
    
];
export default events; 