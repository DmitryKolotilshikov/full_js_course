// recursion

const log = console.log;

// 💎----------Возведение в натарульную степень----------💎

const pow1 = (x, n) => {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

log(pow1(2, 3));

// возведение в степень с рекурсией
const pow = (x, n) => {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

log(pow(2, 3));

// 💎-------------Сумма чисел--------------💎

const sumTo1 = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

log(sumTo1(5));


// подсчет суммы рекурсивно
const sumTo = (n) => {
    if (n == 1) return 1;

    return n + sumTo(n - 1);
}

log(sumTo(5)); // 1 + 2 + 3 + 4 + 5
log(sumTo(6)); // 1 + 2 + 3 + 4 + 5 + 6
log(sumTo(100));

// подсчет суммы математично, самый быстрый способ 😊
const sumTo3 = (n) => {
    return n * (n + 1) / 2;
}
log(sumTo3(100));

// 💎-------------Факториал--------------💎

/* 
Факториал — это произведение всех натуральных чисел от 1
до данного числа. Например, факториал числа 5 будет равен
1 × 2 × 3 × 4 × 5 = 120 
*/

const factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

log(factorial(5)) // 120
