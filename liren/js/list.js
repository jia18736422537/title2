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
