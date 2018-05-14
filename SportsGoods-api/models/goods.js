var mongoose = require('../modules/database.js')
// 表模型
var produtSchema = new mongoose.Schema({
    // 产品id
    'productId': String,
    // 产品价格
    'salePrice': Number,
    // 产品名字
    'productName': String,
    // 产品的小图
    'productImageSmall': Array,
    // 产品的大图
    'productImageBig': String,
    // 详情页大图
    'detialsimg':String,
    // 产品信息
    'productMsg': Object,
    // 产品产地
    'factory': String,
    // 产品颜色
    'productColor': String,
    // 产品分类
    'productClass':String,
    // 库存
    'stock': Number,
    // 限制购买数量
    'limit_num': String,
})
module.exports = mongoose.model('Goods', produtSchema)