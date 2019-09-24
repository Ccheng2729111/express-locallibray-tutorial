const Genre = require('../models/genre');
const Book = require('../models/book');
const async = require('async')

//显示完整列表
exports.genre_list = (req, res, next) => {
    Genre.find()
        .sort([['name', 'ascending']])
        .exec(function (err, list_genre) {
            if (err) { return next(err) }
            res.render('genre_list', { title: 'genre list', genre_list: list_genre })
        })
};

//为每位作者显示详情的页面  
exports.genre_detail = (req, res, next) => {
    //async 集合多个异步方法并且在第二个参数返回 前面方法的键值对形式返回
    async.parallel({
        gener: function (callback) {
            //根据id寻找类型
            Genre.findById(req.params.id).exec(callback)
        },

        genre_books: function (callback) {
            //根据id寻找书
            Book.find({ 'genre': req.params.id }).exec(callback)
        },
    }, function (err, results) {
        console.log(results)
        if (err) { return next(err) }
        if (results.gener == null) {
            let err = new Error('Genre not found');
            err.status = 404;
            return next(err)
        }

        res.render('genre_detail', { title: 'Gener Detail', genre: results.gener, genre_books: results.genre_books })
    })
};

//由GET显示创建作者的表单
exports.genre_create_get = (req, res) => { res.send('未实现：作者创建表单的 GET') };

//由POST处理作者创建操作
exports.genre_create_post = (req, res) => { res.send('未实现：创建作者的POST') };

// 由 GET 显示删除作者的表单
exports.genre_delete_get = (req, res) => { res.send('未实现：作者删除表单的 GET'); };

// 由 POST 处理作者删除操作
exports.genre_delete_post = (req, res) => { res.send('未实现：删除作者的 POST'); };

// 由 GET 显示更新作者的表单
exports.genre_update_get = (req, res) => { res.send('未实现：作者更新表单的 GET'); };

// 由 POST 处理作者更新操作
exports.genre_update_post = (req, res) => { res.send('未实现：更新作者的 POST'); };