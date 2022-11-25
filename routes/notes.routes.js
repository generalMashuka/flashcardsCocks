// const notesRouter = require('express').Router();

// const { Note } = require('../db/models');
// const NotePage = require('../views/notes/NotePage');
// const NotesPage = require('../views/notes/NotesPage');
// const NoteView = require('../views/notes/Note');

// notesRouter.get('/', async (req, res) => {
//   // Берём задачи из базы данных
//   const notes = await Note.findAll({
//     order: [
//       // сортируем по createdAt (самый новый будет в начале)
//       ['createdAt', 'DESC'],
//       // если createdAt совпадают у двух записей, то они будут сравниваться по id
//       ['id', 'DESC'],
//     ],
//   });

//   res.renderComponent(NotesPage, {
//     notes,
//     maxNotes: 20,
//   });
// });

// notesRouter.post('/submit-new-note', async (req, res) => {
//   const notes = await Note.findAll();
//   if (notes.length < 20) {
//     const note = await Note.create(req.body);

//     res.renderComponent(NoteView, { note }, { doctype: false });
//   } else {
//     res.status(420).send('No more new notes');
//   }
// });

// // параметризированный запрос
// notesRouter.get('/view-note/:id', async (req, res) => {
//   const { id } = req.params;
//   const note = await Note.findByPk(Number(id));

//   res.renderComponent(NotePage, {
//     note,
//     hideButtons: true,
//   });
// });

// notesRouter.post('/delete-note', async (req, res) => {
//   await Note.destroy({ where: { id: Number(req.body.id) } });
//   // редиректить в ответе на феч-запрос НЕЛЬЗЯ
//   // res.redirect('/notes');
//   res.json({ success: true });
// });

// notesRouter.get('/count', async (req, res) => {
//   const notes = await Note.findAll();
//   const count = notes.length;
//   res.json({ count });
// });

// module.exports = notesRouter;
