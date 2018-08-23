'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.user.index);
  router.get('/note/query', controller.note.query);
  router.post('/note', controller.note.find);
  router.post('/note/delete', controller.note.delete);
  router.post('/note/create', controller.note.create);
};
