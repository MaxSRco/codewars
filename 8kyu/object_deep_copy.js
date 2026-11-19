// const user = {
//     name: 'Иван',
//     age: 25,
//     address: {
//         city: 'Москва',
//         street: 'Тверская'
//     }
// }
//
// Создай глубокую копию этого объекта с помощью structuredClone() и назови её deepCopy.
//
//     Измени в deepCopy свойство name на 'Петр'.
//
//     Измени в deepCopy свойство city внутри address на 'Санкт-Петербург'.
//
//     Выведи в консоль user.name и user.address.city.

const user = {
    name: 'Иван',
    age: 25,
    address: {
        city: 'Москва',
        street: 'Тверская'
    }
}

const deepCopy = structuredClone(user)
deepCopy.name = 'Петр'
deepCopy.address.city = 'Санкт-Петербург'
console.log(user.name, user.address.city)