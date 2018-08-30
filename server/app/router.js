'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const checkToken = app.middleware.checkToken({}, app);
  router.post('/login', controller.user.login);
  router.get('/note/query', checkToken, controller.note.query);
  router.post('/note', checkToken, controller.note.find);
  router.post('/note/delete', checkToken, controller.note.delete);
  router.post('/note/create', checkToken, controller.note.create);
};
