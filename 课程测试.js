

window.onload = function(){
//导航条
console.log(document.querySelector('[type="color"]').value);
var lis=document.querySelectorAll('.ul00>a>li');//获取所有导航条a标签下的li
var mainLis=[];//
var mains=document.querySelectorAll('body>main');
Array.prototype.forEach.call(mains,function(current){
	mainLis.push(current.className);
});
Array.prototype.forEach.call(lis,function(current,index){
	current.onclick=function(){
		if(document.querySelector('[data-block=true]')){
			bl=document.querySelector('[data-block=true]');
			bl.dataset.block='';
		}
		main=document.querySelector('.'+mainLis[index]);//关键点
		main.dataset.block='true';
	}
});


//for(i=0;i<lis.length;i++){
//	//current.onclick=letgo;
//	num = index
//	current.onclick=function(){
//		main=document.querySelector(arr[num]);
//		console.log(arr[num]);
//		main.style.display='block';
//	}
//}
//-----------------/----------------------///-------------
/*<script>
    window.onload = function()
    {
        var anony = function(i) {
            document.getElementById("c" + i).onclick = function(){
                changeNum(i);
            };
            document.getElementById("b" + i).onclick = function(){
                changeNumA(i);
            };
        };
         
        for (var i = 0; i < 3; i++) {
            anony(i);
        }
    };
 
    function changeNum(i)
    {
        var num = document.getElementById("num" + i);
        num.value = parseInt(num.value) + 1;
    };
     
    function changeNumA(i)
    {
        var num = document.getElementById("num" + i);
        num.value = parseInt(num.value) - 1;
        num.value = num.value < 0 ? 0 : num.value;
    };
 
</script>
<body>
<form action="#" method="post">
    <% for (int i = 0; i < 3; i++){ %>
        <input type="button" id="b<%=i %>" value="-"/>
        <input type="text" id="num<%=i %>" readonly="readonly" value="<%=i+1 %>" style="width: 20px"/>
        <input type="button" id="c<%=i %>" value="+"/>
    <%} %>
</form>
</body>*/
	//--------------//-----------------//
/*	  for(var i=0;i<3;i++){
2             $('.'+config[i].classNm).click({index:i},function(e){
3                 var _this = $(this),
4                     pid = $(this).parents('tr').find(".pid").text();
5                 if(confirm("确定要"+config[e.data.index].msg+"吗？")){
6                     EditRequest(pid,config[e.data.index].type,_this);
7                 }
8             })
9         };*/
//-------------------------//-----------//



//-------------------------------------------
//开始--01html5图片拖放
	var one01=document.querySelector('.one01');
	var two01=document.querySelector('.two01');
	//拖拽物体的事件
	one01.ondragstart=function(e){
		e.dataTransfer.setData('text','后盾网');
		one01.innerHTML+='<br/>开始';
	}
	one01.ondrag=function(){
		//one01.innerHTML+='\t移动';
	}
	one01.ondragend=function(){
		one01.innerHTML+='<br/>完成了';
	}
	//投放区的事件
	two01.ondragenter=function(e){
		two01.innerHTML+='<br/>进入了';
		e.preventDefault();//阻止默认事件
	}
	two01.ondragover=function(e){
		//two01.innerHTML+='<br/>移动';
		e.preventDefault();
	}
	two01.ondragleave=function(){
		two01.innerHTML+='<br/>离开了';
	}
	two01.ondrop=function(){
		two01.innerHTML+='<br/>投放成功了';
		one01.appendChild(two01);
		alert(e.dataTransfer.getData('text'));
	}
	
	var box01=document.querySelector('.box01');
	var con01=document.querySelector('.con01');
	var lis01=document.querySelectorAll('.con01 ul li');
	for(i=0;i<lis01.length;i++){
		lis01[i].draggable=true;
		lis01[i].flag=false;
		//拖拽开始时flag改为true
		lis01[i].ondragstart=function(){
			this.flag=true;
		}
		//拖拽结束后flag改为false
		lis01[i].ondragend=function(){
			this.flag=false;
		}
}
	box01.ondragenter=function(e){
		e.preventDefault();//阻止默认事件
	}
	box01.ondragover=function(e){
		e.preventDefault();
	}
	box01.ondragleave=function(){
	}
	box01.ondrop=function(){
		for(i=0;i<lis01.length;i++){
			if(lis01[i].flag){
				box01.appendChild(lis01[i]);
			}
		}
	}

	con01.ondragenter=function(e){
		e.preventDefault();//阻止默认事件
	}
	con01.ondragover=function(e){
		e.preventDefault();
	}
	con01.ondragleave=function(){
	}
	con01.ondrop=function(){
		for(i=0;i<lis01.length;i++){
			if(lis01[i].flag){
				con01.appendChild(lis01[i]);
			}
		}
	}
//结束--01html5图片拖放
//------------------------------------------------------------
//开始--02html5拖拽异步上传
var box02=document.querySelector('.box02');
		console.log(box02);
	box02.ondragenter=function(e){
		e.preventDefault();
	}
	box02.ondragover=function(e){
		e.preventDefault();
		box02.innerHTML='请松开鼠标';
	}
	box02.ondragleave=function(e){
		e.preventDefault();
		box02.innerHTML='请拖入上传的文件';
	}
	box02.ondrop=function(e){
//		alert(e.dataTransfer.files);
//		alert(e.dataTransfer.files.length);
//		alert(e.dataTransfer.files[0].name);
//		alert(e.dataTransfer.files[0].type);
//		alert(e.dataTransfer.files[0].size);
		//异步上传可以直接调用函数ajax
		//异步上传步骤解析
		//第一步,用一个变量保存文件对象
		var file=e.dataTransfer.files[0];
		//第二步,调用FormData方法
		var formData=new FormData();
		formData.append('aa',file);
		var xml=new XMLHttpRequest();
		xml.open('post','课程测试.php');
		xml.send(formData);
		e.preventDefault();

	}
//结束--02html5拖拽异步上传
//------------------------------------------------------------
//开始--03html5播放器带歌词
	var player = document.querySelector('#player03');//获取播放器对象(由music和lyric构成)
	var music = document.querySelector('.music03');//获取音频显示框对象
	var lyric = document.querySelector('.lyric03');//获取歌词框对象
	var rows = document.querySelector('.rows03');//获取歌词行对象
	var rowsLis = null;//申明歌词未定义
	var lrcArr = [];//申明歌词数组未定义
	var timeProcess = function(time){
		var minute  = ~~(time/60);
		var seconds = ~~(time%60);
		return (minute > 10 ? minute : "0"+minute) + ":" + (seconds>10 ? seconds : "0"+seconds);
	}
	//给music加投放区事件
	//拖拽进入
	music.addEventListener('dragover',function(e){
		e.preventDefault();
		this.dataset.content='释放鼠标以添加';
	},false);
	// 拖拽放下
	music.addEventListener('drop', function(e) {
		e.preventDefault();
		var file = e.dataTransfer.files[0];
		var name = file.name;
		var type = file.type.split('/')[1];
		// 检查格式
		if (type === 'mp3') {
			var state = "暂停中";
			var fr = new FileReader();
			fr.readAsDataURL(file);
			// 读取文件完毕
			fr.onload = function() {
				music.dataset.content = '读取完毕，播放器正在准备';
				player.src = this.result;
				// 播放就绪
				player.oncanplay = function() {
					var duration = timeProcess(this.duration);
					music.dataset.content = '点击播放' + name;
					lyric.style.flex = 1;
					rows.innerHTML = '';
					lyric.dataset.content = '拖放一个lrc进来吧:)';
					music.onclick = function() {
						if (player.paused) {
							player.play(); //audio播放方法
							state = "播放中";
						} else {
							player.pause(); //audio暂停方法
							state = "暂停中";
						}
					};
					var i = 0;
					// 播放时间更新
					this.ontimeupdate = function() {
						var _this = this;
						lrcArr.forEach(function(current, index) {
							if (parseInt(current[0]) == parseInt(_this.currentTime)) {
								rowsLis[i].classList.remove('active');
								rowsLis[index].classList.add('active');
								i = index;
							}
						});

						music.dataset.content = state + timeProcess(this.currentTime) + '/' + duration;
					};
				};
			};
			// 读取进度
			fr.onprogress = function(e) {
				var iScale = e.loaded / e.total;
				music.dataset.content = '正在读取中' + ~~(iScale * 100) + '%';
			};

		} else {
			this.dataset.content = name + '无法进行播放，请更换一个文件再试！';
		}
	}, false);
	// 拖拽离开
        music.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.dataset.content = '拖放一个mp3进来吧:)';
        }, false);

        lyric.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.dataset.content = '释放鼠标以添加:)';
        }, false);
        lyric.addEventListener('drop', function(e) {
            e.preventDefault();
            var file = e.dataTransfer.files[0];
            var name = file.name;
            var type = file.type.split('/')[1];
            // 检查格式
            if (type === 'plain') {
                var fr = new FileReader();
                fr.readAsText(file, 'utf-8');
                fr.onload = function() {
                    lyric.dataset.content = '';
                    var tempArr = this.result.split('\n');
                    lrcArr = [];
                    tempArr.forEach(function(current) {
                        if (/^\[\d{2}:\d{2}\.\d{2}\]\w*/.test(current)) {
                            var tmp = current.split(']');
                            var tmp1 = tmp[0].slice(1).split(':');
                            var time = tmp1[0] * 60 + tmp1[1] * 1;
                            var lrc = tmp[1];
                            lrcArr.push([time, lrc]);
                        }
                    });
                    var html = '';
                    lrcArr.forEach(function(current) {
                        html += '<li>' + current[1] + '</li>';
                    });
                    rows.innerHTML = html;
                    rowsLis = rows.children;
                };
            } else {
                this.dataset.content = name + '无法进行解析，请更换一个文件再试！';
            }

        }, false);
        lyric.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.dataset.content = '拖放一个lrc进来吧:)';
        }, false);

