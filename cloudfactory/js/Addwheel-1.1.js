function addWheel(obj,fn){
	var user = window.navigator.userAgent;
	if(user.toLowerCase().indexOf('firefox') != -1){
		obj.addEventListener('DOMMouseScroll',fnEv);//走火狐
	}else {
		obj.addEventListener('mousewheel',fnEv);//谷歌
	}
	function fnEv(ev){
		var down = true;//向上
		if(ev.wheelDelta){
			down = ev.wheelDelta > 0 ? true : false;//判断谷歌
		}else{
			down = ev.detail < 0 ? true : false;//判断火狐
		}
		
		typeof fn == 'function' && fn(down);//把down值传出去
		ev.preventDefault();//阻止默认事件
	}
	
};