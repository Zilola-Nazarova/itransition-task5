ПРИЛОЖЕНИЕ ОБЯЗАНО ПОЗВОЛЯТЬ РАБОТАТЬ СРАЗУ, БЕЗ РЕГИСТРАЦИИ И/ИЛИ АУТЕНТИФИКАЦИИ.

Требование со звездочкой: добавить кнопку Export to CSV, по нажатию на которую сервер должен сгенерировать и отдать CSV-файл со всеми данными, которые сейчас видит пользователь — сколько отскроллил, столько и получил). Требование: использовать готовый форматер для CSV, ни в коем случае не клеить строчки руками (например, адрес может содержать разделитель CSV).

Как сдавать задание?

Прислать письмо на p.lebedev@itransition.com, которое содержит:
0) Фамилию и имя
1) Ссылку на задеплоенное приложение.
2) Ссылку на код.
3) Видео с записью: генерации данных в разных регионах, демонстрацию бесконечного скроллинга с пятком-десятком подзагрузок, демонстрацию увеличения числа ошибок от 0 до 0.5, потом до 5, потом до 20, потом до 1000 (данные должны стать совершенно неразборчивы), изменение сида с 0 на случайный (кнопкой), потом демонстрацию возвращения на сид 0.

Deadline: 04.05.2024 (как и для остальных задач)

ВЫ МОЖЕТЕ (И ДОЛЖНЫ ИСПОЛЬЗОВАТЬ) СТОРОННИЕ БИБЛИОТЕКИ ДЛЯ ГЕНЕРАЦИИ ДАННЫХ (см. какие-нибудь порты Faker).

I've got questions about "1.5 errors” implementation in the TASK #5.

I'm not aware of libraries doing exactly this; it doesn't mean they don't exist, of course, and I would be grateful if you share something, but we probably need to implement at least something for themselves.

The first step. Find the library that allows you to use seeded random values in JavaScript (other languages already have it out-of-the-box). For example, you may use seedrandom.

The second step. Find a library that can select a random element from the array (yeah, don't invent something if you can avoid it). For example, you may use underscore.js or FluentRandomPicker.

The third step. Implement a function that performs a given operation a non-integer value times (e.g., 2.7 means calling the function 2 times and the 3rd time with the 0.7 probability).

I'll give you an example in JavaScript, but you can do something similar in other languages. I want to keep the example as simple as possible, but replace the Math.random with the seeded API, of course.
const times = (n, fn) => {
    if (n < 0) throw new Error("The first argument cannot be negative.");
    return (arg) => {
        for(let i = Math.floor(n); i--;) arg = fn(arg);
        return Math.random() < n % 1 ? fn(arg) : arg;
    };
};

It's pretty simple. This method allows us to generate the n-th power of a function using composition even if n is not an integer value, mwa-ha-ha-ha!

As Polonius said to Hamlet, "Though this be madness, yet there is method in it." 

For example, you may define the function that adds either 1000 or 1001 to the number with equal probability (it's stupidly slow, but, of course, it's just an example.):
const scheherazade = times(1000.5, x => x + 1);

If we call it 5 times—well, I almost wrote a loop, but that's for weaklings now!—we would get five random results (0 or 1).
times(5, () => console.log(scheherazade(-1000)))();

Or you can replace 5 with 5.25 and get either 5 or 6 lines printed (5 numbers will be printed three times as often as 6 numbers).

There is some kind of system to this madness, don't you think?

Now you can create an array of three functions (each performing one kind of string "error" modification) and write a function that randomly selects and invokes an "error" function multiple times (0, '0.5', or 200).

I hope, you get the idea. Write tiny methods and reuse them to get the results. 
А sketch for the TASK #5.