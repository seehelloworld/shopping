// 用户列表
var mongoose = require('../modules/database.js')
var userSchema = new mongoose.Schema({
    // 用户id
    "userId": String,
    // 用户名字
    "name": String,
    // 用户图像
    "avatar": String,
    // 用户账号
    "userName": String,
    // 用户密码
    "userPwd": String,
    // 订单列表
    "orderList": Array,
    // 购物车列表
    "cartList": [
        {
            // 产品id
            "productId": String,
            // 产品图片
            "productImg": String,
            // 产品名字
            "productName": String,
            "checked": String,
            // 产品价格
            "productPrice": Number
        }
    ],
    // 收货地址
    'addressList': [
        {
            // 地址id
            "addressId": Number,
            // 收件人
            "userName": String,
            // 街道
            "streetName": String,
            // 电话
            "tel": Number,
            "isDefault": Boolean
        }
    ]
})
module.exports = mongoose.model('User', userSchema)