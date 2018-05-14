var mongoose = require('../modules/database.js')
// 表模型
var produtSchema = new mongoose.Schema({
    'articleID': Number,
    // 标题
    'title': String,
    // 发布日期
    // datepost: new Date,
    // 分类
    'classify': String,
    // 内容
    'connect': String,
    // 图片
    'imgcon': String,
})
module.exports = mongoose.model('Articles', produtSchema)