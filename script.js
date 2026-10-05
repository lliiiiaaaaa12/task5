/* =========================================================
   LEARNING APP + AI-АГЕНТ — 12 ЗАДАНИЙ + 20 ТЕСТОВ
   ========================================================= */

// ============ 12 ЗАДАНИЙ ============
const LESSON = {
    topic: "Основы веб-разработки: HTML, CSS, JavaScript",
    goals: ["HTML структура и теги", "CSS стилизация", "JavaScript основы", "DOM"],
    studentsCount: 24,
    tasks: [
        // ===== HTML (5 заданий) =====
        {
            id: 1,
            title: "Задание №1. Базовая структура HTML",
            condition: "Создать базовую структуру HTML-документа с <!DOCTYPE>, <html>, <head>, <title>, <body>.",
            type: "html",
            criteria: [
                { key: "doctype", text: "присутствует <!DOCTYPE html>" },
                { key: "html", text: "присутствует <html> и </html>" },
                { key: "head", text: "присутствует <head> и </head>" },
                { key: "title", text: "присутствует <title> и </title>" },
                { key: "body", text: "присутствует <body> и </body>" }
            ],
            example: `<!DOCTYPE html>
<html>
<head>
    <title>Моя страница</title>
</head>
<body>
    <h1>Привет, мир!</h1>
</body>
</html>`
        },
        {
            id: 2,
            title: "Задание №2. Заголовки и абзацы",
            condition: "Создать страницу с заголовком <h1>, подзаголовком <h2> и двумя абзацами <p>.",
            type: "html",
            criteria: [
                { key: "h1", text: "использован <h1>" },
                { key: "h2", text: "использован <h2>" },
                { key: "p", text: "использовано минимум 2 <p>" },
                { key: "text", text: "в абзацах есть текст" }
            ],
            example: `<h1>Главный заголовок</h1>
<h2>Подзаголовок</h2>
<p>Первый абзац текста.</p>
<p>Второй абзац текста.</p>`
        },
        {
            id: 3,
            title: "Задание №3. Ссылки и изображения",
            condition: "Добавить ссылку <a> с href и изображение <img> с src и alt.",
            type: "html",
            criteria: [
                { key: "a", text: "использован <a> с атрибутом href" },
                { key: "img", text: "использован <img>" },
                { key: "src", text: "у <img> есть атрибут src" },
                { key: "alt", text: "у <img> есть атрибут alt" }
            ],
            example: `<a href="https://example.com">Перейти на сайт</a>
<img src="photo.jpg" alt="Описание фото">`
        },
        {
            id: 4,
            title: "Задание №4. Списки",
            condition: "Создать маркированный <ul> и нумерованный <ol> списки с элементами <li>.",
            type: "html",
            criteria: [
                { key: "ul", text: "использован <ul>" },
                { key: "ol", text: "использован <ol>" },
                { key: "li", text: "использованы <li>" },
                { key: "multiple-li", text: "минимум 3 элемента <li>" }
            ],
            example: `<ul>
    <li>Яблоко</li>
    <li>Банан</li>
    <li>Апельсин</li>
</ul>
<ol>
    <li>Первый</li>
    <li>Второй</li>
    <li>Третий</li>
</ol>`
        },
        {
            id: 5,
            title: "Задание №5. Таблица",
            condition: "Создать таблицу с <table>, <tr>, <th>, <td>. Минимум 2 строки и 2 столбца.",
            type: "html",
            criteria: [
                { key: "table", text: "использован <table>" },
                { key: "tr", text: "использован <tr>" },
                { key: "th", text: "использован <th> (заголовки)" },
                { key: "td", text: "использован <td>" },
                { key: "multiple-rows", text: "минимум 2 строки <tr>" }
            ],
            example: `<table border="1">
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
    </tr>
    <tr>
        <td>Айдос</td>
        <td>16</td>
    </tr>
    <tr>
        <td>Алина</td>
        <td>15</td>
    </tr>
</table>`
        },
        // ===== CSS (4 задания) =====
        {
            id: 6,
            title: "Задание №6. Цвета и фон",
            condition: "Применить цвет текста (color), цвет фона (background-color) к элементам.",
            type: "css",
            criteria: [
                { key: "color", text: "использовано свойство color" },
                { key: "background", text: "использовано свойство background-color" },
                { key: "selector", text: "использован селектор" },
                { key: "value", text: "указаны значения (имя цвета, #hex или rgb)" }
            ],
            example: `body {
    background-color: #f0f0f0;
    color: #333333;
}

h1 {
    color: blue;
    background-color: yellow;
}`
        },
        {
            id: 7,
            title: "Задание №7. Шрифты и размеры",
            condition: "Использовать font-size, font-family, font-weight, text-align.",
            type: "css",
            criteria: [
                { key: "font-size", text: "использовано font-size" },
                { key: "font-family", text: "использовано font-family" },
                { key: "font-weight", text: "использовано font-weight" },
                { key: "text-align", text: "использовано text-align" }
            ],
            example: `h1 {
    font-size: 32px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    text-align: center;
}

p {
    font-size: 16px;
    font-family: Georgia, serif;
}`
        },
        {
            id: 8,
            title: "Задание №8. Отступы и границы",
            condition: "Применить margin, padding, border, border-radius.",
            type: "css",
            criteria: [
                { key: "margin", text: "использовано margin" },
                { key: "padding", text: "использовано padding" },
                { key: "border", text: "использовано border" },
                { key: "border-radius", text: "использовано border-radius" }
            ],
            example: `.card {
    margin: 20px;
    padding: 15px;
    border: 2px solid #333;
    border-radius: 10px;
}`
        },
        {
            id: 9,
            title: "Задание №9. Flexbox",
            condition: "Создать flex-контейнер с display: flex и свойствами justify-content, align-items.",
            type: "css",
            criteria: [
                { key: "display-flex", text: "использовано display: flex" },
                { key: "justify-content", text: "использовано justify-content" },
                { key: "align-items", text: "использовано align-items" },
                { key: "gap-or-margin", text: "есть gap или margin между элементами" }
            ],
            example: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.item {
    margin: 10px;
}`
        },
        // ===== JavaScript (3 задания) =====
        {
            id: 10,
            title: "Задание №10. Переменные и вывод",
            condition: "Объявить переменные (let/const) и вывести их в консоль через console.log.",
            type: "js",
            criteria: [
                { key: "variable", text: "объявлена переменная (let или const)" },
                { key: "multiple-vars", text: "минимум 2 переменные" },
                { key: "console.log", text: "использован console.log" },
                { key: "string-or-number", text: "переменные содержат значения" }
            ],
            example: `const name = "Айдос";
let age = 16;
const city = "Алматы";

console.log("Имя: " + name);
console.log("Возраст: " + age);
console.log("Город: " + city);`
        },
        {
            id: 11,
            title: "Задание №11. Функция и условие",
            condition: "Создать функцию с параметром и условие if/else внутри.",
            type: "js",
            criteria: [
                { key: "function", text: "объявлена функция" },
                { key: "parameter", text: "у функции есть параметр" },
                { key: "if", text: "использовано условие if" },
                { key: "else", text: "использовано else" },
                { key: "call", text: "функция вызывается" }
            ],
            example: `function checkAge(age) {
    if (age >= 18) {
        console.log("Совершеннолетний");
    } else {
        console.log("Несовершеннолетний");
    }
}

checkAge(20);
checkAge(15);`
        },
        {
            id: 12,
            title: "Задание №12. Цикл и DOM",
            condition: "Создать цикл (for/while) и изменить элемент DOM через document.getElementById или querySelector.",
            type: "js",
            criteria: [
                { key: "loop", text: "использован цикл for или while" },
                { key: "document", text: "использован document" },
                { key: "getElementById-or-querySelector", text: "использован getElementById или querySelector" },
                { key: "modification", text: "изменяется содержимое (.innerHTML, .textContent или .style)" }
            ],
            example: `// Цикл
for (let i = 1; i <= 5; i++) {
    console.log("Число: " + i);
}

// DOM
const title = document.getElementById("title");
title.textContent = "Новый заголовок";
title.style.color = "red";`
        }
    ]
};

// ============ 20 ТЕСТОВ ============
const TESTS = [
    // HTML (7)
    { id: 1, category: "HTML", question: "Какой тег определяет заголовок высшего уровня?", options: ["<header>", "<h1>", "<head>", "<title>"], correct: 1, explanation: "Тег <h1> — заголовок высшего уровня." },
    { id: 2, category: "HTML", question: "Какой атрибут тега <a> указывает адрес ссылки?", options: ["src", "link", "href", "url"], correct: 2, explanation: "href = Hypertext Reference." },
    { id: 3, category: "HTML", question: "Какой тег используется для маркированного списка?", options: ["<ol>", "<ul>", "<li>", "<list>"], correct: 1, explanation: "<ul> — unordered list (маркированный)." },
    { id: 4, category: "HTML", question: "Какой тег создаёт нумерованный список?", options: ["<ul>", "<nl>", "<ol>", "<list>"], correct: 2, explanation: "<ol> — ordered list (нумерованный)." },
    { id: 5, category: "HTML", question: "Какой тег используется для таблицы?", options: ["<tab>", "<table>", "<grid>", "<tbl>"], correct: 1, explanation: "<table> создаёт таблицу." },
    { id: 6, category: "HTML", question: "Какой тег определяет ячейку таблицы?", options: ["<tr>", "<th>", "<td>", "<tc>"], correct: 2, explanation: "<td> — table data (ячейка с данными)." },
    { id: 7, category: "HTML", question: "Какой атрибут тега <img> обязателен для доступности?", options: ["src", "alt", "title", "name"], correct: 1, explanation: "alt описывает изображение для скринридеров." },

    // CSS (7)
    { id: 8, category: "CSS", question: "Какое CSS-свойство изменяет цвет текста?", options: ["text-color", "font-color", "color", "text-style"], correct: 2, explanation: "Свойство 'color' отвечает за цвет текста." },
    { id: 9, category: "CSS", question: "Как выбрать элемент по классу в CSS?", options: ["#class", ".class", "*class", "&class"], correct: 1, explanation: "Класс выбирается через точку (.)." },
    { id: 10, category: "CSS", question: "Какое свойство задаёт внутренний отступ?", options: ["margin", "padding", "border", "spacing"], correct: 1, explanation: "padding — внутренний отступ, margin — внешний." },
    { id: 11, category: "CSS", question: "Какое свойство делает элемент flex-контейнером?", options: ["flex: 1", "display: flex", "position: flex", "layout: flex"], correct: 1, explanation: "display: flex создаёт flex-контейнер." },
    { id: 12, category: "CSS", question: "Какое свойство выравнивает элементы по главной оси во flex?", options: ["align-items", "justify-content", "flex-direction", "align-content"], correct: 1, explanation: "justify-content — главная ось (горизонталь по умолчанию)." },
    { id: 13, category: "CSS", question: "Как скруглить углы элемента?", options: ["corner-radius", "border-round", "border-radius", "edge-radius"], correct: 2, explanation: "border-radius скругляет углы." },
    { id: 14, category: "CSS", question: "Какой тег подключает внешний CSS-файл?", options: ["<style>", "<css>", "<link>", "<script>"], correct: 2, explanation: "<link rel='stylesheet' href='...'>" },

    // JavaScript (6)
    { id: 15, category: "JavaScript", question: "Как объявить функцию в JavaScript?", options: ["function = myFunc()", "def myFunc()", "function myFunc()", "func myFunc()"], correct: 2, explanation: "Ключевое слово 'function'." },
    { id: 16, category: "JavaScript", question: "Как вывести сообщение в консоль?", options: ["print('text')", "console.log('text')", "echo 'text'", "alert('text')"], correct: 1, explanation: "console.log() выводит в консоль разработчика." },
    { id: 17, category: "JavaScript", question: "Какое ключевое слово создаёт неизменяемую переменную?", options: ["var", "let", "const", "static"], correct: 2, explanation: "const — константа, значение нельзя переприсвоить." },
    { id: 18, category: "JavaScript", question: "Что делает метод document.getElementById()?", options: ["Создаёт элемент", "Находит элемент по ID", "Удаляет элемент", "Изменяет ID"], correct: 1, explanation: "Возвращает элемент с указанным ID." },
    { id: 19, category: "JavaScript", question: "Какой оператор используется для строгого сравнения?", options: ["=", "==", "===", "!="], correct: 2, explanation: "=== сравнивает значение и тип." },
    { id: 20, category: "JavaScript", question: "Как написать условие в JavaScript?", options: ["when (x > 5)", "if (x > 5)", "case (x > 5)", "check (x > 5)"], correct: 1, explanation: "if (условие) { ... }" }
];

// ============ AI-ПОДСКАЗКИ ============
const AI_HINTS = [
    { title: "💡 HTML: структура документа", text: "Каждый HTML-документ начинается с <!DOCTYPE html>. Внутри <html> размещаются <head> (метаданные) и <body> (видимое содержимое)." },
    { title: "💡 HTML: списки", text: "Маркированный список: <ul> с элементами <li>. Нумерованный: <ol> с <li>. Внутри <li> могут быть вложенные списки." },
    { title: "💡 HTML: таблицы", text: "Таблица: <table> → <tr> (строка) → <th> (заголовок) или <td> (ячейка). Атрибут border='1' добавляет границы." },
    { title: "💡 CSS: селекторы", text: "По тегу: div { }. По классу: .class { }. По ID: #id { }. Комбинированный: div.class { }." },
    { title: "💡 CSS: Flexbox", text: "display: flex на родителе. justify-content — по главной оси. align-items — по поперечной. gap — промежуток между элементами." },
    { title: "💡 CSS: блочная модель", text: "margin — внешний отступ. border — граница. padding — внутренний отступ. content — содержимое." },
    { title: "💡 JS: переменные", text: "const — для неизменяемых значений. let — для изменяемых. var — устаревший способ. Рекомендуется const по умолчанию." },
    { title: "💡 JS: функции", text: "Обычная: function имя(параметры) { ... }. Стрелочная: const имя = (параметры) => { ... }. Функция вызывается: имя(аргументы)." },
    { title: "💡 JS: условия", text: "if (условие) { ... } else { ... }. Операторы: === (строго равно), !== (не равно), >, <, >=, <=." },
    { title: "💡 JS: циклы", text: "for (let i = 0; i < 10; i++) { ... } — цикл с счётчиком. while (условие) { ... } — цикл с условием." },
    { title: "💡 JS: DOM", text: "document.getElementById('id') — найти по ID. element.textContent = '...' — изменить текст. element.style.color = 'red' — изменить стиль." }
];

// ============ AI CHAT — БАЗА ЗНАНИЙ ============
const AI_CHAT_KB = [
    { keywords: ["структура", "html", "документ", "doctype"], answer: "Базовая структура HTML:\n\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Заголовок</title>\n</head>\n<body>\n    <!-- Содержимое -->\n</body>\n</html>\n\n💡 Попробуй написать её сам!" },
    { keywords: ["href", "ссылка", "link", "ссылки"], answer: "Атрибут href у тега <a> указывает адрес ссылки.\n\nПример: <a href=\"https://example.com\">Перейти</a>\n\n💡 href = Hypertext Reference." },
    { keywords: ["src", "изображение", "img", "картинка"], answer: "Атрибут src у <img> указывает путь к изображению.\n\nПример: <img src=\"photo.jpg\" alt=\"Описание\">\n\n💡 Атрибут alt обязателен для доступности." },
    { keywords: ["список", "ul", "ol", "li"], answer: "Маркированный список: <ul><li>...</li></ul>\nНумерованный: <ol><li>...</li></ol>\n\n💡 Элементы списка всегда оборачиваются в <li>." },
    { keywords: ["таблиц", "table", "tr", "td"], answer: "Таблица:\n<table>\n  <tr>\n    <th>Заголовок</th>\n  </tr>\n  <tr>\n    <td>Данные</td>\n  </tr>\n</table>\n\n💡 <th> — заголовок, <td> — ячейка." },
    { keywords: ["css", "подключить", "стили"], answer: "CSS можно подключить:\n1. Внешний файл: <link rel=\"stylesheet\" href=\"style.css\">\n2. Внутренний: <style>...</style> в <head>\n3. Инлайн: style=\"...\" у элемента\n\n💡 Рекомендуется внешний файл." },
    { keywords: ["flex", "flexbox"], answer: "Flexbox:\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n💡 justify-content — главная ось, align-items — поперечная." },
    { keywords: ["функци", "function"], answer: "Функция в JS:\n\nfunction имя(параметры) {\n    // код\n}\n\nИли стрелочная:\nconst имя = (параметры) => { /* код */ };\n\n💡 Вызывается: имя(аргументы);" },
    { keywords: ["переменн", "let", "const", "var"], answer: "Переменные в JS:\n• let — изменяемая\n• const — неизменяемая (рекомендуется)\n• var — устаревшая\n\nПример: const name = 'Айдос';" },
    { keywords: ["условие", "if", "else"], answer: "Условие в JS:\n\nif (age >= 18) {\n    console.log('Взрослый');\n} else {\n    console.log('Несовершеннолетний');\n}\n\n💡 Операторы: ===, !==, >, <, >=, <=" },
    { keywords: ["цикл", "for", "while", "loop"], answer: "Цикл for:\n\nfor (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n\nЦикл while:\nlet i = 0;\nwhile (i < 5) {\n    console.log(i);\n    i++;\n}" },
    { keywords: ["dom", "элемент", "document"], answer: "Работа с DOM:\n\n// Найти элемент\nconst el = document.getElementById('myId');\n\n// Изменить текст\nel.textContent = 'Новый текст';\n\n// Изменить стиль\nel.style.color = 'red';" },
    { keywords: ["console", "лог", "вывод"], answer: "Вывод в консоль:\n\nconsole.log('Привет, мир!');\n\n💡 Открывай консоль через F12." },
    { keywords: ["помощь", "не понимаю", "сложно"], answer: "Не переживай! 🤝 Расскажи, на каком задании ты сейчас и что вызывает затруднение? Я дам подсказку, но не готовый ответ — чтобы ты научился сам!" },
    { keywords: ["привет", "здравствуй", "hello"], answer: "Привет! 👋 Я твой AI-помощник. Могу помочь с HTML, CSS, JavaScript, проверить код или дать подсказку. С чего начнём?" }
];

// ============ ГЕНЕРАЦИЯ УЧЕНИКОВ ============
const FIRST_NAMES = ["Айдос", "Данияр", "Алина", "Арман", "Нурлан", "Айгерим", "Ерлан", "Мадина", "Тимур", "Сауле", "Бауыржан", "Динара", "Кайрат", "Жанна", "Асет", "Лаура", "Марат", "Асель", "Руслан", "Камила", "Ержан", "Аяна", "Бекзат", "Томирис"];
const LAST_NAMES = ["Серік", "Ахметов", "Ким", "Иванов", "Нурланов", "Жумагулов", "Оспанов", "Турсунов", "Касымов", "Бекенов", "Сатпаев", "Абилов", "Жолдасов", "Карибов", "Мухамбетов", "Султанов", "Абдраимов", "Тлеубаев", "Кусаинов", "Жанибеков", "Байтурсынов", "Алтынбекова", "Сейдулла", "Ермекова"];

function generateStudents() {
    const saved = localStorage.getItem("ai_lesson_students_v3");
    if (saved) return JSON.parse(saved);

    const students = FIRST_NAMES.map((name, i) => {
        const pc = String(i + 1).padStart(2, "0");
        const results = {};
        const hintsUsed = {};

        LESSON.tasks.forEach(task => {
            const rand = Math.random();
            const criteriaResults = {};
            let failedCriteria = [];

            task.criteria.forEach(c => {
                let pass = true;
                if (rand > 0.7 && Math.random() > 0.5) { pass = false; failedCriteria.push(c); }
                else if (rand > 0.4 && Math.random() > 0.8) { pass = false; failedCriteria.push(c); }
                criteriaResults[c.key] = pass;
            });

            if (name === "Данияр") { criteriaResults["a"] = false; failedCriteria = task.criteria.filter(c => c.key === "a"); }
            if (name === "Алина" && task.id === 3) { Object.keys(criteriaResults).forEach(k => criteriaResults[k] = false); failedCriteria = [...task.criteria]; }
            if (name === "Арман") { criteriaResults["a"] = false; criteriaResults["img"] = false; failedCriteria = task.criteria.filter(c => ["a", "img"].includes(c.key)); }

            const passedCount = Object.values(criteriaResults).filter(v => v).length;
            const total = task.criteria.length;
            let status = "green";
            if (passedCount === 0) status = "red";
            else if (passedCount < total) status = "yellow";

            results[task.id] = {
                criteria: criteriaResults,
                passed: passedCount,
                total: total,
                failedCriteria: failedCriteria,
                status: status,
                hintsCount: failedCriteria.length > 0 ? Math.min(failedCriteria.length, 2) : 0,
                teacherConfirmed: false,
                teacherScore: null
            };
            hintsUsed[task.id] = results[task.id].hintsCount;
        });

        const selfScore = Math.floor(Math.random() * 3) + 3;
        const actualScore = Math.round(LESSON.tasks.reduce((sum, t) => sum + (results[t.id].passed / results[t.id].total), 0) / LESSON.tasks.length * 5);
        const peerScore = Math.floor(Math.random() * 3) + 3;

        return {
            id: i + 1, pc, name: `${name} ${LAST_NAMES[i]}`, firstName: name,
            results, hintsUsed, selfScore, peerScore, actualScore, status: "green"
        };
    });

    students.forEach(s => {
        const statuses = Object.values(s.results).map(r => r.status);
        if (statuses.includes("red")) s.status = "red";
        else if (statuses.includes("yellow")) s.status = "yellow";
        else s.status = "green";
    });

    localStorage.setItem("ai_lesson_students_v3", JSON.stringify(students));
    return students;
}

let students = generateStudents();
let currentTaskId = 1;
let chatHistory = [];
let userProgress = JSON.parse(localStorage.getItem("user_progress") || "{}");

// ============ НАВИГАЦИЯ ============
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.section).classList.add("active");
    });
});

document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        if (btn.dataset.mode === "teacher") document.querySelector('[data-section="dashboard"]').click();
        else document.querySelector('[data-section="workspace"]').click();
    });
});

// ============ WORKSPACE ============
const taskSelect = document.getElementById("taskSelect");
taskSelect.innerHTML = LESSON.tasks.map(t => `<option value="${t.id}">${t.title}</option>`).join("");
taskSelect.onchange = () => {
    currentTaskId = +taskSelect.value;
    renderTaskDescription();
    document.getElementById("aiResult").classList.add("hidden");
};

function renderTaskDescription() {
    const task = LESSON.tasks.find(t => t.id === currentTaskId);
    document.getElementById("taskDescription").innerHTML = `
        <h3>${task.title} <span class="task-type-badge ${task.type}">${task.type.toUpperCase()}</span></h3>
        <div class="condition">${task.condition}</div>
        <div class="criteria-mini">
            ${task.criteria.map(c => `<span class="criterion-tag">✓ ${c.text}</span>`).join("")}
        </div>
    `;
}

// Вкладки редактора
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".editor").forEach(e => e.classList.add("hidden"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab + "Editor").classList.remove("hidden");
    });
});

// Предпросмотр
document.getElementById("btnRunPreview").onclick = () => {
    const html = document.getElementById("htmlEditor").value;
    const css = document.getElementById("cssEditor").value;
    const js = document.getElementById("jsEditor").value;
    const fullHtml = `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>const ol=console.log;console.log=function(...a){parent.postMessage({type:'console',data:a.join(' ')},'*');ol.apply(console,a);};window.onerror=m=>parent.postMessage({type:'console-error',data:m},'*');try{${js}}catch(e){console.error(e.message);}<\/script></body></html>`;
    document.getElementById("previewFrame").srcdoc = fullHtml;
    document.getElementById("previewStatus").textContent = "Обновлено";
};

document.getElementById("btnClearCode").onclick = () => {
    document.getElementById("htmlEditor").value = "";
    document.getElementById("cssEditor").value = "";
    document.getElementById("jsEditor").value = "";
    document.getElementById("previewFrame").srcdoc = "";
    document.getElementById("consoleOutput").innerHTML = "";
    document.getElementById("aiResult").classList.add("hidden");
};

document.getElementById("btnLoadExample").onclick = () => {
    const task = LESSON.tasks.find(t => t.id === currentTaskId);
    if (task.type === "html") document.getElementById("htmlEditor").value = task.example;
    else if (task.type === "css") document.getElementById("cssEditor").value = task.example;
    else if (task.type === "js") document.getElementById("jsEditor").value = task.example;
    showNotification("📥 Пример загружен");
};

window.addEventListener("message", (e) => {
    if (e.data && e.data.type) {
        const output = document.getElementById("consoleOutput");
        const line = document.createElement("div");
        line.className = "console-line" + (e.data.type === "console-error" ? " error" : "");
        line.textContent = (e.data.type === "console-error" ? "❌ " : "› ") + e.data.data;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }
});

// ============ AI-ПРОВЕРКА КОДА ============
function checkHtml(code) {
    const task = LESSON.tasks.find(t => t.id === currentTaskId);
    const results = {};
    const failedCriteria = [];
    task.criteria.forEach(c => {
        let pass = false;
        switch (c.key) {
            case "doctype": pass = /<!doctype\s+html>/i.test(code); break;
            case "html": pass = /<html[\s>]/i.test(code) && /<\/html>/i.test(code); break;
            case "head": pass = /<head[\s>]/i.test(code) && /<\/head>/i.test(code); break;
            case "body": pass = /<body[\s>]/i.test(code) && /<\/body>/i.test(code); break;
            case "title": pass = /<title[\s>]/i.test(code) && /<\/title>/i.test(code); break;
            case "h1": pass = /<h1[\s>]/i.test(code); break;
            case "h2": pass = /<h2[\s>]/i.test(code); break;
            case "p": pass = (code.match(/<p[\s>]/gi) || []).length >= 2; break;
            case "text": pass = /<p[^>]*>[^<]+<\/p>/i.test(code); break;
            case "a": pass = /<a[^>]+href\s*=/i.test(code); break;
            case "img": pass = /<img[\s>]/i.test(code); break;
            case "src": pass = /<img[^>]+src\s*=/i.test(code); break;
            case "alt": pass = /<img[^>]+alt\s*=/i.test(code); break;
            case "ul": pass = /<ul[\s>]/i.test(code); break;
            case "ol": pass = /<ol[\s>]/i.test(code); break;
            case "li": pass = /<li[\s>]/i.test(code); break;
            case "multiple-li": pass = (code.match(/<li[\s>]/gi) || []).length >= 3; break;
            case "table": pass = /<table[\s>]/i.test(code); break;
            case "tr": pass = /<tr[\s>]/i.test(code); break;
            case "th": pass = /<th[\s>]/i.test(code); break;
            case "td": pass = /<td[\s>]/i.test(code); break;
            case "multiple-rows": pass = (code.match(/<tr[\s>]/gi) || []).length >= 2; break;
        }
        results[c.key] = pass;
        if (!pass) failedCriteria.push(c);
    });
    return { results, failedCriteria, task };
}

function checkCss(code) {
    const task = LESSON.tasks.find(t => t.id === currentTaskId);
    const results = {};
    const failedCriteria = [];
    task.criteria.forEach(c => {
        let pass = false;
        switch (c.key) {
            case "color": pass = /color\s*:/i.test(code); break;
            case "background": pass = /background-color\s*:/i.test(code); break;
            case "selector": pass = /(\.|#|\b\w+)\s*\{/.test(code); break;
            case "value": pass = /:\s*(#[0-9a-f]{3,6}|rgb|rgba|[a-z]+|\d)/i.test(code); break;
            case "font-size": pass = /font-size\s*:/i.test(code); break;
            case "font-family": pass = /font-family\s*:/i.test(code); break;
            case "font-weight": pass = /font-weight\s*:/i.test(code); break;
            case "text-align": pass = /text-align\s*:/i.test(code); break;
            case "margin": pass = /margin(-\w+)?\s*:/i.test(code); break;
            case "padding": pass = /padding(-\w+)?\s*:/i.test(code); break;
            case "border": pass = /border(-\w+)?\s*:/i.test(code); break;
            case "border-radius": pass = /border-radius\s*:/i.test(code); break;
            case "display-flex": pass = /display\s*:\s*flex/i.test(code); break;
            case "justify-content": pass = /justify-content\s*:/i.test(code); break;
            case "align-items": pass = /align-items\s*:/i.test(code); break;
            case "gap-or-margin": pass = /(gap\s*:|margin\s*:)/i.test(code); break;
        }
        results[c.key] = pass;
        if (!pass) failedCriteria.push(c);
    });
    return { results, failedCriteria, task };
}

function checkJs(code) {
    const task = LESSON.tasks.find(t => t.id === currentTaskId);
    const results = {};
    const failedCriteria = [];
    task.criteria.forEach(c => {
        let pass = false;
        switch (c.key) {
            case "variable": pass = /(let|const)\s+\w+/.test(code); break;
            case "multiple-vars": pass = (code.match(/(let|const)\s+\w+/g) || []).length >= 2; break;
            case "console.log": pass = /console\.log\s*\(/.test(code); break;
            case "string-or-number": pass = /=\s*("[^"]*"|'[^']*'|\d)/.test(code); break;
            case "function": pass = /function\s+\w+|const\s+\w+\s*=\s*\(?[^)]*\)?\s*=>/.test(code); break;
            case "parameter": pass = /function\s+\w+\s*\([^)]+\)|\([^)]+\)\s*=>/.test(code); break;
            case "if": pass = /\bif\s*\(/.test(code); break;
            case "else": pass = /\belse\b/.test(code); break;
            case "call": pass = /\w+\s*\([^)]*\)\s*;?/.test(code); break;
            case "loop": pass = /\b(for|while)\s*\(/.test(code); break;
            case "document": pass = /\bdocument\b/.test(code); break;
            case "getElementById-or-querySelector": pass = /(getElementById|querySelector)/.test(code); break;
            case "modification": pass = /\.(textContent|innerHTML|style)\s*=/.test(code); break;
        }
        results[c.key] = pass;
        if (!pass) failedCriteria.push(c);
    });
    return { results, failedCriteria, task };
}

function runAiCheck() {
    const task = LESSON.tasks.find(t => t.id === currentTaskId);
    let checkResult;
    if (task.type === "html") checkResult = checkHtml(document.getElementById("htmlEditor").value);
    else if (task.type === "css") checkResult = checkCss(document.getElementById("cssEditor").value);
    else if (task.type === "js") checkResult = checkJs(document.getElementById("jsEditor").value);
    displayAiResult(checkResult);
    // Сохраняем прогресс
    userProgress[currentTaskId] = { passed: Object.values(checkResult.results).filter(v => v).length, total: task.criteria.length };
    localStorage.setItem("user_progress", JSON.stringify(userProgress));
}

function displayAiResult({ results, failedCriteria, task }) {
    const resultEl = document.getElementById("aiResult");
    const criteriaEl = document.getElementById("aiCriteria");
    const commentEl = document.getElementById("aiComment");
    const statusEl = document.getElementById("aiStatus");
    const passed = Object.values(results).filter(v => v).length;
    const total = task.criteria.length;
    let status, statusClass;
    if (passed === total) { status = "✓ ВЫПОЛНЕНО ВЕРНО"; statusClass = "green"; }
    else if (passed === 0) { status = "✕ ТРЕБУЕТ ДОРАБОТКИ"; statusClass = "red"; }
    else { status = "⚠ ЧАСТИЧНО ВЕРНО"; statusClass = "yellow"; }
    statusEl.textContent = status;
    statusEl.className = "ai-status " + statusClass;
    criteriaEl.innerHTML = task.criteria.map(c => `<li class="${results[c.key] ? 'pass' : 'fail'}">${results[c.key] ? '✓' : '✕'} ${c.text}</li>`).join("");
    commentEl.textContent = generatePedagogicalComment(task, passed, total, failedCriteria);
    resultEl.classList.remove("hidden");
    resultEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function generatePedagogicalComment(task, passed, total, failedCriteria) {
    if (passed === total) return `Отлично! Все ${total} критериев выполнены. Задание принято.`;
    const hints = {
        "doctype": "Проверь, указана ли директива <!DOCTYPE html> в самом начале.",
        "html": "Проверь, открыт ли тег <html> и закрыт ли он в конце.",
        "head": "Проверь, присутствует ли блок <head>.",
        "body": "Подумай, в каком элементе должно располагаться видимое содержимое страницы.",
        "title": "Где в HTML указывается заголовок вкладки браузера?",
        "h1": "Проверь, использован ли <h1>.",
        "h2": "Проверь, использован ли <h2>.",
        "p": "Нужно минимум 2 абзаца <p>.",
        "text": "В абзацах должен быть текст.",
        "a": "Проверь значение атрибута href у <a>.",
        "img": "Проверь, добавлен ли элемент <img>.",
        "src": "Проверь значение атрибута src у <img>.",
        "alt": "У <img> должен быть атрибут alt.",
        "ul": "Использован ли маркированный список <ul>?",
        "ol": "Использован ли нумерованный список <ol>?",
        "li": "Использованы ли элементы <li>?",
        "multiple-li": "Нужно минимум 3 элемента <li>.",
        "table": "Использована ли <table>?",
        "tr": "Использована ли строка <tr>?",
        "th": "Использован ли заголовок <th>?",
        "td": "Использована ли ячейка <td>?",
        "multiple-rows": "Нужно минимум 2 строки <tr>.",
        "color": "Какое CSS-свойство отвечает за цвет текста?",
        "background": "Как задать цвет фона?",
        "selector": "Проверь, использован ли селектор перед фигурной скобкой.",
        "value": "Указаны ли значения свойств?",
        "font-size": "Как изменить размер шрифта?",
        "font-family": "Как задать шрифт?",
        "font-weight": "Как сделать текст жирным?",
        "text-align": "Как выровнять текст?",
        "margin": "Как задать внешний отступ?",
        "padding": "Как задать внутренний отступ?",
        "border": "Как добавить границу?",
        "border-radius": "Как скруглить углы?",
        "display-flex": "Как сделать элемент flex-контейнером?",
        "justify-content": "Как выровнять элементы по главной оси?",
        "align-items": "Как выровнять по поперечной оси?",
        "gap-or-margin": "Как добавить промежуток между элементами?",
        "variable": "Объявлена ли переменная через let или const?",
        "multiple-vars": "Нужно минимум 2 переменные.",
        "console.log": "Используется ли console.log()?",
        "string-or-number": "Переменные должны содержать значения.",
        "function": "Объявлена ли функция?",
        "parameter": "Есть ли у функции параметр?",
        "if": "Использовано ли условие if?",
        "else": "Использовано ли else?",
        "call": "Вызывается ли функция?",
        "loop": "Использован ли цикл for или while?",
        "document": "Использован ли объект document?",
        "getElementById-or-querySelector": "Использован ли getElementById или querySelector?",
        "modification": "Изменяется ли содержимое (.textContent, .innerHTML или .style)?"
    };
    if (failedCriteria.length === 0) return "Задание выполнено.";
    const firstFail = failedCriteria[0];
    return `${passed} из ${total} критериев выполнено. ${hints[firstFail.key] || "Проверь критерии задания."}`;
}

document.getElementById("btnSubmitCode").onclick = () => {
    runAiCheck();
    showNotification("🤖 AI проверил ваш код");
};

function confirmAiResult() { showNotification("✓ AI-результат подтверждён"); }
function changeAiResult() { const s = prompt("Введите новую оценку:"); if (s !== null) showNotification(`✎ Оценка: ${s}`); }
function rejectAiResult() { showNotification("✕ AI-результат отклонён"); }

// ============ ТЕСТЫ ============
function renderTests() {
    const list = document.getElementById("testsList");
    list.innerHTML = TESTS.map((t, idx) => `
        <div class="test-card" data-test-id="${t.id}">
            <div class="test-question">${idx + 1}. ${t.question} <span class="test-category">${t.category}</span></div>
            <div class="test-options">
                ${t.options.map((opt, i) => `
                    <label class="test-option" data-option="${i}">
                        <input type="radio" name="test-${t.id}" value="${i}">
                        <span>${opt}</span>
                    </label>
                `).join("")}
            </div>
        </div>
    `).join("");
    document.querySelectorAll(".test-option").forEach(opt => {
        opt.addEventListener("click", () => {
            const card = opt.closest(".test-card");
            card.querySelectorAll(".test-option").forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            opt.querySelector("input").checked = true;
        });
    });
}

document.getElementById("btnCheckTest").onclick = () => {
    let correct = 0;
    const byCategory = { HTML: { correct: 0, total: 0 }, CSS: { correct: 0, total: 0 }, JavaScript: { correct: 0, total: 0 } };
    TESTS.forEach(t => {
        byCategory[t.category].total++;
        const card = document.querySelector(`[data-test-id="${t.id}"]`);
        const selected = card.querySelector('input[type="radio"]:checked');
        card.querySelectorAll(".test-option").forEach((opt, i) => {
            opt.classList.remove("correct", "wrong");
            if (i === t.correct) opt.classList.add("correct");
            if (selected && +selected.value === i && i !== t.correct) opt.classList.add("wrong");
        });
        if (selected && +selected.value === t.correct) { correct++; byCategory[t.category].correct++; }
    });
    const percent = Math.round((correct / TESTS.length) * 100);
    let status = "🟢 Отлично!";
    if (percent < 50) status = "🔴 Нужно повторить";
    else if (percent < 80) status = "🟡 Хорошо, но есть ошибки";
    const resultEl = document.getElementById("testResult");
    resultEl.innerHTML = `
        <h3>🤖 AI-анализ теста</h3>
        <p><b>Результат:</b> ${correct} из ${TESTS.length} (${percent}%)</p>
        <p><b>Статус:</b> ${status}</p>
        <div style="margin-top: 14px;">
            <p><b>По темам:</b></p>
            <p>• HTML: ${byCategory.HTML.correct}/${byCategory.HTML.total}</p>
            <p>• CSS: ${byCategory.CSS.correct}/${byCategory.CSS.total}</p>
            <p>• JavaScript: ${byCategory.JavaScript.correct}/${byCategory.JavaScript.total}</p>
        </div>
        <p style="margin-top: 10px; color: var(--text-dim);">
            ${percent < 80 ? "💡 Рекомендация: повторить темы с ошибками. Используй AI-подсказки." : "✨ Отличная работа!"}
        </p>
    `;
    resultEl.classList.remove("hidden");
    userProgress.tests = { correct, total: TESTS.length, percent };
    localStorage.setItem("user_progress", JSON.stringify(userProgress));
    showNotification(`📝 Тест проверен: ${correct}/${TESTS.length}`);
};

document.getElementById("btnResetTest").onclick = () => {
    document.querySelectorAll(".test-option").forEach(o => {
        o.classList.remove("selected", "correct", "wrong");
        o.querySelector("input").checked = false;
    });
    document.getElementById("testResult").classList.add("hidden");
};

// ============ ЗАДАНИЯ ============
function renderTasks() {
    const list = document.getElementById("tasksList");
    list.innerHTML = LESSON.tasks.map(t => `
        <div class="task-full">
            <h3>${t.title} <span class="task-type-badge ${t.type}">${t.type.toUpperCase()}</span></h3>
            <div class="task-condition"><b>Условие:</b> ${t.condition}</div>
            <p style="margin-bottom: 8px; font-weight: 600; font-size: 14px;">Критерии оценивания:</p>
            <ul class="task-criteria">
                ${t.criteria.map((c, i) => `<li>${i + 1}. ${c.text}</li>`).join("")}
            </ul>
            <button class="btn btn-sm btn-primary" style="margin-top: 12px;" onclick="goToTask(${t.id})">💻 Перейти к выполнению</button>
        </div>
    `).join("");
}

function goToTask(id) {
    currentTaskId = id;
    taskSelect.value = id;
    renderTaskDescription();
    document.querySelector('[data-section="workspace"]').click();
}

// ============ ПРОВЕРКА HTML/CSS/JS (отдельные страницы) ============
function checkHtmlCode() {
    const code = document.getElementById("htmlCheckEditor").value;
    const resultEl = document.getElementById("htmlCheckResult");
    if (!code.trim()) { resultEl.innerHTML = `<div class="empty-state">⚠ Введите HTML код</div>`; return; }
    const criteria = [
        { key: "doctype", text: "<!DOCTYPE html>", check: /<!doctype\s+html>/i.test(code) },
        { key: "html", text: "<html> ... </html>", check: /<html[\s>]/i.test(code) && /<\/html>/i.test(code) },
        { key: "head", text: "<head> ... </head>", check: /<head[\s>]/i.test(code) && /<\/head>/i.test(code) },
        { key: "body", text: "<body> ... </body>", check: /<body[\s>]/i.test(code) && /<\/body>/i.test(code) },
        { key: "title", text: "<title> ... </title>", check: /<title[\s>]/i.test(code) && /<\/title>/i.test(code) },
        { key: "h1", text: "Заголовок <h1>", check: /<h1[\s>]/i.test(code) },
        { key: "a", text: "Ссылка <a href>", check: /<a[^>]+href\s*=/i.test(code) },
        { key: "img", text: "Изображение <img>", check: /<img[\s>]/i.test(code) },
        { key: "ul", text: "Маркированный список <ul>", check: /<ul[\s>]/i.test(code) },
        { key: "ol", text: "Нумерованный список <ol>", check: /<ol[\s>]/i.test(code) },
        { key: "table", text: "Таблица <table>", check: /<table[\s>]/i.test(code) }
    ];
    const passed = criteria.filter(c => c.check).length;
    renderCodeCheckResult(resultEl, "HTML", criteria, passed);
}

function checkCssCode() {
    const code = document.getElementById("cssCheckEditor").value;
    const resultEl = document.getElementById("cssCheckResult");
    if (!code.trim()) { resultEl.innerHTML = `<div class="empty-state">⚠ Введите CSS код</div>`; return; }
    const criteria = [
        { key: "selector", text: "Селектор", check: /(\.|#|\b\w+)\s*\{/.test(code) },
        { key: "color", text: "color", check: /color\s*:/i.test(code) },
        { key: "background", text: "background", check: /background(-color)?\s*:/i.test(code) },
        { key: "font-size", text: "font-size", check: /font-size\s*:/i.test(code) },
        { key: "font-family", text: "font-family", check: /font-family\s*:/i.test(code) },
        { key: "margin", text: "margin", check: /margin(-\w+)?\s*:/i.test(code) },
        { key: "padding", text: "padding", check: /padding(-\w+)?\s*:/i.test(code) },
        { key: "border", text: "border", check: /border(-\w+)?\s*:/i.test(code) },
        { key: "border-radius", text: "border-radius", check: /border-radius\s*:/i.test(code) },
        { key: "display-flex", text: "display: flex", check: /display\s*:\s*flex/i.test(code) },
        { key: "justify-content", text: "justify-content", check: /justify-content\s*:/i.test(code) },
        { key: "align-items", text: "align-items", check: /align-items\s*:/i.test(code) }
    ];
    const passed = criteria.filter(c => c.check).length;
    renderCodeCheckResult(resultEl, "CSS", criteria, passed);
}

function checkJsCode() {
    const code = document.getElementById("jsCheckEditor").value;
    const resultEl = document.getElementById("jsCheckResult");
    if (!code.trim()) { resultEl.innerHTML = `<div class="empty-state">⚠ Введите JavaScript код</div>`; return; }
    const criteria = [
        { key: "function", text: "Объявлена функция", check: /function\s+\w+|const\s+\w+\s*=\s*\(?[^)]*\)?\s*=>/.test(code) },
        { key: "variable", text: "Переменная (let/const)", check: /(let|const)\s+\w+/.test(code) },
        { key: "console.log", text: "console.log()", check: /console\.log\s*\(/.test(code) },
        { key: "condition", text: "Условие if/else", check: /\bif\s*\(/.test(code) },
        { key: "loop", text: "Цикл for/while", check: /\b(for|while)\s*\(/.test(code) },
        { key: "document", text: "Работа с DOM (document)", check: /\bdocument\b/.test(code) },
        { key: "getElementById", text: "getElementById/querySelector", check: /(getElementById|querySelector)/.test(code) },
        { key: "modification", text: "Изменение элемента", check: /\.(textContent|innerHTML|style)\s*=/.test(code) },
        { key: "array", text: "Массив", check: /\[.*\]/.test(code) },
        { key: "object", text: "Объект", check: /\{[^}]*:\s*[^}]+\}/.test(code) }
    ];
    const passed = criteria.filter(c => c.check).length;
    renderCodeCheckResult(resultEl, "JavaScript", criteria, passed);
}

function renderCodeCheckResult(el, lang, criteria, passed) {
    const total = criteria.length;
    let status, statusClass;
    if (passed === total) { status = "✓ ОТЛИЧНО"; statusClass = "green"; }
    else if (passed === 0) { status = "✕ ТРЕБУЕТ ДОРАБОТКИ"; statusClass = "red"; }
    else { status = "⚠ ЧАСТИЧНО"; statusClass = "yellow"; }
    el.innerHTML = `
        <h3 style="margin-bottom: 14px;">🤖 AI-анализ ${lang}</h3>
        <div class="ai-status ${statusClass}" style="display: inline-block; margin-bottom: 14px;">${status} (${passed}/${total})</div>
        <ul class="ai-criteria">
            ${criteria.map(c => `<li class="${c.check ? 'pass' : 'fail'}">${c.check ? '✓' : '✕'} ${c.text}</li>`).join("")}
        </ul>
        <div class="ai-comment">
            ${passed === total ? "Все критерии выполнены. Код корректен." :
              passed === 0 ? "Код не содержит необходимых элементов." :
              `Выполнено ${passed} из ${total} критериев.`}
        </div>
    `;
    showNotification(`🤖 ${lang} проверен: ${passed}/${total}`);
}

// ============ AI CHAT ============
function addChatMessage(text, isUser = false) {
    const messages = document.getElementById("chatMessages");
    const msg = document.createElement("div");
    msg.className = "chat-message " + (isUser ? "user" : "ai");
    msg.innerHTML = `<div class="chat-avatar">${isUser ? "👨‍🎓" : "🤖"}</div><div class="chat-bubble">${text.replace(/\n/g, "<br>")}</div>`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function getAiResponse(userMessage) {
    const lower = userMessage.toLowerCase();
    for (const entry of AI_CHAT_KB) {
        if (entry.keywords.some(k => lower.includes(k))) return entry.answer;
    }
    return "Интересный вопрос! 🤔 Давай разберёмся вместе:\n\n1. Вспомни, какую тему мы проходим.\n2. Посмотри условие задания.\n3. Попробуй найти ответ в заметках.\n\nЕсли всё ещё сложно — напиши конкретнее, что вызывает затруднение! 💡";
}

function sendChatMessage() {
    const input = document.getElementById("chatInput");
    const text = input.value.trim();
    if (!text) return;
    addChatMessage(text, true);
    input.value = "";
    setTimeout(() => {
        const response = getAiResponse(text);
        addChatMessage(response);
        chatHistory.push({ user: text, ai: response });
    }, 500);
}

document.getElementById("btnSendChat").onclick = sendChatMessage;
document.getElementById("chatInput").addEventListener("keypress", (e) => { if (e.key === "Enter") sendChatMessage(); });
function askQuestion(text) { document.getElementById("chatInput").value = text; sendChatMessage(); }
function clearChat() {
    document.getElementById("chatMessages").innerHTML = "";
    chatHistory = [];
    addChatMessage("Привет! 👋 Я твой AI-помощник. Задай вопрос по HTML, CSS, JavaScript или попроси подсказку.");
}

// ============ AI-ПОДСКАЗКИ ============
function renderHints() {
    document.getElementById("hintsList").innerHTML = AI_HINTS.map(h => `
        <div class="hint-card">
            <h4>${h.title}</h4>
            <p>${h.text}</p>
        </div>
    `).join("");
}

// ============ ПРОГРЕСС ============
function renderProgress() {
    const view = document.getElementById("progressView");
    const completedTasks = Object.keys(userProgress).filter(k => k !== "tests").length;
    const totalTasks = LESSON.tasks.length;
    const totalCriteria = LESSON.tasks.reduce((s, t) => s + t.criteria.length, 0);
    const passedCriteria = Object.entries(userProgress).filter(([k]) => k !== "tests").reduce((s, [, v]) => s + v.passed, 0);
    const testInfo = userProgress.tests || { correct: 0, total: TESTS.length, percent: 0 };

    view.innerHTML = `
        <div class="progress-grid">
            <div class="progress-item">
                <div class="value">${completedTasks}/${totalTasks}</div>
                <div class="label">Заданий выполнено</div>
                <div class="progress-bar"><div class="progress-bar-fill" style="width: ${(completedTasks/totalTasks)*100}%"></div></div>
            </div>
            <div class="progress-item">
                <div class="value">${passedCriteria}/${totalCriteria}</div>
                <div class="label">Критериев пройдено</div>
                <div class="progress-bar"><div class="progress-bar-fill" style="width: ${(passedCriteria/totalCriteria)*100}%"></div></div>
            </div>
            <div class="progress-item">
                <div class="value">${testInfo.correct}/${testInfo.total}</div>
                <div class="label">Тест (${testInfo.percent}%)</div>
                <div class="progress-bar"><div class="progress-bar-fill" style="width: ${testInfo.percent}%"></div></div>
            </div>
        </div>
        <h3 style="margin-bottom: 14px;">📋 Детализация по заданиям</h3>
        <div class="tasks-progress">
            ${LESSON.tasks.map(t => {
                const p = userProgress[t.id] || { passed: 0, total: t.criteria.length };
                const percent = Math.round((p.passed / p.total) * 100);
                const color = percent === 100 ? "var(--green)" : percent > 0 ? "var(--yellow)" : "var(--text-dim)";
                return `
                    <div class="task-progress-row">
                        <div><b>${t.title}</b> <span class="task-type-badge ${t.type}" style="margin-left: 8px;">${t.type.toUpperCase()}</span></div>
                        <div style="color: ${color}; font-weight: 600;">${p.passed}/${p.total}</div>
                        <div style="width: 100px;">
                            <div class="progress-bar"><div class="progress-bar-fill" style="width: ${percent}%; background: ${color};"></div></div>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

// ============ ДАШБОРД ============
function renderDashboard() {
    const green = students.filter(s => s.status === "green").length;
    const yellow = students.filter(s => s.status === "yellow").length;
    const red = students.filter(s => s.status === "red").length;
    const hints = students.reduce((sum, s) => sum + Object.values(s.hintsUsed).reduce((a, b) => a + b, 0), 0);
    document.getElementById("statGreen").textContent = green;
    document.getElementById("statYellow").textContent = yellow;
    document.getElementById("statRed").textContent = red;
    document.getElementById("statHints").textContent = hints;
    document.getElementById("studentsList").innerHTML = students.map(s => {
        const failed = [];
        Object.values(s.results).forEach(r => r.failedCriteria.forEach(c => failed.push(c.text)));
        const unique = [...new Set(failed)];
        const reason = s.status === "green" ? "Все задания выполнены" : `Затруднения: ${unique.slice(0, 2).join(", ") || "—"}`;
        return `
            <div class="student-row ${s.status}">
                <div class="student-pc">ПК №${s.pc}</div>
                <div><div class="student-name">${s.name}</div><div class="student-reason">${reason}</div></div>
                <div class="student-status status-${s.status}">${s.status === "green" ? "✓ Уверенно" : s.status === "yellow" ? "⚠ Ошибки" : "✕ Внимание"}</div>
                <button class="btn btn-sm btn-ghost" onclick="openStudent(${s.id})">📖</button>
            </div>
        `;
    }).join("");
}

// ============ КАРТА КЛАССА ============
function renderClassroom() {
    document.getElementById("classroomGrid").innerHTML = students.map(s => `
        <div class="pc-card ${s.status}" onclick="showPcDetails(${s.id})">
            <div class="pc-icon">🖥️</div>
            <div>ПК №${s.pc}</div>
            <div style="font-size: 10px; margin-top: 2px;">${s.firstName}</div>
        </div>
    `).join("");
}

function showPcDetails(id) {
    const s = students.find(x => x.id === id);
    document.getElementById("pcDetails").classList.remove("hidden");
    document.getElementById("pcTitle").textContent = `ПК №${s.pc} — ${s.name}`;
    let html = `<p style="margin-bottom: 12px;"><b>Статус:</b> <span class="student-status status-${s.status}">${s.status === "green" ? "🟢 Уверенно" : s.status === "yellow" ? "🟡 Ошибки" : "🔴 Внимание"}</span></p><ul style="list-style: none; padding: 0;">`;
    Object.entries(s.results).forEach(([taskId, r]) => {
        const task = LESSON.tasks.find(t => t.id == taskId);
        const icon = r.status === "green" ? "✓" : r.status === "yellow" ? "⚠" : "✕";
        html += `<li style="padding: 6px 0; font-size: 13px;">${icon} <b>${task.title}</b> — ${r.passed}/${r.total}</li>`;
    });
    html += `</ul>`;
    document.getElementById("pcContent").innerHTML = html;
    document.getElementById("btnOpenNotebook").onclick = () => openStudent(id);
}

function openStudent(id) {
    document.querySelector('[data-section="workspace"]').click();
    showNotification(`📖 Открыта рабочая тетрадь`);
}

// ============ КОМУ НУЖНА ПОМОЩЬ ============
function renderHelp() {
    const needHelp = students.filter(s => s.status === "red" || s.status === "yellow");
    const list = document.getElementById("helpList");
    if (needHelp.length === 0) {
        list.innerHTML = `<div class="panel" style="text-align: center; color: var(--green);"><h3>✓ Все справляются</h3></div>`;
        return;
    }
    list.innerHTML = needHelp.map(s => {
        const failed = [];
        Object.values(s.results).forEach(r => r.failedCriteria.forEach(c => failed.push(c.text)));
        const unique = [...new Set(failed)];
        const hintsTotal = Object.values(s.hintsUsed).reduce((a, b) => a + b, 0);
        const reason = unique.length > 0 ? `Затруднения: ${unique.slice(0, 2).join(", ")}. Подсказок: ${hintsTotal}.` : "Не приступил к заданию.";
        return `
            <div class="help-card">
                <div class="help-pc">ПК №${s.pc}</div>
                <div class="help-info"><h4>${s.name}</h4><p>${reason}</p></div>
                <button class="btn btn-sm btn-primary" onclick="openStudent(${s.id})">📖</button>
            </div>
        `;
    }).join("");
}

// ============ ВЗАИМООЦЕНИВАНИЕ ============
function renderPeer() {
    document.getElementById("peerList").innerHTML = students.map(s => {
        const peer = s.peerScore;
        const ai = s.actualScore;
        const diff = Math.abs(peer - ai);
        return `
            <div class="peer-card">
                <div>
                    <div style="font-weight: 600;">${s.name} <span style="color: var(--text-dim); font-size: 12px;">(ПК №${s.pc})</span></div>
                    <div style="font-size: 13px; color: var(--text-dim); margin-top: 4px;">Взаимооценка: <b>${peer}/5</b> • AI: <b>${ai}/5</b> • Расхождение: <b>${diff}</b></div>
                </div>
                ${diff >= 2 ? `<div class="warning">⚠ ПРОВЕРИТЬ</div>` : `<div style="color: var(--green);">✓ OK</div>`}
                <button class="btn btn-sm btn-ghost" onclick="openStudent(${s.id})">📖</button>
            </div>
        `;
    }).join("");
}

// ============ САМООЦЕНИВАНИЕ ============
function renderSelf() {
    document.getElementById("selfList").innerHTML = students.map(s => {
        const self = s.selfScore;
        const ai = s.actualScore;
        const diff = self - ai;
        let comment = "";
        if (diff > 1) comment = `<span style="color: var(--yellow);">⚠ Самооценка завышена</span>`;
        else if (diff < -1) comment = `<span style="color: var(--blue);">💭 Низко оценил себя</span>`;
        else comment = `<span style="color: var(--green);">✓ Адекватна</span>`;
        return `
            <div class="self-card">
                <div><div style="font-weight: 600;">${s.name}</div><div style="font-size: 13px; color: var(--text-dim); margin-top: 4px;">Самооценка: <b>${self}/5</b> • По критериям: <b>${ai}/5</b></div></div>
                <div style="font-size: 13px;">${comment}</div>
                <button class="btn btn-sm btn-ghost" onclick="openStudent(${s.id})">📖</button>
            </div>
        `;
    }).join("");
}

// ============ ИТОГ УРОКА ============
document.getElementById("btnFinalSummary").onclick = () => {
    const view = document.getElementById("summaryView");
    const total = students.length;
    const completed = students.filter(s => Object.values(s.results).every(r => r.status === "green")).length;
    const allCriteria = students.filter(s => Object.values(s.results).every(r => r.passed === r.total)).length;
    const needAttention = students.filter(s => s.status === "red").length;
    const errorCount = {};
    students.forEach(s => Object.values(s.results).forEach(r => r.failedCriteria.forEach(c => { errorCount[c.text] = (errorCount[c.text] || 0) + 1; })));
    const topError = Object.entries(errorCount).sort((a, b) => b[1] - a[1])[0];
    view.innerHTML = `
        <div class="summary-block">
            <h4>📊 Общая статистика</h4>
            <p>Всего обучающихся: <b>${total}</b></p>
            <p>Выполнили все задания: <b>${completed}</b></p>
            <p>Достигли всех критериев: <b>${allCriteria}</b></p>
            <p>Требуют внимания: <b>${needAttention}</b></p>
        </div>
        <div class="summary-block">
            <h4>✕ Наиболее частая ошибка</h4>
            ${topError ? `<p>«${topError[0]}» — у <b>${topError[1]}</b> обучающихся.</p>` : "<p>Массовых ошибок нет.</p>"}
        </div>
        <div class="summary-block">
            <h4>💡 Рекомендация</h4>
            ${topError ? `<p>Закрепляющее задание по теме: <b>${topError[0]}</b>.</p>` : "<p>Группа готова к следующей теме.</p>"}
        </div>
    `;
    showNotification("✦ Итог урока сформирован");
};

document.getElementById("btnAnalyzeAll").onclick = () => { renderDashboard(); showNotification("✦ AI проанализировал 24 тетради"); };
document.getElementById("btnRefreshHelp").onclick = () => { renderHelp(); showNotification("🔄 Список обновлён"); };

// ============ ОТЧЁТ ============
document.getElementById("btnExport").onclick = () => {
    const total = students.length;
    const green = students.filter(s => s.status === "green").length;
    const yellow = students.filter(s => s.status === "yellow").length;
    const red = students.filter(s => s.status === "red").length;
    const hints = students.reduce((sum, s) => sum + Object.values(s.hintsUsed).reduce((a, b) => a + b, 0), 0);
    let text = `═══════════════════════════════════════\n        AI LESSON REPORT\n═══════════════════════════════════════\n\nТема: ${LESSON.topic}\nДата: ${new Date().toLocaleDateString("ru-RU")}\n\nОбучающихся: ${total}\n🟢 Уверенно: ${green}\n🟡 Ошибки: ${yellow}\n🔴 Внимание: ${red}\n💡 Подсказок: ${hints}\n\n───────────────────────────────────────\nВЫПОЛНЕНИЕ ЗАДАНИЙ:\n`;
    LESSON.tasks.forEach(t => {
        const passed = students.filter(s => s.results[t.id].status === "green").length;
        text += `  ${t.title}: ${passed}/${total}\n`;
    });
    text += `\n═══════════════════════════════════════\n`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AI_Lesson_Report_${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    showNotification("💾 Отчёт экспортирован");
};

function renderReport() {
    document.getElementById("reportView").innerHTML = `
        <div class="summary-block"><h4>📑 AI LESSON REPORT</h4><p><b>Тема:</b> ${LESSON.topic}</p><p><b>Дата:</b> ${new Date().toLocaleDateString("ru-RU")}</p></div>
        <div class="summary-block"><h4>📊 Статистика</h4><p>Обучающихся: <b>${students.length}</b></p><p>🟢 Уверенно: <b>${students.filter(s => s.status === "green").length}</b></p><p>🟡 Ошибки: <b>${students.filter(s => s.status === "yellow").length}</b></p><p>🔴 Внимание: <b>${students.filter(s => s.status === "red").length}</b></p></div>
        <div class="summary-block"><h4>💡 Нажмите "Экспорт" для скачивания</h4></div>
    `;
}

// ============ LIVE-УВЕДОМЛЕНИЯ ============
function showNotification(text) {
    const container = document.getElementById("liveNotifications");
    const n = document.createElement("div");
    n.className = "live-notification";
    n.textContent = text;
    container.appendChild(n);
    setTimeout(() => n.remove(), 5000);
}

function startLiveSimulation() {
    const messages = ["✦ У 6 обучающихся одинаковая ошибка", "✦ 3 обучающихся завершили раньше", "✦ 2 обучающимся нужна помощь", "✦ Все завершили задание №1"];
    setInterval(() => { if (Math.random() > 0.7) showNotification(messages[Math.floor(Math.random() * messages.length)]); }, 20000);
}

// ============ ИНИЦИАЛИЗАЦИЯ ============
renderTaskDescription();
renderTests();
renderTasks();
renderHints();
renderProgress();
renderDashboard();
renderClassroom();
renderHelp();
renderPeer();
renderSelf();
renderReport();
startLiveSimulation();

document.getElementById("modalClose").onclick = () => document.getElementById("modal").classList.add("hidden");

setTimeout(() => addChatMessage("Привет! 👋 Я твой AI-помощник. Задай вопрос по HTML, CSS, JavaScript или попроси подсказку."), 500);
setTimeout(() => showNotification("🤖 AI-агент активирован"), 1000);