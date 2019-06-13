'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.user.login);
  router.post('/register',controller.user.register);
  const token = app.middleware.token({}, app)
  router.get('/note', token,controller.note.query);
  router.post('/note/delete',token,  controller.note.delete);
  router.post('/note/create',token,  controller.note.create);
};
