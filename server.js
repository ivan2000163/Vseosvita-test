const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Добавляем CORS
const app = express();
const port = process.env.PORT || 3001;

// Middleware для парсинга данных форм
app.use(bodyParser.urlencoded({ extended: true }));

// Разрешаем запросы с других доменов
app.use(cors());

// Статические файлы (HTML, CSS)
app.use(express.static('public'));

// Маршрут для обработки данных формы
app.post('/submit', (req, res) => {
    console.log('Имя:', req.body.firstname);
    console.log('Фамилия:', req.body.lastname);
    console.log('Email:', req.body.email);
    console.log('Пароль:', req.body.password);
    res.send('Данные успешно получены!');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
