/**
 * Created by Administrator on 2016/3/2.
 */

connect("127.0.0.1", "nonoononon");
OnMsg.push(function (e) {
    //注册消息

    if (e.type == "Notification") {
        msg(e.name, e.text);
    }

})
function msg(n, c) {

    var notification = new NotificationFx({
        message: '<div class="ns-thumb"><img src="http://uc.douyutv.com/upload/avatar/000/28/34/31_avatar_middle.jpg?rltime"/></div><div class="ns-content"><p><a href="#">' + n + ':</a>' + c + '</p></div>',
        layout: 'other',
        ttl: 6000,
        effect: 'thumbslider',
        type: 'notice', // notice, warning, error or success
    });
    // show the notification
    notification.show();
}
