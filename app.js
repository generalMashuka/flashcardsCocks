require('@babel/register');
const express = require('express');

const mainRouter = require('./routes/main.routes');
const lastPage = require('./routes/lastPage.rout');
const expressConfig = require('./config/config');

const app = express();

const ssr = require('./middleware/ssr');

const quizRouter = require('./routes/quiz.routes');

expressConfig(app);



app.use(ssr);
// подключаем маршрутизацию
app.use('/', mainRouter);
app.use('/topic', quizRouter);
app.use('/', lastPage);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
