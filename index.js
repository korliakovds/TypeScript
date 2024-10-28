// Функція для додавання двох чисел
function add(a, b) {
    return a + b;
}

// Функція для множення двох чисел
function multiply(a, b) {
    return a * b;
}

// Функція для перевірки, чи є число парним
function isEven(num) {
    return num % 2 === 0;
}

// Функція для створення привітання
function greet(name) {
    return `Hello, ${name}!`;
}

// Функція для повернення масиву чисел від 1 до n
function range(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

// Квадрат кожного числа у масиві
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

// Фільтрування парних чисел у масиві
function filterEvenNumbers(arr) {
    return arr.filter(isEven);
}

// Функція для зворотного порядку рядка
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Функція для перевірки паліндрому
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

// Функція для підсумовування елементів масиву
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Функція для множення всіх елементів масиву
function multiplyArray(arr) {
    return arr.reduce((product, num) => product * num, 1);
}

// Функція для знаходження максимального числа у масиві
function maxInArray(arr) {
    return Math.max(...arr);
}

// Функція для знаходження мінімального числа у масиві
function minInArray(arr) {
    return Math.min(...arr);
}

// Генерація випадкового числа
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Клас для управління списком завдань
class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(task) {
        this.todos.push({ task, completed: false });
    }

    completeTask(index) {
        if (this.todos[index]) {
            this.todos[index].completed = true;
        }
    }

    deleteTask(index) {
        this.todos.splice(index, 1);
    }

    listTodos() {
        return this.todos.map((todo, index) => 
            `${index + 1}. ${todo.task} - ${todo.completed ? "Completed" : "Pending"}`).join('\n');
    }
}

// Приклади використання класу TodoList
const myTodoList = new TodoList();
myTodoList.addTodo("Learn JavaScript");
myTodoList.addTodo("Learn TypeScript");
myTodoList.completeTask(0);

// Об'єкти та робота з ними
const person = {
    name: "Alice",
    age: 25,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

// Доступ до властивостей об'єкта
console.log(person.greet());

// Функція для конвертації градусів Цельсія у Фаренгейти
function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

// Функція для конвертації Фаренгейтів у Цельсій
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// Функція для знаходження факторіалу числа
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Фібоначчі числа
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Прості числа у діапазоні
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function primesInRange(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

// Функція для пошуку елемента у масиві
function findElement(arr, target) {
    return arr.includes(target);
}

// Сортування масиву чисел
function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Функція для видалення дублікатів з масиву
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Знаходження середнього значення чисел у масиві
function average(arr) {
    return sumArray(arr) / arr.length;
}

// Простий таймер
function countdown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
        console.log(counter);
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            console.log("Time's up!");
        }
    }, 1000);
}

// Взаємодія з користувачем
function askQuestion(question) {
    const answer = prompt(question);
    return answer ? answer : "No answer provided";
}

// Логіка перевірки пароля
function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password);
}

// Приклад роботи функцій
console.log(greet("Bob"));
console.log(range(10));
console.log(squareNumbers([1, 2, 3, 4]));
console.log(isPalindrome("madam"));
console.log(myTodoList.listTodos());
console.log(celsiusToFahrenheit(30));
console.log(factorial(5));
console.log(fibonacci(6));
console.log(primesInRange(20));
console.log(sortNumbers([3, 1, 4, 1, 5, 9]));
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(average([1, 2, 3, 4, 5]));
