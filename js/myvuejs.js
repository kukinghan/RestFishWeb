const Counter = {
  data() {
	return {
	  msg:"这个是一个摸鱼Web 按esc退出",
	  my:"摸鱼",
	  loding:0,
	}
  },
  methods: {
	// win按钮点击
	win() {
		var element = document.getElementById('win');
		vm.fullScreen(element);
		// 计时器
		setInterval( () => {
		  this.loding++;
		  // 重置计时
		  if ( this.loding == 99) {
		  	this.loding = 0;
		  }
		}, 9876);
	},
	// android按钮点击
	android(){
		// var element = document.getElementById('android');
		// vm.fullScreen(element);
		alert("还没做")
	},
	//显示元素，尝试使用常用浏览器API全屏
	fullScreen(element){
		alert("鼠标藏好❤开始摸鱼~.点击esc键退出");
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.msRequestFullscreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullScreen();
		};
		element.style.display = "block";
		// 退出全屏后隐藏
		setInterval( () => {
			// 获取当前全屏状态
			const isFullScreen = document.fullscreenElement;
			if (!isFullScreen) {
				element.style.display = "none";
			} 
		},50)
	}
	
  }
  
}
var vm = Vue.createApp(Counter).mount('#main')
