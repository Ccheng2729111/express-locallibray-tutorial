const Author = require('../models/author');

//显示完整列表
exports.author_list = (req, res, next) => {
    //该方法使用模型find sort exec 函数 以返回所有Author对象，并按照 family_name的字母排序。
    //传递给exec方法的回调被使用，并将传入的任何错误作为第一个参数，或者成功的时候，传入所有作者的列表
    //如果出现错误，则调用带有错误值的下一个中间件函数，没有错误的话显示author_list模版
    Author.find()
        .sort([['family_name', 'ascending']])
        .exec(function (err, list_authors) {
            if (err) { return next(err) }
            res.render('author_list', { title: 'Author List', author_list: list_authors })
        })
};

//为每位作者显示详情的页面  
exports.author_detail = (req, res) => { res.send('未实现：作者详情信息' + req.params.id) };

//由GET显示创建作者的表单
exports.author_create_get = (req, res) => { res.send('未实现：作者创建表单的 GET') };

//由POST处理作者创建操作
exports.author_create_post = (req, res) => { res.send('未实现：创建作者的POST') };

// 由 GET 显示删除作者的表单
exports.author_delete_get = (req, res) => { res.send('未实现：作者删除表单的 GET'); };

// 由 POST 处理作者删除操作
exports.author_delete_post = (req, res) => { res.send('未实现：删除作者的 POST'); };

// 由 GET 显示更新作者的表单
exports.author_update_get = (req, res) => { res.send('未实现：作者更新表单的 GET'); };

// 由 POST 处理作者更新操作
exports.author_update_post = (req, res) => { res.send('未实现：更新作者的 POST'); };