//结束--03html5播放器带歌词
//------------------------------------------------------------
/*开始--04课程内容*/


/*结束--04课程内容*/
//------------------------------------------------------------
/*开始--05课程内容*/
	var list05 = document.querySelector('.list05');
	var lrc05 = document.querySelector('.lrc05');
	var playbox05 = document.querySelector('.playbox05');
	var wordbox05 = document.querySelector('.wordbox05');
	var mp3 = document.querySelector('#mp305');
	console.log(list05,lrc05,playbox05,wordbox05,mp3);
	var playarr05 = [] , wordarr05 = [] ,srcarr05 = [] ,tmparr05 = [] , barr05 = [] ;
	var timeProcess = function(time){
					var minute05  = ~~(time/60);
					var seconds05 = ~~(time%60);
					return (minute05 > 10 ? minute05 : "0"+minute05) + ":" + (seconds05>10 ? seconds05 : "0"+seconds05);
				}
/*结束--05课程内容*/
//------------------------------------------------------------
/*开始--*/
var bor = document.querySelector('.bor06');
	var go=document.querySelector('.go06');
	var move=document.querySelector('.move06');
	var all=document.querySelector('.all06');
	var d1a = document.querySelector('.d1a');
	var d2a = document.querySelector('.d2a');
	var d3a = document.querySelector('.d3a');
	var d4a = document.querySelector('.d4a');
	var d5a = document.querySelector('.d5a');
	var d6a = document.querySelector('.d6a');
	var num = 1;
	

	


	bor.onclick=function(){
		go.style.display='block';	
		move.style.transform='translateY(-14.3%)';
		d1a.style.display='block';
		
	}
		console.log(num)

	go.onclick = function(){
		move.style.transform='translateY(-'+(num+1)*13.3+'%)';
		num++;
		if(num==2){
			d2a.style.display='block';
		}
		if(num==3){
			d3a.style.display='block';
		}
		if(num==4){
			d4a.style.display='block';
		}
		if(num==5){
			d5a.style.display='block';
		}
		if(num>=6){
			num=6;
			move.style.transform='translateY(-'+num*13.3+'%)';
			d6a.style.display='block';
		}
	}

	
}

/*结束--*/


