// JavaScript Document
//WXeasy.js 1.0.0 by 华扬长沙 庄宇 email：30755405@qq.com
;(function(WXeasy,$){
	//全局配置
	var $config={
		img:'',//分享缩略图	
		title:'',//分享标题
		link:'',//分享链接
		qmode:0,//分享参数模式
		hash:'goto',//跳转hash
		hashTable:{}//哈希路由表	
	};
	
	WXeasy.set=function(myOpt){
		$.extend($config,myOpt);
		
		var imgHtml='<img src="'+$config.img+'" width="300" height="300" style="position:absolute;top:-9999px">';
		$('body').prepend(imgHtml);
		
		$('title').text($config.title);
		
		//alert(window.location.hash);
		var hash=window.location.hash.replace('#','');
		if($config.hashTable[hash]){
			window.location.replace($config.hashTable[hash]);	
		}else if($config.link && window.location.hash=='#goto'){
			window.location.replace($config.link);
		}else if($config.link){
			window.location.hash=$config.hash;	
		}
	}
	
	WXeasy.hash=function(hash){//设置/获取当前哈希参数
		if(hash){
			window.location.hash=hash;
		}else{
			return 	window.location.hash
		}
	};
	
	WXeasy.hashTable=function(hash,value){//设置当前哈希路由表
		if(!(hash && value)){
			return $config.hashTable;
		}else{
			$config.hashTable[hash]=valuexxx;
		}
	};
		
})(window.WXeasy=window.WXeasy || {},jQuery);