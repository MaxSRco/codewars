// Дан объект:
//
// const user = {
//     name: 'Иван',
//     age: 25,
//     address: {
//         city: 'Москва',
//         street: 'Тверская'
//     }
// };
// Создай поверхностную копию этого объекта с помощью оператора Spread (...) и назови её userCopy.
//
//     Измени в копии (userCopy) свойство name на 'Петр'.
//
//     Измени в копии (userCopy) свойство city внутри вложенного объекта address на 'Санкт-Петербург'.
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

const userCopy = {...user}
userCopy.name = 'Петр'
userCopy.address.city = 'Санкт-Петербург'

console.log(user.name, user.address.city)