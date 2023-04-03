import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
    const nameToLower = name.toLocaleLowerCase().trim();

    if (nameToLower.length === 0) return [];

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().trim().includes(nameToLower));
};
