window.onload = window.onscroll = function(){
	
	head();
	function head(){
		var header = document.getElementById('header');
		var T = document.body.scrollTop || document.documentElement.scrollTop;
		if( T > 700 ){
			header.style.position = 'fixed';
		}else{
			header.style.position = '';
		}
	}
	
	Nav();
	function Nav(){
		var navTop = document.getElementById('navTop');
		var As = navTop.getElementsByTagName('a');
		var list = document.getElementById('list');
		var lis = list.getElementsByTagName('li');
		for(var i = 0; i < As.length; i++){
			As[i].index = i;
			As[i].onmouseover = function(){
				var spans = As[this.index].getElementsByTagName('span')[0];
				spans.style.width = '100%';
			}
			As[i].onmouseout = function(){
				var spans = As[this.index].getElementsByTagName('span')[0];
				spans.style.width = '0';
			}
		}
	}
	
	Delay();
	function Delay(){
		var imgs = document.getElementsByTagName('img');
		for(var i = 0; i < imgs.length; i++){
			if(imgs[i].getBoundingClientRect().top <= window.innerHeight){
				(function(index){
					setTimeout(function(){
						if(imgs[index].getAttribute('_src')){
							imgs[index].src = imgs[index].getAttribute('_src');
							imgs[index].removeAttribute('_src');	
							startMove(imgs[index],"opacity",400,100,"easeOut");
						}
					},500)
				})(i)
			}
		}
	}
	




	
};
