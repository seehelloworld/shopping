// 初始化数据库
var getGoods = require('./getGoods')
let getAdmin = require('./admin');
var articlesfun = require('./articlesfun')

getGoods();
getAdmin();
articlesfun();