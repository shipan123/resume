/**
 * Created by Administrator on 2016/8/30.
 */
var xiaoMi=document.getElementById('xiaoMi');
var uMi=document.getElementById('underMi');
var hongMi=document.getElementById('hongMi');
var hong=document.getElementById('underHong');
var biji=document.getElementById('bijiben');
var ubj=document.getElementById('underBijiben');
var ds=document.getElementById('ds');
var uds=document.getElementById('uds');
var hz=document.getElementById('hz');
var uhz=document.getElementById('uhz');
var ly=document.getElementById('ly');
var uly=document.getElementById('uly');
var zn=document.getElementById('zn');
var uzn=document.getElementById('uzn');
uMi.onmouseover=xiaoMi.onmouseover=function(){
    animate(uMi,{height:229},200)
        //function(){
        //var siblings=utils.css(siblings);
        //for(var i=0;i<siblings.length;i++){
        //    if(xiaoMi.style.height>0){
        //        siblings[i].onmouseover=null
        //    }
        //}
    //})

}
uMi.onmouseout=xiaoMi.onmouseout=function(){
    animate(uMi,{height:0})
    //utils.css(uMi,'display','none')
}
hong.onmouseover=hongMi.onmouseover=function(){
    animate(hong,{height:229})
}
hong.onmouseout=hongMi.onmouseout=function(){
    animate(hong,{height:0})
}
ubj.onmouseover=biji.onmouseover=function(){
    animate(ubj,{height:229})
}
ubj.onmouseout=biji.onmouseout=function(){
    animate(ubj,{height:0})
}
ds.onmouseover=uds.onmouseover=function(){
    animate(uds,{height:229})
}
ds.onmouseout=uds.onmouseout=function(){
    animate(uds,{height:0})
}
hz.onmouseover=uhz.onmouseover=function(){
    animate(uhz,{height:229})
}
hz.onmouseout=uhz.onmouseout=function(){
    animate(uhz,{height:0})
}
ly.onmouseover=uly.onmouseover=function(){
    animate(uhz,{height:229})
}
ly.onmouseout=uly.onmouseout=function(){
    animate(uhz,{height:0})
}
zn.onmouseover=uzn.onmouseover=function(){
    animate(uzn,{height:229})
}
zn.onmouseout=uzn.onmouseout=function(){
    animate(uzn,{height:0})
}
//轮播图
var oDiv=document.getElementById('banner');
var aDiv=oDiv.getElementsByTagName('div');
var aLi=oDiv.getElementsByTagName('li');
var nL=oDiv.getElementsByTagName('a')[0];
var nR=oDiv.getElementsByTagName('a')[1];
utils.css(aDiv[0],'zIndex',1)
utils.css(aDiv[0],'opacity',1)
var n=0;
clearInterval(oDiv.timer)
oDiv.timer=setInterval(start,1200)
function start(){
    n++
    if(n>=aDiv.length){
        n=0
    }
    bannerShow()
}
function bannerShow(){
    for( var i=0;i<aDiv.length;i++){
    if(i===n){
        utils.css(aDiv[i],'zIndex',1)
        animate(aDiv[i],{opacity:1},500,function(){
            var siblings=utils.siblings(this)
            for(var i=0;i<siblings.length-3;i++){
                animate(siblings[i],{opacity:0})
                animate(siblings[2],{opacity:0})
                animate(siblings[0],{opacity:0})
            }
        })
    } else{
        utils.css(aDiv[i],'zIndex',0)
    }
    }
    bannerJd()
}
//焦点自动轮播
function bannerJd(){
    for(var i=0;i<aLi.length;i++){
        aLi[i].className=i===n?'on':null
    }
}
//焦点点击轮播
oDiv.onmouseover=function(){
    clearInterval(oDiv.timer)
}
oDiv.onmouseout=function(){
    oDiv.timer=setInterval(start,2000)
}
onBanner()
function onBanner(){
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i
        aLi[i].onclick=function(){
            n=this.index
            bannerShow()
        }
    }
}
nL.onclick=function(){
    n--
    if(n<0){
        n=aDiv.length-1
    }
    bannerShow()
}
nR.onclick=start
//左边的hover
var l=document.getElementById('zb')
var leftAul=l.getElementsByTagName('li')
var lX=document.getElementById('xs')
var xs=lX.getElementsByTagName('ol')
for(var i=0;i<leftAul.length;i++){
    (function(i){
        xs[i].onmousemove=leftAul[i].onmouseover=function(){
            xs[i].style.display='block'
        }
        //xs[i].onmousemove=function(){
        //    xs[ i].style.display='block'
        //}
        leftAul[i].onmouseout=xs[i].onmouseout=function(){
            xs[ i].style.display='none'
        }
        //leftAul[i].onmouseout=function(){
        //    xs[i].style.display='none'
        //}
    })(i)

}
var star=document.getElementById('star');
var aAll=star.getElementsByTagName('li');
var l=document.getElementById('l');
var r=document.getElementById('r');
//star.m=0;
l.onmouseover=function(){

        l.style.backgroundPosition='-101px -113px'

}
l.onmouseout=function(){
    //if(m=0){
    //    return
    //}else{
    l.style.backgroundPosition='-77px -113px '

}
//var bOk=false
l.onclick=function(){
    //if(bOk) return
    if( l.style.backgroundPosition='-101px -113px'){
        animate(star,{left:0})
      //bOk=true
    }
}
r.onmouseover=function(e){
    e=e||window.event
    e.preventDefault? e.preventDefault(): e.returnValue=false
    //if(m=0){
    //if(l.style.backgroundPosition='-82px -144px '){
    //    l.style.backgroundPosition='-82px -144px '
    //}else{
        r.style.backgroundPosition='-110px -144px'//红
    //}

    //}
    //if(m=1){
    //    r.style.backgroundPosition='-82px -144px'
    //}


}
r.onmouseout=function(){
    r.style.backgroundPosition='-88px 5px'  //亮
}
r.onclick=function(e){
    e=e||window.event
    e.preventDefault? e.preventDefault(): e.returnValue=false

 if( r.style.backgroundPosition='-110px -144px'){
     r.style.backgroundPosition='-82px -144px'
     animate(star,{left:-1226})
     if(l>=1){
         l=1
     }
 }else{
     r.style.backgroundPosition='-82px -144px'
 }

    //r.style.backgroundPosition='-82px -144px'
    //m++
}

