
function bind() {
  window.cm = new CommentManager(document.getElementById('commentCanvas'));
  cm.init();
  cm.start();


  setInterval(function() {

    senddm(randomString(Math.random() * 16));

  }, 50); //1000为1秒钟

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
  var $chars = '这是一些自动弹幕文字,已经设置好的.正常应该是彩色的';  　　
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
