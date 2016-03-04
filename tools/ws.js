/**
 * Created by Administrator on 2016/3/1.
 */

var port = 9111;
var ws;
var OnMsg = [];

function connect(ip) {
    // log("connect to " + ip + " " + port);

    ws = new WebSocket("ws://" + ip + ":" + port);

    ws.onopen = function () {

        //   log("on open");
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
        // $("body").trigger("onmsg",json);

        OnMsg.forEach(function (e) {
            e(json);
        })


    }

}


