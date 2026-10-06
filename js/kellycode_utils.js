
if (!window.KELLYCODE_UTILS) {
    window.KELLYCODE_UTILS = {};
}

// sets an orientation class on the document body
KELLYCODE_UTILS.screenWatch = function () {
    $(window).on("load resize orientationchange", function () {
        if(screen.orientation.type === "landscape-primary") {
            $(document.body).removeClass('portrait');
            $(document.body).addClass('landscape');
        }
        else if(screen.orientation.type === "portrait-primary") {
            $(document.body).removeClass('landscape');
            $(document.body).addClass('portrait');
        }
    });
};
