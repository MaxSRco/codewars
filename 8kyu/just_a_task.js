/*
Напиши функцию createProduct, которая принимает два параметра: name (название товара) и price (цена).
Функция должна:

    -Создать и вернуть объект с этими свойствами.

    -Добавить в этот объект метод showInfo, который выводит в консоль строку: "Товар: [name], Цена: [price]". Внутри метода используй this, чтобы обратиться к свойствам объекта.

    Затем вызови функцию createProduct, передав ей название "Книга" и цену 500. Сохрани результат в переменную и вызови у нее метод showInfo().*/

function createProduct (name, price) {
    return {
        name,
        price,

        showInfo () {
            console.log(`Товар: ${this.name}, цена: ${this.price}`)
        }
    }
}

const myProduct = createProduct('Книга', 500)
myProduct.showInfo()