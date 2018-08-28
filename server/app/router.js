'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const getToken = app.middleware.getToken({}, app);
  router.post('/login', controller.user.login);
  router.get('/note/query', getToken, controller.note.query);
  router.post('/note', getToken, controller.note.find);
  router.post('/note/delete', getToken, controller.note.delete);
  router.post('/note/create', getToken, controller.note.create);
};
