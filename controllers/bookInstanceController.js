const BookInstance = require('../models/bookInstance');

//显示完整列表
exports.bookinstance_list = (req, res, next) => {

    BookInstance.find()
        .populate('book')
        .exec(function (err, list_bookinstances) {
            if (err) { return next(err) }
            res.render('bookinstance_list', { title: 'Book Instance List', bookInstance_list: list_bookinstances })
        })
};

//为每位作者显示详情的页面  
exports.bookinstance_detail = (req, res) => { res.send('未实现：作者详情信息' + req.params.id) };

//由GET显示创建作者的表单
exports.bookinstance_create_get = (req, res) => { res.send('未实现：作者创建表单的 GET') };

//由POST处理作者创建操作
exports.bookinstance_create_post = (req, res) => { res.send('未实现：创建作者的POST') };

// 由 GET 显示删除作者的表单
exports.bookinstance_delete_get = (req, res) => { res.send('未实现：作者删除表单的 GET'); };

// 由 POST 处理作者删除操作
exports.bookinstance_delete_post = (req, res) => { res.send('未实现：删除作者的 POST'); };

// 由 GET 显示更新作者的表单
exports.bookinstance_update_get = (req, res) => { res.send('未实现：作者更新表单的 GET'); };

// 由 POST 处理作者更新操作
exports.bookinstance_update_post = (req, res) => { res.send('未实现：更新作者的 POST'); };