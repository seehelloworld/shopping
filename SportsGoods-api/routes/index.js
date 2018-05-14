var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
router.get('/test/aa', function (req, res, next) {
  var arr = [
    {
      // 产品id
      productId: '004007',salePrice: 2800,productName: '滑雪板单板028',  
      productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC84ODE5YjY0NmI3NmIwOTZlZGQ2ZTgyMGMzOGE4MzVjMy05MHg5MC5qcGc_p_p100_p_3D.jpg',    
      productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC84ODE5YjY0NmI3NmIwOTZlZGQ2ZTgyMGMzOGE4MzVjMy5qcGc_p_p100_p_3D.jpg', 
      productMsg:'',  factory: '美国',productColor: '红色',productClass: '所有分类'
    },
    {
      productId: '004007',salePrice: 2800,productName: "滑雪服017",  
      productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9mMWZhNTU0YmVjOTAwZWIwZmQ3Yjg3OWUwZTIyNTc3ZS05MHg5MC5qcGc_p_p100_p_3D.jpg',    
      productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9mMWZhNTU0YmVjOTAwZWIwZmQ3Yjg3OWUwZTIyNTc3ZS5qcGc_p_p100_p_3D.jpg', 
      productMsg:'',  factory: "中国",productColor: "黑色",productClass: '所有分类'
    },
    {
      productId: '004007',salePrice: 2800,productName: "滑雪配件036",  
      productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC84ZjlkMGYzNDE3NDMwM2UzNmY4YTBlYTlmZTdmNjlmYS05MHg5MC5qcGc_p_p100_p_3D.jpg',    
      productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC84ZjlkMGYzNDE3NDMwM2UzNmY4YTBlYTlmZTdmNjlmYS5qcGc_p_p100_p_3D.jpg', 
      productMsg:'',  factory: "美国",productColor: "红色",productClass: '所有分类'
    },
    {
      productId: '004007',salePrice: 590,productName: "滑雪眼镜",  
      productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8wYjUxNDQwOGJjMjQ5NGEwZTRkN2U4NWQwMmY5YzcyZi05MHg5MC5qcGc_p_p100_p_3D.jpg',    
      productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8wYjUxNDQwOGJjMjQ5NGEwZTRkN2U4NWQwMmY5YzcyZi5qcGc_p_p100_p_3D.jpg', 
      productMsg:'',  factory: "德国",productColor: "黄色",productClass: '所有分类'
    },
    {
      productId: '004007',salePrice: 5900,productName: "滑雪板双板套装",  
      productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8zNTI4YzI4NzQ1OTYwMmFjYTljMTQwMTFjOTI3NTYwYi05MHg5MC5qcGc_p_p100_p_3D.jpg',    
      productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8zNTI4YzI4NzQ1OTYwMmFjYTljMTQwMTFjOTI3NTYwYi5qcGc_p_p100_p_3D.jpg', 
      productMsg:'',  factory: "",productColor: "",productClass: '所有分类'
    },
    {
      productId: '004007',salePrice: 198,productName: "滑雪手套003",  
      productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8wMDRmMDc1ODMxMGJiZDkxZmViZTVlZDRjZjU2NWU4Ny0yMjB4MjIwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',    
      productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8wMDRmMDc1ODMxMGJiZDkxZmViZTVlZDRjZjU2NWU4Ny05MHg5MC5qcGc_p_p100_p_3D.jpg', 
      productMsg:'',  factory: "",productColor: "",productClass: '所有分类'
    }
  ]
  goods.insertMany(arr, function (err, result) {

    if(err){
      res.json({code:201,message:"err"})
    }
    res.json({ code: 200, message: 'success' });
  })
})
*/


module.exports = router;
