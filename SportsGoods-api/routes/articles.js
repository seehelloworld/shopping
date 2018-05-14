var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../models/article.js');

// 获取商品列表
router.get('/content', function (req, res, next) {
    Article.find(function (err, result) {
        if (err) {
            res.json({ code: 201, message: err });
            return;
        } else {
            res.json({
                code: 200,
                message: 'successful',
                data:result
                }  
            )
           
        }
    })
})

// 文章信息
router.get('/ArticleDet', function (req, res,next) {
    let articleID = req.query.articleID
    Article.findOne({ articleID }, (err, doc) => {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: '1',
                msg: 'suc',
                result: doc
            })
        }
    })
})

module.exports = router 