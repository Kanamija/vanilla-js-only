// const set = new Set([1, 2, 3]);
// set.add(4);

// for (const item of set) {
//     console.log(item);
// }

// const mySet = new Set();
// mySet.add(1);
// mySet.add('hello');
// mySet.add({ name: 'Kanami' });
// mySet.add([1, 2, 3]);

// console.log(mySet);

const map = new Map([['a', '1'], ['b', 2]]);
map.set('c', 3);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}