/**
 * Created by Administrator on 2016/3/1.
 */
function log(m) {


    $('#log').prepend(m + '<br>');
}

$().ready(function () {

    $('#ipandport').val("127.0.0.1:9111");

    $('#con').click(function () {
        var text = $('#ipandport').val();
        var p = text.split(':');
        if (p.length != 2) {
            log("地址格式不对");
            return;
        }
        $('#con').attr('disabled', true);
        connect(p[0], p[1]);
    });


    OnMsg.push(function (a) {
        log(a.NickName + ":" + a.Content);
    });
});