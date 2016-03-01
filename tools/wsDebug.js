/**
 * Created by Administrator on 2016/3/1.
 */
function log(m) {


    $('#log').prepend(m + '<br>');
}

$().ready(function () {

    $('#ipandport').val("127.0.0.1");

    $('#con').click(function () {
        var ip = $('#ipandport').val();

        $('#con').attr('disabled', true);
        connect(ip);
    });


    OnMsg.push(function (a) {
        log(a.NickName + ":" + a.Content);
    });
});