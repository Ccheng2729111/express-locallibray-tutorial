const express = require('express');
const router = express.Router();

//导入控制器模块
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookInstanceController');

//藏书路由

router.get('/book/create', book_controller.book_create_post);

router.post('/book/create', book_controller.book_create_post);

router.get('/book/:id/delete', book_controller.book_delete_get);

router.post('/book/:id/delete', book_controller.book_delete_post);

router.get('/book/:id/update', book_controller.book_update_get);

router.post('/book/:id/update', book_controller.book_update_post);

router.get('/book/:id', book_controller.book_detail);

router.get('/books', book_controller.book_list);

//藏书路由

router.get('/bookinstances/create', book_instance_controller.bookinstance_create_post);

router.post('/bookinstances/create', book_instance_controller.bookinstance_create_post);

router.get('/bookinstances/:id/delete', book_instance_controller.bookinstance_delete_get);

router.post('/bookinstances/:id/delete', book_instance_controller.bookinstance_delete_post);

router.get('/bookinstances/:id/update', book_instance_controller.bookinstance_update_get);

router.post('/bookinstances/:id/update', book_instance_controller.bookinstance_update_post);

router.get('/bookinstances/:id', book_instance_controller.bookinstance_detail);

router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router