for(var i=0;i<aAll.length;i++){
    switch (i%3){
        case 0:
            aAll[i].style.borderTopColor='#ffac13 ';
            break;
        case 1:
            aAll[i].style.borderTopColor='#83c44e';
            break;
        default :
            aAll[i].style.borderTopColor=' #2196f3 ';
    }
}
var s=document.getElementById('sm');
var sS= s.getElementsByTagName('li');
var x=document.getElementById('xm');
var xS= x.getElementsByTagName('ul');

for(var i=0;i<sS.length;i++){
    (function(i){
        sS[i].onmouseover=function(){
//xS[i].style.display='block'
            utils.css(xS[i],'display','block')
            //utils.css(sS[i],' textDecoration','underLine')

            var siblings=utils.siblings(xS[i])
          for(var j=0;j<siblings.length;j++){
              if(siblings[j].tagName.toLowerCase()=='ul'){
                 siblings[j].style.display='none'
                 //siblings[j].style.textDecoration='none'
              }
          }
        }
    })(i)
}
var ss=document.getElementById('smm');
var ssS= ss.getElementsByTagName('li');
var xx=document.getElementById('xmm');
var xxS= xx.getElementsByTagName('ul');

for(var i=0;i<ssS.length;i++){
    (function(i){
        ssS[i].onmouseover=function(){
//xS[i].style.display='block'
            utils.css(xxS[i],'display','block')
            var siblings=utils.siblings(xxS[i])
            for(var j=0;j<siblings.length;j++){
                if(siblings[j].tagName.toLowerCase()=='ul'){
                    siblings[j].style.display='none'
                }
            }
        }
    })(i)
}
//处理下面轮播
(function(){
    var n=0;
    var left2=document.getElementById('left2');
    var right2=document.getElementById('right2');
    var star2=document.getElementById('star2');
    var lis=star2.getElementsByTagName('li');
    left2.onclick=function(){

        n--;
        if(n<0){
            n=0;
            return
        }
        //star2.style.left=-n*1226+'px';
        animate(star2,{left:-n*1226})
    };
    right2.onclick=function(){


        n++;
        if(n>(lis.length)/5-1){
            n=(lis.length)/5-1;
            return
        }
        //star2.style.left=-n*1226+'px';
        animate(star2,{left:-n*1226},800)
    }
})();
//(function(){
//    var n=0;
//    var left2=document.getElementById('left2');
//    var right2=document.getElementById('right2');
//    var star2=document.getElementById('star2');
//    var lis=star2.getElementsByTagName('li');
//    left2.onclick=function(){
//
//        n--;
//        if(n<0){
//            n=0;
//            return
//        }
//        //star2.style.left=-n*1226+'px';
//        animate(star2,{left:-n*1226})
//    };
//    right2.onclick=function(){
//
//
//        n++;
//        if(n>(lis.length)/5-1){
//            n=(lis.length)/5-1;
//            return
//        }
//        //star2.style.left=-n*1226+'px';
//        animate(star2,{left:-n*1226},800)
//    }
//})();
//小米里面的轮播
//(function(){
//console.log(123)
//})()
(function() {
    var ff4 = document.getElementById('md');
    var childs = ff4.querySelectorAll('ul>li');
for(var i=0;i<childs.length;i++){
    var cur=childs[i];
    var left4=cur.getElementsByTagName('a')[0];
    var right4=cur.getElementsByTagName('a')[1];
    //var right4=document.getElementById('right3');
    //var cir=document.getElementById('cir');
    var ems4= cur.getElementsByTagName('em');
    var oo4=cur.getElementsByTagName('ol')[0];
    var liss4=oo4.getElementsByTagName('li')
    //this.oo=0;
    var n= 0;

    left4.onclick=function(){
        n--;
        if(n<0){
            n=0;
            return
        }
        //star2.style.left=-n*1226+'px';
        animate(oo4,{left:-n*296},800,function(){


        })
        for(var i=0;i<ems4.length;i++){
            if(i==n){ems4[i].id='cur'}else{
                ems4[i].id=null
            }
        }
    };
    right4.onclick=function(){

        n++;
        if(n>liss4.length-1){
            n=liss4.length-1;
            return
        }
        //star2.style.left=-n*1226+'px';
        animate(oo4,{left:-n*296},800,function(){

        })
        for(var i=0;i<ems4.length;i++){
            if(i==n){ems4[i].id='cur'}else{
                ems4[i].id=null
            }
        }
        //ems[n].id='cur';
    }
    for(var i=0;i<ems4.length;i++){

        (function(i){
            ems4[i].onclick=function(){
                for(var j=0;j<ems4.length;j++){
                    ems4[j].id='';
                }
                ems4[i].id='cur'
                animate(oo4,{left:-i*296},800)
            }
        })(i)
    }
}
    console.log(cur)
})()
;(function() {
    var ff4 = document.getElementById('md');
    var childs = ff4.querySelectorAll('ul>li');
    for(var i=0;i<childs.length;i++){
        var cur=childs[1];
        var left4=cur.getElementsByTagName('a')[0];
        var right4=cur.getElementsByTagName('a')[1];
        //var right4=document.getElementById('right3');
        //var cir=document.getElementById('cir');
        var ems4= cur.getElementsByTagName('em');
        var oo4=cur.getElementsByTagName('ol')[0];
        var liss4=oo4.getElementsByTagName('li')
        //this.oo=0;
        var n= 0;

        left4.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return
            }
            //star2.style.left=-n*1226+'px';
            animate(oo4,{left:-n*296},800,function(){


            })
            for(var i=0;i<ems4.length;i++){
                if(i==n){ems4[i].id='cur2'}else{
                    ems4[i].id=null
                }
            }
        };
        right4.onclick=function(){

            n++;
            if(n>liss4.length-1){
                n=liss4.length-1;
                return
            }
            //star2.style.left=-n*1226+'px';
            animate(oo4,{left:-n*296},800,function(){

            })
            for(var i=0;i<ems4.length;i++){
                if(i==n){ems4[i].id='cur2'}else{
                    ems4[i].id=null
                }
            }
            //ems[n].id='cur';
        }
        for(var i=0;i<ems4.length;i++){

            (function(i){
                ems4[i].onclick=function(){
                    for(var j=0;j<ems4.length;j++){
                        ems4[j].id='';
                    }
                    ems4[i].id='cur2'
                    animate(oo4,{left:-i*296},800)
                }
            })(i)
        }
    }
})();
;(function() {
    var ff4 = document.getElementById('md');
    var childs = ff4.querySelectorAll('ul>li');
    for(var i=0;i<childs.length;i++){
        var cur=childs[2];
        var left4=cur.getElementsByTagName('a')[0];
        var right4=cur.getElementsByTagName('a')[1];
        //var right4=document.getElementById('right3');
        //var cir=document.getElementById('cir');
        var ems4= cur.getElementsByTagName('em');
        var oo4=cur.getElementsByTagName('ol')[0];
        var liss4=oo4.getElementsByTagName('li')
        //this.oo=0;
        var n= 0;

        left4.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return
            }
            //star2.style.left=-n*1226+'px';
            animate(oo4,{left:-n*296},800,function(){


            })
            for(var i=0;i<ems4.length;i++){
                if(i==n){ems4[i].id='cur3'}else{
                    ems4[i].id=null
                }
            }
        };
        right4.onclick=function(){

            n++;
            if(n>liss4.length-1){
                n=liss4.length-1;
                return
            }
            //star2.style.left=-n*1226+'px';
            animate(oo4,{left:-n*296},800,function(){

            })
            for(var i=0;i<ems4.length;i++){
                if(i==n){ems4[i].id='cur3'}else{
                    ems4[i].id=null
                }
            }
            //ems[n].id='cur';
        }
        for(var i=0;i<ems4.length;i++){

            (function(i){
                ems4[i].onclick=function(){
                    for(var j=0;j<ems4.length;j++){
                        ems4[j].id='';
                    }
                    ems4[i].id='cur3'
                    animate(oo4,{left:-i*296},800)
                }
            })(i)
        }
    }
})()
;(function() {
    var ff4 = document.getElementById('md');
    var childs = ff4.querySelectorAll('ul>li');
    for(var i=0;i<childs.length;i++){
        var cur=childs[3];
        var left4=cur.getElementsByTagName('a')[0];
        var right4=cur.getElementsByTagName('a')[1];
        //var right4=document.getElementById('right3');
        //var cir=document.getElementById('cir');
        var ems4= cur.getElementsByTagName('em');
        var oo4=cur.getElementsByTagName('ol')[0];
        var liss4=oo4.getElementsByTagName('li')
        //this.oo=0;
        var n= 0;

        left4.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return
            }
            //star2.style.left=-n*1226+'px';
            animate(oo4,{left:-n*296},800,function(){


            })
            for(var i=0;i<ems4.length;i++){
                if(i==n){ems4[i].id='cur4'}else{
                    ems4[i].id=null
                }
            }
        };
        right4.onclick=function(){

            n++;
            if(n>liss4.length-1){
                n=liss4.length-1;
                return
            }
            //star2.style.left=-n*1226+'px';
            animate(oo4,{left:-n*296},800,function(){

            })
            for(var i=0;i<ems4.length;i++){
                if(i==n){ems4[i].id='cur4'}else{
                    ems4[i].id=null
                }
            }
            //ems[n].id='cur';
        }
        for(var i=0;i<ems4.length;i++){

            (function(i){
                ems4[i].onclick=function(){
                    for(var j=0;j<ems4.length;j++){
                        ems4[j].id='';
                    }
                    ems4[i].id='cur4'
                    animate(oo4,{left:-i*296},800)
                }
            })(i)
        }
    }
    console.log(cur)
})()

