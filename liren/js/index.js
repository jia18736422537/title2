


//轮播图
var oBanner=document.getElementById("banner");
var oUl=oBanner.getElementsByTagName("ul")[0];
var oLi =oUl.getElementsByTagName("li");
var oLeft=document.getElementById("left");
var oRight=document.getElementById("right");
var oListq=document.getElementById("list-q");
var oLss=oListq.getElementsByTagName("li");
var num=0;
oRight.onclick=function(){
	num++
	if(num>oLi.length-1){
		num=0
	}
	for(var i=0;i<oLi.length;i++){
		oLi[i].className=""
		oLss[i].className=""
	}
	oLi[num].className="now"
	oLss[num].className="active"
}
oLeft.onclick=function(){
	num--;
	if(num<0){
		num=oLi.length-1;
	}
		for(var i=0;i<oLi.length;i++){
			oLi[i].className=""
			oLss[i].className=""
		}
		oLi[num].className="now"
		oLss[num].className="active"
}	
for(var i=0;i<oLss.length;i++){
	oLss[i].index=i;
	oLss[i].onclick=function(){
		for(var i=0;i<oLss.length;i++){
			oLi[i].className=""
			oLss[i].className=""
		}
		oLi[this.index].className="now"
		this.className="active"
		num=this.index;
	}
}
timer=setInterval(function(){
	oRight.onclick()
},2000);
oUl.onmousemove =function(){
	clearInterval(timer)
};
oUl.onmouseout=function(){
	timer=setInterval(function(){
	oRight.onclick()
},2000)
};



//下拉列表
var oToptitle = document.getElementById("tops-title");
var oUs = oToptitle.getElementsByTagName("ul")
var oUl=document.getElementById("list");
var oLl =oUl.getElementsByTagName("li");
//		console.log(oLl);

for(var i = 0; i < oUs.length; i++) {
	oUs[i].index = i;
	oLl[i].index = i;
	oLl[i].onmouseover = function() {
		for(var i = 0; i < oUs.length; i++) {
			oUs[i].style.display = "none";
		}
		oUs[this.index].style.display = "block";
		oToptitle.style.height = "260px"
		oToptitle.style.transition = "all 0.5s"
	}
	oLl[i].onmouseout = function() {
		oToptitle.style.height = "0px"
		oToptitle.style.transition = "all 1s"
	}
	oToptitle.onmouseover = function() {
		oToptitle.style.height = "260px"
		oToptitle.style.transition = "all 0.5s"
	}
	oToptitle.onmouseout = function() {
		oToptitle.style.height = "0px"
		oToptitle.style.transition = "all 0.5s"
	}
}










//厨具选择
var oHuan =document.getElementById("huan");
var oCot =document.getElementById("cot");
var oLit =oCot.getElementsByTagName("ul")
var oOl =document.getElementById("ol");
var oNows =oOl.getElementsByTagName("li")
var sum=0;
oHuan.onclick=function(){
	sum++;
	if(sum>oLit.length-1){
		sum=0;
	}
	for(var i=0;i<oLit.length;i++){
		for(var i=0;i<oLit.length;i++){
			oLit[i].className=""
		}
		oLit[sum].className="active"
	}
};
var zero=0;
for(var i=0;i<oNows.length;i++){
	zero++
	oNows[i].index=i;
	oNows[i].onclick=function(){
		
		if(zero>oNows.length-1){
			zero=0;
		}
		for(var i=0;i<oLit.length;i++){
			oLit[i].className=""
			oNows[i].className=""
			oNows[i].style.backgroundColor=""
			oNows[i].style.color="#666"
		}
		oLit[this.index].className="active"
		this.className="nows"
		oNows[this.index].style.color="white"
		zero=this.index;
		console.log(oNows)
	}
};



