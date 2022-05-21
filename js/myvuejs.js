const Counter = {
  data() {
	return {
	  counter: 0,
	  msg:"这个是一个摸鱼Web",
	  my:"摸鱼"
	}
  },
  methods: {
	// win按钮点击
	win() {
		var element = document.getElementById('win');
		element.innerHTML = "这里将来会有一个加载画面";
		vm.fullScreen(element);
	},
	// android按钮点击
	android(){
		var element = document.getElementById('android');
		vm.fullScreen(element);
	},
	//显示元素，尝试使用常用浏览器API全屏
	fullScreen(element){
		
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.msRequestFullscreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullScreen();
		}
	}
	
  }
  
}
var vm = Vue.createApp(Counter).mount('#main')
