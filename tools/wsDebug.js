/**
 * Created by Administrator on 2016/3/1.
 */
function log(m) {
    $('#log').prepend(m + '<br>');
}
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
function addchat(name, m) {

    var t1 = $('<span></span>').addClass("text-cont");
    var n = $('<span></span>').addClass("name").text(name + ":");
    n.css("color", "#2b94ff");
    var m = $('<span></span>').text(m);

    t1.append(n, m, '<br>');


    $('#log').prepend(t1);
}

function addgift(name, giftname) {
    var t1 = $('<span></span>').addClass("text-gift");
    var n = $('<span></span>').addClass("name").text(name + "送给主播");
    n.css("color", "#2b94ff");
    var m = $('<b></b>').text(giftname);
    m.css("color", "red");

    t1.append(n, m, '<br>');

    $('#log').prepend(t1);
}

$().ready(function () {

    $('#con').click(function () {
        var ip = $('#ipandport').val();

        $('#con').attr('disabled', true);
        connect(ip);
    });
    var a = getUrlParam('ip');

    if (a) {
        $('#ipandport').val(a);
        $('#ipinput').remove();
        connect(a);
    }
    else {
        $('#ipandport').val("127.0.0.1");
    }


    OnMsg.push(function (a) {
        console.log(a);
        if (a.type == "chat") {
            addchat(a.NickName, a.Content);
        } else if (a.type == "gift") {
            addgift(a.NickName, a.Giftname);
        }

    });
});