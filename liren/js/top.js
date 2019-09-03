//底部回到顶部
var oImges=document.getElementById("imges");
var oNo =document.getElementById("no")
var oTop =document.getElementById("top")
			window.onscroll=function(){
				var oT=document.documentElement.scrollTop || document.body.scrollTop;
//				console.log(oT)
				if(oT>300){
					oTop.style.display="block"
					oImges.style.display="block"
					oNo.style.display="block"
				}else{
					oImges.style.display="none"
					oNo.style.display="none"
				}
			}
			
			oImges.onclick=function(){	
				var timer=setInterval(function(){
					var oT=document.documentElement.scrollTop || document.body.scrollTop;
					window.scrollBy(0,-100);
					if(oT<=0){
						clearInterval(timer)
					}
				},50)
			}