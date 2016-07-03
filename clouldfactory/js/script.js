window.onload = onresize = function(){
	

	document.onmousedown = function (){
		return false;
	}
	Loading();
	function Loading(){
		setTimeout(function(){
			$('#loading').css({display:'none'});
		},1000);
	}
	
	creactElement();
	var html = '';
	function creactElement(){
		html = '';
		for(var i = 0; i < obj.length; i++){
			html += '<li>'+
				'<a href="javascript:;" class="lis_a"></a>'+
				'<div class="lis_div">'+
					'<h3>'+obj[i].bt+'</h3>'+
					'<a href="javascript:;">查看详情&gt;</a>'+
					'<p>'+obj[i].p1+'<br />'+obj[i].p2+'<br />'+obj[i].p3+'</p>'+
				'</div>'+
			'</li>'
		}
		$('#main3_list').html(html);
	}
	main4_sc();
	function main4_sc(){
		var Ul = $('.line4_div').find('ul');
		var str = '';
		for(var i = 0; i < 27; i++){
			str += '<li><img src="img/EMO/emo'+(i+1)+'.jpeg"/></li>';
		}
		Ul[0].innerHTML = str;
	}
	//屏幕滚轮
	menuScroll();	
	function menuScroll(){
		var wrap = document.getElementById('wrap');
		var sec = wrap.children;
		var menu_a = document.getElementById('menu_a');
		var As = menu_a.children;
		
		var Height = window.innerHeight;
		for(var i = 0; i < sec.length; i++){
			sec[i].style.height = Height + 'px';
		}
		var onOff = true;	
		var num = 0;
		var aa = false;
		
		setTimeout(function(){
			aa = true;
		},3500);
		
		AddWheel();
		function AddWheel(){
			addWheel(document,function(down){
				if( aa ){
					if(onOff){
						onOff = false;
						As[num].className = '';
						if(down){
							num--;
							if(num < 0){
								num = 0;
							}
						}else{
							num++;
							if(num > sec.length - 1){
								num = sec.length - 1;
							}
						}
						As[num].className = 'active';
						wrap.style.top = -Height * num + 'px';
						setTimeout(function(){
							onOff = true;
						},1000);
					}
				}
				NumBer(num);
			});
		}
	//点击菜单
		for (var i = 0; i < As.length; i++) {
			As[i].index = i;
			As[i].onclick = function() {
				for (var i = 0; i < As.length; i++) {
					As[i].className = '';
				}
				this.className = 'active';
				wrap.style.top = -Height * this.index + 'px';
				num = this.index;
				NumBer(num);
			}
		}
	}

	function NumBer(num){
		if(num == 1){
			Mask2_1();
			main_h($('#main2'),arrB_main2,arrO_main2);
			//第二页时，重置遮罩宽高
			$('.mask').css({
				width:'',
				height:''
			});
			$('.line_p').css({
				left:'',
				top:'',
				opacity:''
			});
			
		}
		if(num == 2){
			setTimeout(function(){
				$('#main3').find('h2').eq(0).animate({
					height : '167'
				},500);
			},1000);
			var lis_1 = $('#main3_list').find('li').eq(0);
			var lis = $('#main3_list').find('li');
			mTween({
				'element':lis_1[0],
				'time':1000,
				'type':"bounceOut",
				'target':{'height':477},
				'callBack':function(){
					Cloud1(0);
				}
			});
			cloud_none();
			lis.css({
				height:'',
				display:'',
				opacity:''
			});
			
		}
		if(num == 3){
			Mask4_1();
			main_h($('#main4'),arrB_main4,arrO_main4);
			$('.mask').css({
				width:'',
				height:''
			});
			$('.q').css({
				opacity:'',
				top:''
			});
		}
	}
	


	
	//main2头部点击
	var arrB_main2 = [Mask2_1,Mask2_2,Mask2_3,Mask2_4];
	var arrO_main2 = [recover2_1,recover2_2,recover2_3,recover2_4];
	var arrB_main4 = [Mask4_1,Mask4_2,Mask4_3,Mask4_4];
	var arrO_main4 = [recover4_1,recover4_2,recover4_3,recover4_4];
	
	main_h($('#main2'),arrB_main2,arrO_main2);
	main_h($('#main4'),arrB_main4,arrO_main4);
	function main_h(id,arrB,arrO){
		var main2_a = id.find('h2').eq(0).find('a');

		main2_a.each(function(i,elem){
			$(elem).attr('index',i);
		})
		var oldObj = $(main2_a.eq(0)).attr('index');
		var onOff = true;
		main2_a.off().on('click',function(){
			if(onOff){
//				console.log($(this).attr('index'))
				
				if($(this).attr('index') == oldObj){
					return;				
				}
				
				var that = $(this);
				arrO[parseInt(oldObj)](function(){
	//				console.log(arrB[parseInt(that.attr('index'))])
					arrB[parseInt(that.attr('index'))]();
				});
				
				oldObj = $(this).attr('index');
			}
		})
		
		
	}
	//遮罩--->main4
	function Mask4_1(){
		var mask4_1 = $('#line4_1').find('.mask');
		$('#line4_4').css({display : 'none'});
		$('#line4_3').css({display : 'none'});
		$('#line4_2').css({display : 'none'});
		$('#line4_1').css({display : 'block'});
		mask4_1.eq(0).stop().animate({height : '35'},200,function(){
			mask4_1.eq(0).animate({width : '10'},300,function(){
				mask4_1.eq(0).animate({height : '0'},200,function(){
					$('.line4_div').css({display: 'block'});
					$('.line4_div').animate({
						opacity: '1',
						top: '95'
					});
				});
			});
		});
	}
	function Mask4_2(){
		var mask4_2 = $('#line4_2').find('.mask');
		$('#line4_2').css({display : 'block'});
		mask4_2.eq(0).animate({height : '28'},200,function(){
			mask4_2.eq(0).animate({width : '10'},500,function(){
				mask4_2.eq(0).animate({height : '0'},200,function(){
					$('.line4_ul').css({display: 'block'}),
					$('.line4_ul1').animate({top: '0',opacity: 1},300,function(){
						$('.line4_ul2').animate({top: '188',opacity: 1},300);
					});
				});
			});
		});
	}
	function Mask4_3(){
		var mask4_3 = $('#line4_3').find('.mask');
		$('#line4_3').css({display : 'block'});
		mask4_3.eq(0).animate({height : '44'},100,function(){
				mask4_3.eq(0).animate({width : '10'},500,function(){
					mask4_3.eq(0).animate({height : '0'},200)
				});
				mask4_3.eq(1).animate({height : '10'},500,function(){
					mask4_3.eq(1).animate({width : '0'},200,function(){
						$('.line_img').css({display: 'block'}),
						$('.line_img').animate({top: '63',opacity: '1'},300);
					})
				})
		});
	}
	function Mask4_4(){
		var mask4_4 = $('#line4_4').find('.mask');
		$('#line4_4').css({display : 'block'});
		mask4_4.eq(0).animate({height : '28'},200,function(){
			mask4_4.eq(0).animate({width : '10'},500,function(){
				mask4_4.eq(0).animate({height : '0'},200,function(){
					$('.line_game').animate({top: '83',opacity: '1'},300);
				});
			});
		});
	}
	function recover4_4(fn){
		var mask4_4 = $('#line4_4').find('.mask');
		$('.line_game').animate({top: '140',opacity: '0'},300,function(){
			mask4_4.eq(0).animate({height : '28'},100,function(){
				mask4_4.eq(0).animate({width : '599'},500,function(){
					mask4_4.eq(0).animate({height : '85'},200,function(){
						$('#line4_4').css({display : 'none'});
						fn && fn();
					})
				})
			})
		});
	}
	//回
	function recover4_3(fn){
		var mask4_3 = $('#line4_3').find('.mask');
		$('.line_img').animate({opacity: '0',top: '75'},300,function(){
			mask4_3.eq(1).animate({width : '80'},200,function(){
				mask4_3.eq(1).animate({height : '360'},500)
			})
			mask4_3.eq(0).animate({height : '36'},200,function(){
				mask4_3.eq(0).animate({width : '582'},500,function(){
					mask4_3.eq(0).animate({height : '62'},100,function(){
						$('#line4_3').css({display : 'none'});
						fn && fn();
					})
				})
			});
		});
	}
	function recover4_2(fn){
		var mask4_2 = $('#line4_2').find('.mask');
		$('.line4_ul').css({display: 'none'})
		$('.line4_ul2').animate({opacity: '0',top: '158'},200,function(){
			$('.line4_ul1').animate({opacity: '0',top: '-30'},200,function(){
				mask4_2.eq(0).animate({height : '28'},100,function(){
					mask4_2.eq(0).animate({width : '551'},500,function(){
						mask4_2.eq(0).animate({height : '108'},200,function(){
								$('#line4_2').css({display : 'none'});
								fn && fn();
						});
					})
				})
			})
		});
	}
	function recover4_1(fn){
		var mask4_1 = $('#line4_1').find('.mask');
		$('.line4_div').animate({opacity: '0',top: '160'},200,function(){
			mask4_1.eq(0).animate({height : '35'},100,function(){
				mask4_1.eq(0).animate({width : '205'},300,function(){
					mask4_1.eq(0).animate({height : '95'},200,function(){
						$('#line4_1').css({display : 'none'});
						fn && fn();
					})
				})
			})
		});
	}
	
	
	
	//遮罩--->main2
	function Mask2_4(){
		var mask2_4 = $('#line2_4').find('.mask');
		$('#line2_4').css({display : 'block'});
		mask2_4.eq(0).animate({height : '56'},400,function(){
			mask2_4.eq(0).animate({width : '16'},200,function(){
				mask2_4.eq(0).animate({height : '0'},200,function(){
					mask2_4.eq(1).animate({width: '0'},400,function(){
						$('#line_p4').css({display : 'block'}),
						$('#line_p4').animate({
							opacity:'.9',
							left: '170'
						},300);
					});
				});
			});
		});
	}
	function Mask2_3(){
		var mask2_3 = $('#line2_3').find('.mask');
		$('#line2_3').css({display : 'block'});
		mask2_3.eq(0).animate({height : '48'},200,function(){
			mask2_3.eq(0).animate({width: '16'},300,function(){
				mask2_3.eq(0).animate({height : '0'},200,function(){
					$('#line_p3').css({display : 'block'}),
					$('#line_p3').animate({
						opacity:'.5',
						top: '80'
					},300);
				});
			});
		});
	}
	function Mask2_2(){
		var mask2_2 = $('#line2_2').find('.mask');
		$('#line2_2').css({display : 'block'});
		mask2_2.eq(0).animate({height : '174'},200,function(){
			mask2_2.eq(0).animate({width: '14'},200,function(){
				mask2_2.eq(0).animate({height : '0'},200,function(){
					mask2_2.eq(1).animate({width : '0'},300,function(){
						$('#line_p2').css({display : 'block'}),
						$('#line_p2').animate({
							opacity:'1',
							top: '235'
						},300);
					});
				});
			});
		});
	}
	function Mask2_1(){
		var mask_2 = $('#line_2').find('.mask');
		$('#line2_4').css({display : 'none'});
		$('#line2_3').css({display : 'none'});
		$('#line2_2').css({display : 'none'});
		$('#line_2').css({display : 'block'});
		mask_2.eq(0).stop().animate({height : '0'},400,function(){
			mask_2.eq(1).animate({width : '0'},200,function(){
				mask_2.eq(2).animate({height : '0'},200),
				mask_2.eq(3).animate({height : '0'},200,function(){
					mask_2.eq(4).animate({width : '0'},150,function(){
						$('#line_p1').css({display : 'block'}),
						$('#line_p1').animate({
							opacity:'.5',
							left: '248'
						},300);
					});
				});
			});
		});
	}
	////////////////////////////////////////////
	function recover2_4(fn){
		var mask2_4 = $('#line2_4').find('.mask');
		$('#line_p4').animate({opacity:'0',top: '30'},100,function(){
			mask2_4.eq(1).animate({width: '170'},200,function(){
				mask2_4.eq(0).animate({height : '56'},200,function(){
					mask2_4.eq(0).animate({width : '126'},200,function(){
						mask2_4.eq(0).animate({height : '213'},200,function(){
							$('#line2_4').css({display : 'none'});
							fn && fn();
						})
					})
				})
			});
		});
	}
	function recover2_3(fn){
		var mask2_3 = $('#line2_3').find('.mask');
		$('#line_p3').animate({opacity:'0',top: '110'},200,function(){
			mask2_3.eq(0).animate({height : '48'},150,function(){
				mask2_3.eq(0).animate({width: '224'},200,function(){
					mask2_3.eq(0).animate({height : '80'},100,function(){
						$('#line2_3').css({display : 'none'});
						fn && fn();
					});
				});
			});
		});
	}
	function recover2_2(fn){
		var mask2_2 = $('#line2_2').find('.mask');
		$('#line_p2').animate({opacity:'0',top: '180'},200,function(){
			mask2_2.eq(1).animate({width : '155'},200,function(){
				mask2_2.eq(0).animate({height : '174'},100,function(){
					mask2_2.eq(0).animate({width: '125'},100,function(){
						mask2_2.eq(0).animate({height : '247'},200,function(){
							$('#line2_2').css({display : 'none'});
							fn && fn();
						})
					})
				})
			});
		});
	}
	function recover2_1(fn){
		var mask_2 = $('#line_2').find('.mask');
		$('#line_p1').animate({opacity:'0',left: '300'},100,function(){
			$('.line_p').css({display : 'none'}),
			mask_2.eq(4).animate({width : '61'},100,function(){
				mask_2.eq(3).animate({height : '114'},100),
				mask_2.eq(2).animate({height : '114'},100,function(){
					mask_2.eq(1).animate({width: '155'},200,function(){
						mask_2.eq(0).stop().animate({height: '279'},300,function(){
							$('#line_2').css({display : 'none'});
							fn && fn();
						});
					});
				});
			})
		});
		
	}
	
	
	
	//云朵移动
	cloudList();
	function cloudList() {
		sc_w = $(window).width();
		sc_h = $(window).height();
	
		for (i = 1; i < 7; i++){
			$(".cloud_box").append(function(n) {
				return "<img src='img/cloud.png' id='cloud_" + i + "' />";
			});
		}
		$("#cloud_1").css({
			'position': 'absolute',
			"left": (sc_w / 2 - 290) + "px",
			"top": (sc_h / 2 - 100) + "px"
		});
		$("#cloud_2").css({
			'position': 'absolute',
			"left": (sc_w / 2 + 250) + "px",
			"top": (sc_h / 2 - 150) + "px"
		});
		$("#cloud_3").css({
			'position': 'absolute',
			"left": (sc_w / 2 - 250) + "px",
			"top": (sc_h / 2 - 220) + "px"
		});
		$("#cloud_4").css({
			'position': 'absolute',
			"left": (sc_w / 2 - 350) + "px",
			"top": (sc_h / 2 - 150) + "px"
		});
		$("#cloud_5").css({
			'position': 'absolute',
			"left": (sc_w / 2 + 200) + "px",
			"top": (sc_h / 2 + 50) + "px"
		});
		$("#cloud_6").css({
			'position': 'absolute',
			"left": (sc_w / 2 - 220) + "px",
			"top": (sc_h / 2 + 100) + "px"
		});
	
		setInterval(function() {
			var c1 = Math.round(Math.random(0) * 40) - 20;
			var c2 = Math.round(Math.random(0) * 40) - 20;
			var c3 = Math.round(Math.random(0) * 40) - 20;
			var c4 = Math.round(Math.random(0) * 40) - 20;
			var c5 = Math.round(Math.random(0) * 40) - 20;
			var c6 = Math.round(Math.random(0) * 40) - 20;
			$("#cloud_1").animate({
				left: [$("#cloud_1").offset().left + c1, "linear"]
			}, 1000);
			$("#cloud_2").animate({
				left: [$("#cloud_2").offset().left + c2, "linear"]
			}, 1000);
			$("#cloud_3").animate({
				left: [$("#cloud_3").offset().left + c3, "linear"]
			}, 1000);
			$("#cloud_4").animate({
				left: [$("#cloud_4").offset().left + c4, "linear"]
			}, 1000);
			$("#cloud_5").animate({
				left: [$("#cloud_5").offset().left + c5, "linear"]
			}, 1000);
			$("#cloud_6").animate({
				left: [$("#cloud_6").offset().left + c6, "linear"]
			}, 1000);
		}, 50);
	}
	

	
	//第一页
	main1();
	function main1(){
		setTimeout(function(){
			$('.blue1').animate({bottom : '0'},300);
		},1100);
		setTimeout(function(){
			$('.blue2').animate({top : '355px'},100);
		},1440);
		setTimeout(function(){
			$('.gray').animate({top: '346px'},150);
		},1900);
		setTimeout(function(){
			$('.yellow').animate({opacity : '1'},500);
		},2500);
		setTimeout(function(){
			$('.home').animate({opacity : '1'},200);
		},3000);
		setTimeout(function(){
			$('.text_wz').animate({top: '550px'},200);
		},2500);
		setTimeout(function() {
			$('#line_1').animate({
				display: 'block',
				height: '102px'
			},500);
			$('#main_menu').animate({
					top: '392px'
				}, 500,
				function() {
					menuMove();
			});
			$('#nav').animate({top: '0'},500);
		}, 3500);
		setTimeout(function(){
			$('.blue2').append('<span></span><span></span>');
		},4000);
	
	
	}
	
	//main_menu移动效果
	function menuMove(){
		setInterval(function(){
			var M = Math.random()*5+2;
			var N = Math.random()*5+2;
			var A = Math.random()*5+2;
			var B = Math.random()*5+2;
			$('#main_menu').animate({
				top : $('#main_menu').offset().top + M + 'px',
				left : $('#main_menu').offset().left + N + 'px'
			},900,function(){
				$('#main_menu').animate({
					top : $('#main_menu').offset().top - A + 'px',
					left : $('#main_menu').offset().left - B + 'px'
				})
			});
		},900);	
	}
	
	//第三页
	var lis_a = $('#main3_list').find('li');
	main3_list(lis_a);
	function main3_list(id){
		id.on('click',function(){
			var index = $(this).index();
			$.each(id,function(i,elem){
				cloud_none();
				mTween({
					'element':elem,
					'time':500,
					'type':"bounceOut",
					'target':{'height':190}
				});
			});
			mTween({
				'element':this,
				'time':500,
				'type':"bounceOut",
				'target':{'height':477},
				'callBack':function(){
					Cloud1(index);
				}
			});
			
		})
		id.on('mouseover',function(){
			if($(this).height() == 190){
				$(this).stop().animate({height : 205},200);
			}
		});
		id.on('mouseout',function(){
			if($(this).height() <= 205  ){
				$(this).animate({height : 190},200);				
			}
		});
		
		
	}	
	function Cloud1(index){
		$('.lis_div').eq(index).css({display : 'block'});
		if(index == 0 | index == 1){
			$('.lis_div').eq(index).animate({
				opacity : 1,
				left : '150'
			});
		}else{
			$('.lis_div').eq(index).animate({
				opacity : 1,
				left : '-355'
			});
		}
		
	}
	function cloud_none(){
		$('.lis_div').css({
			display : '',
			opacity : 0,
			left: ''
		});
	}
	
	//第二页
	Dateline();
	function Dateline(){
		var A = $('#line_p2').find('a');
		var Ul = $('#line2_list').find('ul');
		var li_w = $('.dateline').innerWidth()+20;
		var num = 0;
		A.eq(0).on('click',function(){
			num--;
			if(num < 0){
				num = 0;
				alert('到头啦');
			}
			Ul.animate({left: -num*li_w});
		});
		A.eq(1).on('click',function(){
			num++;
			if(num > 24){
				num = 24;
			}
			Ul.animate({left: -num*li_w});
		});
	}
	
	
};
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

