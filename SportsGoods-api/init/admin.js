var mongoose = require('../modules/database.js')
var User = require('./../models/user')

function initAdmin() {
    User.insertMany({
        "userId": "9527",
        "name": "Admin",
        "avatar": "http://osc9sqdxe.bkt.clouddn.com/defaultAvatar.jpg",
        "userName": "admin",
        "userPwd": "admin",
        "orderList": [],
        "cartList": [],
        "addressList": []
    })
}
module.exports = initAdmin