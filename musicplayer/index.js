/**
 * Created by Administrator on 2016/3/2.
 */


function SetSongName(n) {
    $('#title').text(n + " ");
}
function SetArtist(n) {
    $('#artist').text(n);
}
function SetPic(n) {
    $('#cover').attr('src', n);
}
function Setlog(n) {

    $('#log').html(n);

}
OnMsg.push(function (e) {
    //注册消息

    if (e.type == "mp3") {
        console.log(e);
        if (e.SongName == "")return;
        SetSongName(e.SongName);
        SetArtist(e.Artist);
        SetPic(e.imageLink);

        var t = "由 " + e.SenderName + ( e.IsInsert ? " 插播" : " 点播");
        $('#sender').text(t);

        curcost = e.Cost * 2;

        //设置时间
        songtime = e.CurtimeSec;
        songtotaltime = e.TotaltimeSec;
        songtotaltimetext = formatTime(songtotaltime);

    }

})
var curcost = 0;
var songtotaltimetext = "00:00";
var songtotaltime = 0;
var songtime = 0;
$().ready(function () {
    connect("127.0.0.1", "mp3");
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
        var r = Math.floor((Math.random() * 3) + 1);
        switch (r) {
            case 0:
                Setlog('发送弹幕 <b>点歌*歌名*歌手</b>');
                break;
            case 1:
                Setlog('发送弹幕 <b>插歌*歌名*歌手</b> 插歌');
                break;
            case 2:
                Setlog('当前插歌消耗:<b>' + curcost);
                break;
        }
    }, 1000);


})
function formatTime(second) {
    return [parseInt(second / 60 % 60), parseInt(second % 60)].join(":").replace(/\b(\d)\b/g, "0$1");
}