import { getHeroById } from './03-Common-Array-Functions';

// Recursive function that returns the amount of time a promise will take to be fulfilled and the time it took
// to fulfill it based on a given array of numbers that represent an amount of time in miliseconds
// const delays = [1000, 2000, 5000, 3000, 500, 12000];
// const startTime = Date.now();

// const delay = milliseconds => {
//     console.log(`Waiting: ${milliseconds / 1000} seconds.`);
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(milliseconds);
//         }, milliseconds);
//     });
// };
// const doNextPromise = del => {
//     delay(delays[del]).then(x => {
//         console.log(`Waited: ${x / 1000} seconds\n`);
//         del++;
//         if (del < delays.length) doNextPromise(del);
//         else console.log(`Total: ${(Date.now() - startTime) / 1000} seconds.`);
//     });
// };
// doNextPromise(0);

///-------------------------------------------///

const getHeroByIdAsync = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);

            if (!hero) reject(`Can't find that hero`);

            resolve(hero);
        }, 2000);
    });
};

getHeroByIdAsync(8)
    .then(hero => {
        console.log(hero);
    })
    .catch(err => console.warn(err));

//Same as above but with shortened syntax. Sending just the console.x reference to the then or catch blocks
//automatically passes the parameter received by these blocks as the first arg for the console function
getHeroByIdAsync(5).then(console.log).catch(console.warn);
