window.Vue = require("vue");
import Echo from "laravel-echo";

window.Echo = new Echo({
    broadcaster: "socket.io",
    host: window.location.hostname + ":6001"
});

new Vue({
    el: "#app",
    created() {
        console.log("ready");
        window.Echo.channel('everyone')
            .listen('SendMsgEvent', function (e) {
                console.log(e)
            });
    }
});
