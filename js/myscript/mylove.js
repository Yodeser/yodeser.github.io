function hideElement(elementID)
{
	var myele=document.getElementById(elementID);
	myele.style.display="none";
}

function showElement(elementID)
{
	var myele=document.getElementById(elementID);
	myele.style.display="block";
}

function loveTime(startDate){
     //   var EndTime= new Date('2014/02/6 19:46:00'); //截止时间 前端路上 http://www.51xuediannao.com/qd63/
        var EndTime= new Date(startDate); 
		var NowTime = new Date();
        var t =NowTime.getTime() - EndTime.getTime();

        var d=Math.floor(t/1000/60/60/24);
        var h=Math.floor(t/1000/60/60%24);
        var m=Math.floor(t/1000/60%60);
        var s=Math.floor(t/1000%60);
		var month=Math.ceil(d/30);
		var year=Math.ceil(d/365);
        document.getElementById("t_d").innerHTML = d ;
        document.getElementById("t_h").innerHTML = h ;
        document.getElementById("t_m").innerHTML = m ;
        document.getElementById("t_s").innerHTML = s ;
		
		document.getElementById("t_month").innerHTML = month ;
		document.getElementById("t_year").innerHTML = year ;
    }

setInterval("loveTime('2017/02/24 21:30:00')",1000);

var ap3 = new APlayer({
            element: document.getElementById('player3'),
            narrow: false,
            autoplay: true,
            showlrc: false,
            music: {
                title: '相思泪',
                author: '陈倩倩',
                url: 'https://img.blog.yodes.cn/%E9%99%88%E5%80%A9%E5%80%A9%20-%20%E7%9B%B8%E6%80%9D%E6%B3%AA.mp3',
                pic: 'https://img.blog.yodes.cn/17-3-10/72850066-file_1489078690590_aba.png'
            }
        }); 
		ap3.init();
