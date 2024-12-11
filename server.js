const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    console.log('Имя:', req.body.firstname);
    console.log('Фамилия:', req.body.lastname);
    console.log('Email:', req.body.email);
    console.log('Пароль:', req.body.password);
    res.send('Данные успешно получены!');
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
