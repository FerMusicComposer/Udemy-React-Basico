export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC',
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC',
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC',
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel',
    },
];

export const getHeroById = heroID => heroes.find(({ id }) => id === heroID);
//console.log(getHeroeById(1));

const getHeroByOwner = heroOwner => heroes.filter(({ owner }) => owner === heroOwner);
//console.log(getHeroByOwner('Marvel'));
