const lastPageRouter = require('express').Router();

const { User } = require('../db/models');
const LastPage = require('../views/lastPage');

lastPageRouter.get('/lastPage', async (req, res) => {
  const user = await User.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
    limit: 1,
  });
  console.log(user);
  res.renderComponent(LastPage, {
    user,
  });
});

module.exports = lastPageRouter;
