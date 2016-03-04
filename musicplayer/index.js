/**
 * Created by Administrator on 2016/3/2.
 */


function SetSongName(n) {
    $('#title').text(n);
}
function SetPic(n) {
    $('#cover').attr('src', n);
}

OnMsg.push(function (e) {
    //注册消息

    if (e.type == "mp3") {
        console.log(e);
        SetSongName(e.SongName + "_" + e.Artist);
        SetPic(e.imageLink);

        var t = "由 " + e.SenderName + ( e.IsInsert ? " 插播" : " 点播");
        $('#sender').text(t);

        //重置时间
        songtime = 0;
        songtotaltime = e.TotaltimeSec;
        songtotaltimetext = formatTime(songtotaltime);

    }

})
var songtotaltimetext = "00:00";
var songtotaltime = 0;
var songtime = 0;
$().ready(function () {

    connect("127.0.0.1");

    setInterval(function () {

        if (songtotaltime != 0) {
            songtime++;
            if (songtime == songtotaltime) {
                songtime = 0;
                songtotaltime = 0;


            }
            //设置文字
            $('#time').text(formatTime(songtime) + "/" + songtotaltimetext);
            //设置进度
            $('#bar').css("width", songtime / songtotaltime * 100 + "%");
        }

    }, 1000);


})
function formatTime(second) {
    return [parseInt(second / 60 % 60), parseInt(second % 60)].join(":")
        .replace(/\b(\d)\b/g, "0$1");
}