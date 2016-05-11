/**
 * Created by Administrator on 2016/3/1.
 */
//引入之前要加入ReconnectingWebSocket引用
var port = 9111;
var ws;
var OnMsg = [];

function connect(ip, type) {
    ws = new ReconnectingWebSocket("ws://" + ip + ":" + port);
    ws.onopen = function () {
        ws.send("type=" + type);//发送自己的身份
    };
    ws.onerror = function () {
        // log("on err");
    };
    ws.onclose = function () {
        // log("on close");
    };
    ws.onmessage = function (event) {
        var json = JSON.parse(event.data);
        //要有一个监听body元素的onmsg事件

        OnMsg.forEach(function (e) {
            e(json);
        })
    }
}


