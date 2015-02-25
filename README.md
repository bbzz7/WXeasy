# WXeasy
无需js-sdk支持的微信分享库

useage:

//设置微信分享

	var config={
		img:'http://www.hylinkcs.com/project/lygq20150126/images/logo.png',
		title:'无需js-sdk支持的微信分享库',
		link:'http://www.qq.com'
	};
	WXeasy.set(config);

//传递参数

	var openid=window.location.href.split('?')[1].split('&')[0];
	var config={
		img:'http://121.42.41.39/project/csyh20150116/images/logo.jpg',
		title:'一起来摇压岁钱吧',
	};
	WXeasy.hashTable(openid,'addCount.html?'+openid);
    WXeasy.set(config);
