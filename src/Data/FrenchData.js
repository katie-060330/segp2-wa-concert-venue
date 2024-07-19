const events = [
    // Concerts de juillet
    {
        id: 0,
        title: 'Chapell Roan',
        start: new Date(2024, 6, 5, 19, 0, 0),
        end: new Date(2024, 6, 5, 22, 0, 0),
        desc: 'Chapell Roan interprète ses derniers succès dans un spectacle live électrisant.',
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
        desc: 'Rejoignez Taylor Swift pour une soirée inoubliable de musique pop.',
        type: 'concert',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 2,
        title: 'Coachella',
        start: new Date(2024, 6, 7, 18, 0, 0),
        end: new Date(2024, 6, 7, 21, 0, 0),
        desc: 'Un festival avec divers artistes pop. Ne le manquez pas !',
        type: 'festival',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 3,
        title: 'Gracie Abrams',
        start: new Date(2024, 6, 12, 19, 0, 0),
        end: new Date(2024, 5, 12, 22, 0, 0),
        desc: 'Gracie Abrams part en tournée, ne manquez pas ça, elle interprète son nouvel album "The Secret of Us". Après avoir gagné en popularité en faisant la première partie de Taylor Swift, les billets se vendent rapidement.',
        type: 'concert',
        genre: 'indie',
        decade: '2000s'
    },
    {
        id: 4,
        title: 'Dua Lipa',
        start: new Date(2024, 6, 13, 19, 0, 0),
        end: new Date(2024, 6, 13, 22, 0, 0),
        desc: 'Dansez toute la nuit avec Dua Lipa et ses chansons en tête des charts.',
        type: 'concert',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 5,
        title: 'Summer Pop',
        start: new Date(2024, 6, 14, 18, 0, 0),
        end: new Date(2024, 6, 14, 21, 0, 0),
        desc: 'Une soirée d\'été remplie de musique pop des meilleurs artistes.',
        type: 'festival',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 6,
        title: 'Zach Bryan',
        start: new Date(2024, 6, 19, 19, 0, 0),
        end: new Date(2024, 6, 19, 22, 0, 0),
        desc: 'Zach Bryan vient de sortir son nouvel album, venez le voir en live à Ottawa.',
        type: 'concert',
        genre: 'country',
        decade: '2020s'
    },
    {
        id: 7,
        title: 'Boots and Hearts',
        start: new Date(2024, 6, 20, 19, 0, 0),
        end: new Date(2024, 6, 20, 22, 0, 0),
        desc: 'Une soirée de fusion pop avec divers artistes.',
        type: 'concert',
        genre: 'country',
        decade: '2020s'
    },
    {
        id: 8,
        title: 'Weekend Pop',
        start: new Date(2024, 6, 21, 18, 0, 0),
        end: new Date(2024, 6, 21, 21, 0, 0),
        desc: 'Un week-end de musique pop avec plusieurs artistes.',
        type: 'festival',
        genre: 'pop',
        decade: '2020s'
    },
    // Concerts d'août
    {
        id: 9,
        title: 'Mt. Joy',
        start: new Date(2024, 7, 2, 19, 0, 0),
        end: new Date(2024, 7, 2, 22, 0, 0),
        desc: 'Découvrez des succès comme "Silver Lining" et "Highway Queen" en live à Ottawa.',
        type: 'concert',
        genre: 'indie',
        decade: '2020s'
    },
    {
        id: 10,
        title: 'Weekend Party',
        start: new Date(2024, 7, 3, 19, 0, 0),
        end: new Date(2024, 7, 3, 22, 0, 0),
        desc: 'Faites la fête tout le week-end avec vos artistes pop préférés.',
        type: 'festival',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 11,
        title: 'Pop Stars Unite',
        start: new Date(2024, 7, 4, 18, 0, 0),
        end: new Date(2024, 7, 4, 21, 0, 0),
        desc: 'Une soirée avec divers stars de la pop se produisant ensemble.',
        type: 'concert',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 12,
        title: 'Stephen Sanchez',
        start: new Date(2024, 7, 9, 19, 0, 0),
        end: new Date(2024, 7, 9, 22, 0, 0),
        desc: 'Stephen Sanchez, connu pour ses chansons d\'amour, venez avec votre partenaire pour voir vos chansons d\'amour préférées.',
        type: 'concert',
        genre: 'love',
        decade: '2010s'
    },
    {
        id: 13,
        title: 'ABBA',
        start: new Date(2024, 7, 10, 19, 0, 0),
        end: new Date(2024, 7, 10, 22, 0, 0),
        desc: 'Les classiques d\'ABBA interprétés en live avec des hologrammes.',
        type: 'concert',
        genre: 'pop',
        decade: '1970s'
    },
    {
        id: 14,
        title: 'Blues Fest',
        start: new Date(2024, 7, 11, 18, 0, 0),
        end: new Date(2024, 7, 11, 21, 0, 0),
        desc: 'Un festival d\'été avec les meilleurs artistes pop.',
        type: 'festival',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 15,
        title: 'Billie Eilish',
        start: new Date(2024, 7, 16, 19, 0, 0),
        end: new Date(2024, 7, 16, 22, 0, 0),
        desc: 'Billie Eilish se produit en live avec son son unique.',
        type: 'concert',
        genre: 'alternative',
        decade: '2020s'
    },
    {
        id: 16,
        title: 'Fleetwood Mac',
        start: new Date(2024, 7, 17, 19, 0, 0),
        end: new Date(2024, 7, 17, 22, 0, 0),
        desc: 'Fleetwood Mac apporte sa performance pop magique sur scène.',
        type: 'concert',
        genre: 'pop',
        decade: '1970s'
    },
    {
        id: 17,
        title: 'Weekend Pop',
        start: new Date(2024, 7, 18, 18, 0, 0),
        end: new Date(2024, 7, 18, 21, 0, 0),
        desc: 'Un week-end de fête avec de la musique pop de divers artistes.',
        type: 'festival',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 18,
        title: 'Renne Rapp',
        start: new Date(2024, 7, 23, 19, 0, 0),
        end: new Date(2024, 7, 23, 22, 0, 0),
        desc: 'Renne Rapp, nouvel album "Snow Angel" vient de sortir avec la comédie musicale "Mean Girls". Écoutez des chansons des deux ici !',
        type: 'concert',
        genre: 'pop',
        decade: '2010s'
    },
    {
        id: 19,
        title: 'Sabrina Carpenter',
        start: new Date(2024, 7, 24, 19, 0, 0),
        end: new Date(2024, 7, 24, 22, 0, 0),
        desc: 'VENEZ VOIR Sabrina Carpenter en live à Ottawa.',
        type: 'concert',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 20,
        title: 'Summer End Pop',
        start: new Date(2024, 7, 25, 18, 0, 0),
        end: new Date(2024, 7, 25, 21, 0, 0),
        desc: 'Célébrez la fin de l\'été avec un festival de musique pop.',
        type: 'festival',
        genre: 'pop',
        decade: '2020s'
    },
    // Concerts occasionnels en semaine
    {
        id: 21,
        title: 'Midweek Pop',
        start: new Date(2024, 6, 10, 19, 0, 0),
        end: new Date(2024, 6, 10, 21, 0, 0),
        desc: 'Faites une pause en milieu de semaine avec de la musique pop.',
        type: 'concert',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 22,
        title: 'Olivia Rodrigo',
        start: new Date(2024, 7, 6, 19, 0, 0),
        end: new Date(2024, 7, 6, 21, 0, 0),
        desc: 'Olivia Rodrigo interprète ses succès un mardi soir.',
        type: 'concert',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 23,
        title: 'Rolling Stones',
        start: new Date(2024, 7, 12, 19, 0, 0),
        end: new Date(2024, 7, 12, 22, 0, 0),
        desc: 'Les Rolling Stones apportent leur légendaire son rock sur scène.',
        type: 'concert',
        genre: 'rock',
        decade: '1980s'
    },
    {
        id: 24,
        title: 'Queen',
        start: new Date(2024, 7, 13, 19, 0, 0),
        end: new Date(2024, 7, 13, 22, 0, 0),
        desc: 'Vivez la musique iconique de Queen en live.',
        type: 'concert',
        genre: 'rock',
        decade: '1970s'
    },
    {
        id: 25,
        title: 'Adele',
        start: new Date(2024, 7, 14, 19, 0, 0),
        end: new Date(2024, 7, 14, 22, 0, 0),
        desc: 'Adele interprète ses succès envoûtants dans un spectacle live intime.',
        type: 'concert',
        genre: 'soul',
        decade: '2010s'
    },
    {
        id: 26,
        title: 'Gracie Abrams',
        start: new Date(2024, 7, 15, 19, 0, 0),
        end: new Date(2024, 7, 15, 22, 0, 0),
        desc: 'Gracie Abrams interprète ses chansons touchantes en live.',
        type: 'concert',
        genre: 'indie',
        decade: '2020s'
    },
    {
        id: 27,
        title: 'Noah Kahan',
        start: new Date(2024, 3, 9, 19, 0, 0),
        end: new Date(2024, 3, 9, 22, 0, 0),
        desc: 'Noah Kahan apporte son son folk-pop unique sur scène.',
        type: 'concert',
        genre: 'folk',
        decade: '2020s'
    },
    {
        id: 28,
        title: 'Marc Ambor',
        start: new Date(2024, 1, 18, 19, 0, 0),
        end: new Date(2024, 1, 18, 22, 0, 0),
        desc: 'Marc Ambor interprète ses derniers succès dans un spectacle captivant.',
        type: 'concert',
        genre: 'pop',
        decade: '2020s'
    },
    {
        id: 29,
        title: 'TALK',
        start: new Date(2024, 3, 20, 19, 0, 0),
        end: new Date(2024, 3, 20, 22, 0, 0),
        desc: 'L\'artiste canadien TALK interprète sa musique récente.',
        type: 'concert',
        genre: 'alternative',
        decade: '2020s'
    },
    {
        id: 30,
        title: 'Jazz Night',
        start: new Date(2024, 7, 19, 19, 0, 0),
        end: new Date(2024, 7, 19, 22, 0, 0),
        desc: 'Une soirée de jazz doux avec divers artistes.',
        type: 'concert',
        genre: 'jazz',
        decade: '2020s'
    }
];

export default events;
