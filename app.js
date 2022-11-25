require('@babel/register');
const express = require('express');
const expressConfig = require('./config/config');

const ssr = require('./middleware/ssr');

const quizRouter = require('./routes/quiz.routes');

const app = express();

expressConfig(app);

app.use(ssr);
// подключаем маршрутизацию
app.use('/topic', quizRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