//(function(){
//    var ff1=document.getElementById('ff3');
//    var left3=ff1.getElementsByTagName('a')[0];
//    var right3=ff1.getElementsByTagName('a')[1];
//    //var right3=document.getElementById('right3');
//    //var cir=document.getElementById('cir');
//    var ems= ff1.getElementsByTagName('em');
//    var oo=ff1.getElementsByTagName('ol')[0];
//    var liss=oo.getElementsByTagName('li')
//    //this.oo=0;
//    var n= 0;
//
//    left3.onclick=function(){
//        n--;
//        if(n<0){
//            n=0;
//            return
//        }
//        //star2.style.left=-n*1226+'px';
//        animate(oo,{left:-n*296},800,function(){
//
//
//        })
//        for(var i=0;i<ems.length;i++){
//            if(i==n){ems[i].id='cur'}else{
//                ems[i].id=null
//            }
//        }
//    };
//    right3.onclick=function(){
//
//        n++;
//        if(n>liss.length-1){
//            n=liss.length-1;
//            return
//        }
//        //star2.style.left=-n*1226+'px';
//        animate(oo,{left:-n*296},800,function(){
//
//        })
//        for(var i=0;i<ems.length;i++){
//            if(i==n){ems[i].id='cur'}else{
//                ems[i].id=null
//            }
//        }
//        //ems[n].id='cur';
//    }
//    for(var i=0;i<ems.length;i++){
//
//        (function(i){
//            ems[i].onclick=function(){
//                for(var j=0;j<ems.length;j++){
//                    ems[j].id='';
//                }
//                ems[i].id='cur'
//                animate(oo,{left:-i*296},800)
//            }
//        })(i)
//    }
//    //console.log(n)
//    //for(var i=0;i<ems.length;i++){
//    //    if(i==n){
//    //        ems[i].id='cur'
//    //    }else{
//    //        ems[i].id='';
//    //    }
//    //}
//})()
//(function(){
//    var ff1=document.getElementById('ff3');
//    var left3=ff1.getElementsByTagName('a')[0];
//    var right3=ff1.getElementsByTagName('a')[1];
//    //var right3=document.getElementById('right3');
//    //var cir=document.getElementById('cir');
//    var ems= ff1.getElementsByTagName('em');
//    var oo=ff1.getElementsByTagName('ol')[0];
//    var liss=oo.getElementsByTagName('li')
//    //this.oo=0;
//    var n= 0;
//
//    left3.onclick=function(){
//        n--;
//        if(n<0){
//            n=0;
//            return
//        }
//        //star2.style.left=-n*1226+'px';
//        animate(oo,{left:-n*296},800,function(){
//
//
//        })
//        for(var i=0;i<ems.length;i++){
//            if(i==n){ems[i].id='cur'}else{
//                ems[i].id=null
//            }
//        }
//    };
//    right3.onclick=function(){
//
//        n++;
//        if(n>liss.length-1){
//            n=liss.length-1;
//            return
//        }
//        //star2.style.left=-n*1226+'px';
//        animate(oo,{left:-n*296},800,function(){
//
//        })
//        for(var i=0;i<ems.length;i++){
//            if(i==n){ems[i].id='cur'}else{
//                ems[i].id=null
//            }
//        }
//        //ems[n].id='cur';
//    }
//    for(var i=0;i<ems.length;i++){
//
//        (function(i){
//            ems[i].onclick=function(){
//                for(var j=0;j<ems.length;j++){
//                    ems[j].id='';
//                }
//                ems[i].id='cur'
//                animate(oo,{left:-i*296},800)
//            }
//        })(i)
//    }
//    //console.log(n)
//    //for(var i=0;i<ems.length;i++){
//    //    if(i==n){
//    //        ems[i].id='cur'
//    //    }else{
//    //        ems[i].id='';
//    //    }
//    //}
//})()
