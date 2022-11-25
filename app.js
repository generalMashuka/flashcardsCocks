const mainRouter = require("./routes/main.routes");
require('@babel/register');
const express = require('express');
const expressConfig = require('./config/config');

const app = express();

const ssr = require('./middleware/ssr');

const quizRouter = require('./routes/quiz.routes');



expressConfig(app);

// подключаем маршрутизацию
app.use("/", mainRouter);

app.use(ssr);
// подключаем маршрутизацию
app.use('/topic', quizRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
