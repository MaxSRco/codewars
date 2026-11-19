// Дан объект:
// const student = { name: 'Анна', age: 22, university: 'МГУ' };
// С помощью Object.keys() получи массив ключей и выведи его в консоль.
// С помощью Object.values() получи массив значений и выведи его в консоль.
// С помощью Object.entries() получи массив пар и выведи его в консоль.

const student = {name: 'Анна', age: 22, university: 'МГУ'}

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))