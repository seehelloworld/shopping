var mongoose = require('../modules/database.js')
var goods = require('../models/goods.js')

function getGoods() {
    goods.insertMany([
        {
          // 产品id
          productId: '004001',salePrice: 2800,productName: '滑雪板单板028',  
          productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC84ODE5YjY0NmI3NmIwOTZlZGQ2ZTgyMGMzOGE4MzVjMy05MHg5MC5qcGc_p_p100_p_3D.jpg',    
          productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC84ODE5YjY0NmI3NmIwOTZlZGQ2ZTgyMGMzOGE4MzVjMy5qcGc_p_p100_p_3D.jpg', 
          productMsg:'Telemark是最古老的一种滑雪雪板，并在10年中在个别地方重新出现。与“普通”雪板正好相反的是，人们不需要用脱落器将鞋整个地固定在板子上，而只须固定鞋尖部分，人们通过身体的高低起伏来控制雪板的走向。 　所谓的“Monocarver”或“Sqwal”是界于普通滑雪板和单板之间的雪板。象通常滑雪那样，人们向着前进方向站在“板”上，但正象滑单板一样，只有一只雪板（Mono-双脚一前一后站在同一只板上）。滑雪运动必须借助于器材，现代滑雪在对人的安全和滑雪技术上，器材生产枝术普遍提高的基础上，对滑雪器材的要求也很高，对于一个业余初学者，有些人可能认为有一套器材就可以了。其实这不对，你使用的器材直接影响你学习滑雪，有一套好的器材，能使你更快地学会滑雪。滑雪的器材包括高山滑雪板、滑雪单板（SNOWBOARDS）及所谓的SNOWBOARDS等。其中高山滑雪板是当今最为普及的冬季运动器材。在过去的5到10年中，高山板得到了很大发展，直至发展到今天的CARVING（即拐弯板）。CARVING不仅是今天的潮流，它的的确确给高山滑雪和高山滑雪者带来了功能上的巨大发展。CARVING不仅仅是增加了滑雪的乐趣，而且它大大地简化了学习滑雪的过程。',  
          factory: '美国',
          stock:10,
          limit_num:'5',
          productColor: '青色',
          productClass: '所有分类',
          detialsimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510221718379&di=c5e8ea0d6371507ee86b265068930ef3&imgtype=0&src=http%3A%2F%2Ff2.topitme.com%2F2%2Ff0%2F6e%2F1130278526dcb6ef02o.jpg"
        },
        {
          productId: '004002',salePrice: 2800,productName: "滑雪服017",  stock:10,limit_num:'5',
          productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9mMWZhNTU0YmVjOTAwZWIwZmQ3Yjg3OWUwZTIyNTc3ZS05MHg5MC5qcGc_p_p100_p_3D.jpg',    
          productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9mMWZhNTU0YmVjOTAwZWIwZmQ3Yjg3OWUwZTIyNTc3ZS5qcGc_p_p100_p_3D.jpg', 
          productMsg:'Telemark是最古老的一种滑雪雪板，并在10年中在个别地方重新出现。与“普通”雪板正好相反的是，人们不需要用脱落器将鞋整个地固定在板子上，而只须固定鞋尖部分，人们通过身体的高低起伏来控制雪板的走向。 　所谓的“Monocarver”或“Sqwal”是界于普通滑雪板和单板之间的雪板。象通常滑雪那样，人们向着前进方向站在“板”上，但正象滑单板一样，只有一只雪板（Mono-双脚一前一后站在同一只板上）。滑雪运动必须借助于器材，现代滑雪在对人的安全和滑雪技术上，器材生产枝术普遍提高的基础上，对滑雪器材的要求也很高，对于一个业余初学者，有些人可能认为有一套器材就可以了。其实这不对，你使用的器材直接影响你学习滑雪，有一套好的器材，能使你更快地学会滑雪。滑雪的器材包括高山滑雪板、滑雪单板（SNOWBOARDS）及所谓的SNOWBOARDS等。其中高山滑雪板是当今最为普及的冬季运动器材。在过去的5到10年中，高山板得到了很大发展，直至发展到今天的CARVING（即拐弯板）。CARVING不仅是今天的潮流，它的的确确给高山滑雪和高山滑雪者带来了功能上的巨大发展。CARVING不仅仅是增加了滑雪的乐趣，而且它大大地简化了学习滑雪的过程。',  factory: "中国",productColor: "黑色",productClass: '所有分类',
          detialsimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510221748948&di=ee44d256c75b63979e50b26b85166519&imgtype=0&src=http%3A%2F%2Fwww.72622.com%2Fattachments%2Ftrip%2F20151102095348986.jpg"
        },
        {
          productId: '004003',salePrice: 2800,productName: "滑雪配件036",  stock:10,limit_num:'5',
          productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC84ZjlkMGYzNDE3NDMwM2UzNmY4YTBlYTlmZTdmNjlmYS05MHg5MC5qcGc_p_p100_p_3D.jpg',    
          productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC84ZjlkMGYzNDE3NDMwM2UzNmY4YTBlYTlmZTdmNjlmYS5qcGc_p_p100_p_3D.jpg', 
          productMsg:'Telemark是最古老的一种滑雪雪板，并在10年中在个别地方重新出现。与“普通”雪板正好相反的是，人们不需要用脱落器将鞋整个地固定在板子上，而只须固定鞋尖部分，人们通过身体的高低起伏来控制雪板的走向。 　所谓的“Monocarver”或“Sqwal”是界于普通滑雪板和单板之间的雪板。象通常滑雪那样，人们向着前进方向站在“板”上，但正象滑单板一样，只有一只雪板（Mono-双脚一前一后站在同一只板上）。滑雪运动必须借助于器材，现代滑雪在对人的安全和滑雪技术上，器材生产枝术普遍提高的基础上，对滑雪器材的要求也很高，对于一个业余初学者，有些人可能认为有一套器材就可以了。其实这不对，你使用的器材直接影响你学习滑雪，有一套好的器材，能使你更快地学会滑雪。滑雪的器材包括高山滑雪板、滑雪单板（SNOWBOARDS）及所谓的SNOWBOARDS等。其中高山滑雪板是当今最为普及的冬季运动器材。在过去的5到10年中，高山板得到了很大发展，直至发展到今天的CARVING（即拐弯板）。CARVING不仅是今天的潮流，它的的确确给高山滑雪和高山滑雪者带来了功能上的巨大发展。CARVING不仅仅是增加了滑雪的乐趣，而且它大大地简化了学习滑雪的过程。',  factory: "俄国",productColor: "红色",productClass: '所有分类',
          detialsimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510221661866&di=15ca9f500b6870e87c9430b42d5a2c5a&imgtype=0&src=http%3A%2F%2Fatt2.citysbs.com%2Fhangzhou%2F2015%2F12%2F07%2F17%2F2048x1536-172547_v2_19981449480347022_ea516b6625680bdcd5c39c1bb943c238.jpg"
        },
        {
          productId: '004004',salePrice: 590,productName: "滑雪眼镜",  stock:10,limit_num:'5',
          productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8wYjUxNDQwOGJjMjQ5NGEwZTRkN2U4NWQwMmY5YzcyZi05MHg5MC5qcGc_p_p100_p_3D.jpg',    
          productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8wYjUxNDQwOGJjMjQ5NGEwZTRkN2U4NWQwMmY5YzcyZi5qcGc_p_p100_p_3D.jpg', 
          productMsg:'Telemark是最古老的一种滑雪雪板，并在10年中在个别地方重新出现。与“普通”雪板正好相反的是，人们不需要用脱落器将鞋整个地固定在板子上，而只须固定鞋尖部分，人们通过身体的高低起伏来控制雪板的走向。 　所谓的“Monocarver”或“Sqwal”是界于普通滑雪板和单板之间的雪板。象通常滑雪那样，人们向着前进方向站在“板”上，但正象滑单板一样，只有一只雪板（Mono-双脚一前一后站在同一只板上）。滑雪运动必须借助于器材，现代滑雪在对人的安全和滑雪技术上，器材生产枝术普遍提高的基础上，对滑雪器材的要求也很高，对于一个业余初学者，有些人可能认为有一套器材就可以了。其实这不对，你使用的器材直接影响你学习滑雪，有一套好的器材，能使你更快地学会滑雪。滑雪的器材包括高山滑雪板、滑雪单板（SNOWBOARDS）及所谓的SNOWBOARDS等。其中高山滑雪板是当今最为普及的冬季运动器材。在过去的5到10年中，高山板得到了很大发展，直至发展到今天的CARVING（即拐弯板）。CARVING不仅是今天的潮流，它的的确确给高山滑雪和高山滑雪者带来了功能上的巨大发展。CARVING不仅仅是增加了滑雪的乐趣，而且它大大地简化了学习滑雪的过程。',  factory: "德国",productColor: "黄色",productClass: '所有分类',
          detialsimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510221593530&di=c599e049f2a3bb86142ab586e1012cd0&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0421%2F3557c14a119e6a6c557ab563e43f3fcb.jpg",
        },
        {
          productId: '004005',salePrice: 5900,productName: "滑雪板双板套装",  stock:10,limit_num:'5',
          productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8zNTI4YzI4NzQ1OTYwMmFjYTljMTQwMTFjOTI3NTYwYi05MHg5MC5qcGc_p_p100_p_3D.jpg',    
          productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8zNTI4YzI4NzQ1OTYwMmFjYTljMTQwMTFjOTI3NTYwYi5qcGc_p_p100_p_3D.jpg', 
          productMsg:'Telemark是最古老的一种滑雪雪板，并在10年中在个别地方重新出现。与“普通”雪板正好相反的是，人们不需要用脱落器将鞋整个地固定在板子上，而只须固定鞋尖部分，人们通过身体的高低起伏来控制雪板的走向。 　所谓的“Monocarver”或“Sqwal”是界于普通滑雪板和单板之间的雪板。象通常滑雪那样，人们向着前进方向站在“板”上，但正象滑单板一样，只有一只雪板（Mono-双脚一前一后站在同一只板上）。滑雪运动必须借助于器材，现代滑雪在对人的安全和滑雪技术上，器材生产枝术普遍提高的基础上，对滑雪器材的要求也很高，对于一个业余初学者，有些人可能认为有一套器材就可以了。其实这不对，你使用的器材直接影响你学习滑雪，有一套好的器材，能使你更快地学会滑雪。滑雪的器材包括高山滑雪板、滑雪单板（SNOWBOARDS）及所谓的SNOWBOARDS等。其中高山滑雪板是当今最为普及的冬季运动器材。在过去的5到10年中，高山板得到了很大发展，直至发展到今天的CARVING（即拐弯板）。CARVING不仅是今天的潮流，它的的确确给高山滑雪和高山滑雪者带来了功能上的巨大发展。CARVING不仅仅是增加了滑雪的乐趣，而且它大大地简化了学习滑雪的过程。',  factory: "英国",productColor: "橙色",productClass: '所有分类',
          detialsimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510221568109&di=e115a96c587d63405e4bc7efcadbe9bb&imgtype=0&src=http%3A%2F%2Fimg.toplanit.com%2Fuserfiles%2F2013%2F1%2F5%2Fehmsxe.jpg"
        },
        {
          productId: '004006',salePrice: 198,productName: "滑雪手套003",  stock:10,limit_num:'5',
          productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8wMDRmMDc1ODMxMGJiZDkxZmViZTVlZDRjZjU2NWU4Ny05MHg5MC5qcGc_p_p100_p_3D.jpg',    
          productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8wMDRmMDc1ODMxMGJiZDkxZmViZTVlZDRjZjU2NWU4Ny0yMjB4MjIwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg', 
          productMsg:'Telemark是最古老的一种滑雪雪板，并在10年中在个别地方重新出现。与“普通”雪板正好相反的是，人们不需要用脱落器将鞋整个地固定在板子上，而只须固定鞋尖部分，人们通过身体的高低起伏来控制雪板的走向。 　所谓的“Monocarver”或“Sqwal”是界于普通滑雪板和单板之间的雪板。象通常滑雪那样，人们向着前进方向站在“板”上，但正象滑单板一样，只有一只雪板（Mono-双脚一前一后站在同一只板上）。滑雪运动必须借助于器材，现代滑雪在对人的安全和滑雪技术上，器材生产枝术普遍提高的基础上，对滑雪器材的要求也很高，对于一个业余初学者，有些人可能认为有一套器材就可以了。其实这不对，你使用的器材直接影响你学习滑雪，有一套好的器材，能使你更快地学会滑雪。滑雪的器材包括高山滑雪板、滑雪单板（SNOWBOARDS）及所谓的SNOWBOARDS等。其中高山滑雪板是当今最为普及的冬季运动器材。在过去的5到10年中，高山板得到了很大发展，直至发展到今天的CARVING（即拐弯板）。CARVING不仅是今天的潮流，它的的确确给高山滑雪和高山滑雪者带来了功能上的巨大发展。CARVING不仅仅是增加了滑雪的乐趣，而且它大大地简化了学习滑雪的过程。',  factory: "中国",productColor: "蓝色",productClass: '所有分类',
          detialsimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510221520128&di=34b105cc2f238fc4fdd0b853130e171e&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F131230%2F234760-13123009222387.jpg"
        },
        {
          productId: '004007',salePrice: 2800,productName: "滑雪眼镜012",  stock:10,limit_num:'5',
          productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9iZTdlZDc5OGVjNjQzMTdiNzZjMDczM2IwNWQzZDEyMi05MHg5MC5qcGc_p_p100_p_3D.jpg',    
          productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9iZTdlZDc5OGVjNjQzMTdiNzZjMDczM2IwNWQzZDEyMi5qcGc_p_p100_p_3D.jpg', 
          productMsg:'Telemark是最古老的一种滑雪雪板，并在10年中在个别地方重新出现。与“普通”雪板正好相反的是，人们不需要用脱落器将鞋整个地固定在板子上，而只须固定鞋尖部分，人们通过身体的高低起伏来控制雪板的走向。 　所谓的“Monocarver”或“Sqwal”是界于普通滑雪板和单板之间的雪板。象通常滑雪那样，人们向着前进方向站在“板”上，但正象滑单板一样，只有一只雪板（Mono-双脚一前一后站在同一只板上）。滑雪运动必须借助于器材，现代滑雪在对人的安全和滑雪技术上，器材生产枝术普遍提高的基础上，对滑雪器材的要求也很高，对于一个业余初学者，有些人可能认为有一套器材就可以了。其实这不对，你使用的器材直接影响你学习滑雪，有一套好的器材，能使你更快地学会滑雪。滑雪的器材包括高山滑雪板、滑雪单板（SNOWBOARDS）及所谓的SNOWBOARDS等。其中高山滑雪板是当今最为普及的冬季运动器材。在过去的5到10年中，高山板得到了很大发展，直至发展到今天的CARVING（即拐弯板）。CARVING不仅是今天的潮流，它的的确确给高山滑雪和高山滑雪者带来了功能上的巨大发展。CARVING不仅仅是增加了滑雪的乐趣，而且它大大地简化了学习滑雪的过程。',  factory: "美国",productColor: "紫色",productClass: '所有分类',
          detialsimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510221480156&di=67215a2eb4901eb900782d4dfeed1f19&imgtype=0&src=http%3A%2F%2Fpic.lvmama.com%2Fuploads%2Fpc%2Fplace2%2F09%2FC_20130709-616510_1280_.jpg"
        },
        {
          productId: '004008',salePrice: 2800,productName: "滑雪板单板019",  stock:10,limit_num:'5',
          productImageSmall: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9mNTEwNWIwMTUxZDI1MTRkZmVmNmFjOTMzMjE4MzIzMy05MHg5MC5qcGc_p_p100_p_3D.jpg',    
          productImageBig: 'http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9mNTEwNWIwMTUxZDI1MTRkZmVmNmFjOTMzMjE4MzIzMy5qcGc_p_p100_p_3D.jpg', 
          productMsg:'Telemark是最古老的一种滑雪雪板，并在10年中在个别地方重新出现。与“普通”雪板正好相反的是，人们不需要用脱落器将鞋整个地固定在板子上，而只须固定鞋尖部分，人们通过身体的高低起伏来控制雪板的走向。 　所谓的“Monocarver”或“Sqwal”是界于普通滑雪板和单板之间的雪板。象通常滑雪那样，人们向着前进方向站在“板”上，但正象滑单板一样，只有一只雪板（Mono-双脚一前一后站在同一只板上）。滑雪运动必须借助于器材，现代滑雪在对人的安全和滑雪技术上，器材生产枝术普遍提高的基础上，对滑雪器材的要求也很高，对于一个业余初学者，有些人可能认为有一套器材就可以了。其实这不对，你使用的器材直接影响你学习滑雪，有一套好的器材，能使你更快地学会滑雪。滑雪的器材包括高山滑雪板、滑雪单板（SNOWBOARDS）及所谓的SNOWBOARDS等。其中高山滑雪板是当今最为普及的冬季运动器材。在过去的5到10年中，高山板得到了很大发展，直至发展到今天的CARVING（即拐弯板）。CARVING不仅是今天的潮流，它的的确确给高山滑雪和高山滑雪者带来了功能上的巨大发展。CARVING不仅仅是增加了滑雪的乐趣，而且它大大地简化了学习滑雪的过程。',  factory: "法国",productColor: "红色",productClass: '所有分类',
          detialsimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510220403815&di=27fa03c76baa35c4c2c1eacc71c24234&imgtype=0&src=http%3A%2F%2Ff1.topitme.com%2F1%2F16%2Fe4%2F1130280991a92e4161o.jpg"
        }
      ])
}
module.exports = getGoods