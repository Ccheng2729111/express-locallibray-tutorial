const Author = require('../models/genre');

//显示完整列表
exports.genre_list = (req, res) => { res.send('未实现：作者列表') };

//为每位作者显示详情的页面  
exports.genre_detail = (req, res) => { res.send('未实现：作者详情信息' + req.params.id) };

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