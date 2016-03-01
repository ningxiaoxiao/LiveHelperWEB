/**
 * Created by Administrator on 2016/3/1.
 */

var address = "ws://127.0.0.1:9111";
var ws;
var OnMsg = new Array();

function connect(ip, port) {
    log("connect to " + ip + " " + port);

    address = "ws://" + ip + ":" + port;

    ws = new WebSocket(address);

    ws.onopen = function () {

        log("on open");
    };
    ws.onerror = function () {
        log("on err");
    };

    ws.onclose = function () {
        log("on close");
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

