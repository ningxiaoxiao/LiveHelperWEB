
function bind() {
  window.cm = new CommentManager(document.getElementById('commentCanvas'));
  cm.init();
  cm.start();

/*
  setInterval(function() {

    senddm(randomString(Math.random() * 16));

  }, 10); //1000为1秒钟	
*/
}

function senddm(d) {
  var a = {
    "mode": 1,
    "text": d,
    "color": randomColor(),

  };
  cm.send(a);
}



function randomColor() {
  var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  if (rand.length == 6) {
    return rand;
  } else {
    return randomColor();
  }
}

function randomString(len) {　　
  len = len || 32;　　
  var $chars = 'js生成指定长度的随机字符串函数,可用于生成随机密码等用途,具体函数如下'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 　　
  var maxPos = $chars.length;　　
  var pwd = '';　　
  for (i = 0; i < len; i++) {　　　　
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
  }　　
  return pwd;
}

$().ready(function () {

  bind();
})