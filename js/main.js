//		siteLoading.classList.remove('site-active')  加载完移除 样式
		setTimeout(function(){
			siteLoading.classList.remove('site-active')
		},0)
		let specialTags=document.querySelectorAll('[data-x]')//  返回这个选择器对应的所有的元素
			for(var i=0;i<specialTags.length; i++){
				specialTags[i].classList.add('offset')
				} 
		setTimeout(function(){
			findCloseAndmoveOfset()
		},1)
		
		window.onscroll=function(x){
		var scrollHeight=window.scrollY
			
			if (scrollHeight>15) {
				topNavBar.classList.add('addbar')
			} else{
				topNavBar.classList.remove('addbar')
			}
			//console.log(window.scrollY)	
			findCloseAndmoveOfset()
		}
		
		function findCloseAndmoveOfset(){
			let specialTags=document.querySelectorAll('[data-x]')//  返回这个选择器对应的所有的元素
			let minIndex=0
			for(var i=1;i<specialTags.length; i++){
				if(Math.abs(specialTags[i].offsetTop-window.scrollY)< Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
					//获取标记块 offsetTop
					//如果 #当前标签的距离# 减去 #滑动的距离#  <  我认为最小的那个
					minIndex=i
				}  
				for (let i=0; i<specialTags.length;i++) {
					specialTags[i].classList.remove('active')  //遍历所有 specialTags  删除active
				} 
			}
			//specialTags[minIndex].classList.add('active')  //添加active
			
			//离窗口最近的元素
			specialTags[minIndex].classList.remove('offset')
			let id=specialTags[minIndex].id  //获取当前标签ID
			let a =document.querySelector('a[href="#' + id + '"]')
			//console.log(a)
			let li=a.parentNode
			let brodersAndMe=li.parentNode.children
			for (let i=0; i<brodersAndMe.length;i++) {
				brodersAndMe[i].classList.remove('active')
				//console.log( brodersAndMe[i])
			}
				li.classList.add('active')
				
		}
		
		let liTags=document.getElementsByClassName('menuTigger')
		for (let i=0; i<liTags.length;i++) {
			liTags[i].onmouseenter=function(x){
				let li=x.currentTarget
				let	border=li.getElementsByTagName('ul')[0]
				border.classList.add('active')
			}
				liTags[i].onmouseleave=function(x){
				let li=x.currentTarget
				let	border=li.getElementsByTagName('ul')[0]
				border.classList.remove('active')	
			}
		}
		
	let aTags=document.querySelectorAll('nav>ul>li>a')
	
	
	function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
	}
	requestAnimationFrame(animate);
	//上面的一定要加  
	for (let i=0;i<aTags.length;i++) {
		aTags[i].onclick=function(x){
			x.preventDefault()  //阻止默认动作
		let a=x.currentTarget  //监听的元素
		let href=a.getAttribute('href')  //'获取a的href'
		let element=document.querySelector(href)  // a的href内的连接赋值给element
			if (element!=null) {				// 判断id是否为空
				let top = element.offsetTop   	//根据id 找到内容部分 id='' 获取内容部分距上面的高度
				
			//	let n=25  //移动次数
				//多长时间动一次 
			//	let duration= 500 / n  
				let currentTop=window.scrollY  //当前的scroll 距顶距离
				let targetTop=top-160    //目标高度
				let s=(targetTop-currentTop) // 滚动距离
				let t=Math.abs(s/100)*250  //滚动事件  取正  求绝对值
				if(t>150){t=400}			//最大时间为400
				var coords = { y:currentTop };  //起始位置
				var tween = new TWEEN.Tween(coords) 
	        		.to({ y: targetTop},t)  
	        		.easing(TWEEN.Easing.Quadratic.InOut)
	        		.onUpdate(function() { 
	        			window.scrollTo(0,coords.y)
	     	   })
	     	   .start(); 
				} 
		}
	}
	//				//每次动的距离  目标的top  减去当前的top
//				let distance=(targetTop-currentTop)/n
//				let i=0
//				let id=setInterval(()=>{
//					if(i===n){
//						window.clearInterval(id)  //清楚闹钟
//						return
//					}
//					i=i+1
//					window.scrollTo(0,targetTop+distance*i) // 当前高度+ 每次移动的距离*次数
//				},duration)
//							// 设置顶部间距