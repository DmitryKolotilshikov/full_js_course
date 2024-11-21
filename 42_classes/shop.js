/* 
🧲 Задача: Магазин и корзина товаров 🧲

Создайте класс Product, который будет представлять товар в магазине, и класс Cart, 
который будет управлять корзиной покупок. Реализуйте следующие функции:

Класс Product должен иметь свойства:

1) name (название товара),
2) price (цена товара).

Класс Cart должен предоставлять методы:

1) addProduct(product) — добавить товар в корзину.
2) removeProduct(productName) — удалить товар из корзины по названию.
3) getTotalPrice() — вернуть общую стоимость всех товаров в корзине.
4) listProducts() — вывести список товаров в корзине.
*/

// --------------------------- Решение --------------------------------

const log = console.log;

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.products = []; // Список товаров в корзине
    }

    // Метод добавления товара
    addProduct(product) {
        this.products.push(product);
        log(`${product.name} добавлен в корзину.`);
    }

    // Метод удаления товара по названию
    removeProduct(productName) {
        const newProducts = this.products.filter((product) => product.name !== productName);

        if (newProducts.length !== this.products.length) {
            this.products = newProducts;

            log(`${productName} удалён из корзины! ⬅️⬅️⬅️`);
            return;
        }

        log(`Товар с названием "${productName}" не найден в корзине!`);
    }

    // Метод подсчёта общей стоимости
    getTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    // Метод для вывода списка товаров
    listProducts() {
        if (this.products.length === 0) {
            log('😬 Корзина пуста! 😬');
            return;
        }
        log('--- Товары в корзине: ---');

        this.products.forEach((product, index) => {
            log(`${index + 1}. ${product.name} — ${product.price} руб.`);
        });
    }
}

const bread = new Product('Хлеб', 30);
const apple = new Product('Яблоко', 50);
const milk = new Product('Молоко', 60);

const cart = new Cart();

cart.addProduct(bread);
cart.addProduct(bread);
cart.addProduct(apple);
cart.addProduct(milk);

cart.listProducts();

log(`Общая стоимость: ${cart.getTotalPrice()} руб.`);

cart.removeProduct('Хлеб');
cart.removeProduct('Хлеб1111');

cart.listProducts();

log(`Общая стоимость после удаления: ${cart.getTotalPrice()} руб.`);
