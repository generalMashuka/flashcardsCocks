require("@babel/register");
const express = require("express");
const expressConfig = require("./config/express");
const mainRouter = require("./routes/main.routes");
// const notesRouter = require('./routes/notes.routes');

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use("/", mainRouter);

app.listen(3000, () => console.log("Server started at http://localhost:3000/"));
