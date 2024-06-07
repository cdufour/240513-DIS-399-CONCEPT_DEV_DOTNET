export function hello() {
    console.log('hello');
}


export function randInt(max: number): number {
    return Math.floor(Math.random() * max);
}

/*
export const randInt = (max: number): number => {
    return Math.floor(Math.random() * max);
}
*/
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
export function randIntInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}