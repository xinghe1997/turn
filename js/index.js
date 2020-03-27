
//时间模块
function setTime(){
	clearInterval(time);
	var min = 4.25;
	var time = new Date();
	var H = time.getHours();
	var M = time.getMinutes();
	var S = time.getSeconds();
	setHMS(H,M,S,min);
	if(num == 112.5){
		num = 0;
	}
}
//设置div染色
function setHMS(H,M,S,min){
	var divs = My("td").children;
	var divLength = divs.length;
	for(var i = 0;i < divs.length; i++){
			console.log(num);
			divs[i].style.backgroundColor = "rgb("+Math.abs(H-i)*min+","+Math.abs(M-i-num)*min+","+Math.abs(S-i)*min+")";
		}
		num+=1;
		
	}
	
	
	


//加载完成每秒调用
onload = function(){
	window.num = 0.5;
	window.time = setInterval("setTime()",1000);
	generate();
}
function My(getId){
	return document.getElementById(getId);
}
//计算，并生成许愿
function generate(){
	//获取所有.td>div
	var divs = My("td").children;
	var divLength = divs.length;
	//计算每个应占比
	var divthan = 360/divLength;
	//遍历它
	for(var i = 0;i < divs.length; i++){
		divs[i].style.cssText = "transform: rotateY("+divthan*(i+1)+"deg) translateZ(360px)";// 
		console.log(i);
	}
	
}

