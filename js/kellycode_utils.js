
if (!window.KELLYCODE_UTILS) {
    window.KELLYCODE_UTILS = {};
}

// UTILITY SORTING METHODS
// Generic Sorting of objects by value key
// with the addition of handling odd characters
KELLYCODE_UTILS.compareGenericAsc = function(key) {
    return function(a, b) {
        var characters = '*!@_.()#^&%-=+01234567989abcdefghijklmnopqrstuvwxyz';
        var index_a = characters.indexOf(a[key][0]);
        var index_b = characters.indexOf(b[key][0]);
        if (index_a === index_b) {
            // same first character, sort regular
            if (a[key] < b[key]) {
                return -1;
            } else if (a[key] > b[key]) {
                return 1;
            }
            // default
            return 0;
        } else {
            return index_a - index_b;
        }
    };
};
KELLYCODE_UTILS.compareGenericDes = function(key) {
    return function(a, b) {
        var characters = '*!@_.()#^&%-=+01234567989abcdefghijklmnopqrstuvwxyz';
        var index_a = characters.indexOf(a[key][0]);
        var index_b = characters.indexOf(b[key][0]);
        if (index_a === index_b) {
            // same first character, sort regular
            if (a[key] < b[key]) {
                return 1;
            } else if (a[key] > b[key]) {
                return -1;
            }
            // default
            return 0;
        } else {
            return index_b - index_a;
        }
    };
};

// custom tooltip made to be 
// easily modifed and extended
KELLYCODE_UTILS.Tooltip = {
    init: function() {
        // hovers to the bottom right of the target
        $(".hovering_rt").hover(function() {
            // positions it
            $(this).next(".kellycode_hover_text").css({
                opacity: "show",
                top: $(this).position().top + $(this).outerHeight() - 37.5,
                left: $(this).position().left + 50,
                'z-index': 1000
            });
            // animates it if it's still in it's default position
            $(this).next(".kellycode_hover_text").animate({
                opacity: "show",
                top: $(this).position().top + $(this).outerHeight() - 37.5,
                left: $(this).position().left + 50,
                'z-index': 1000
            }, "fast");
        }, function() {
            $(this).next(".kellycode_hover_text").animate({
                opacity: "hide"
            }, "fast");
        });
        
        // hovers to the bottom right of the target
        $(".hovering_btm_rt").hover(function() {
            $(this).next(".kellycode_hover_text").css({
                opacity: "show",
                top: $(this).position().top + $(this).outerHeight() + 10,
                left: $(this).position().left,
                'z-index': 1000
            });
            $(this).next(".kellycode_hover_text").animate({
                opacity: "show",
                top: $(this).position().top + $(this).outerHeight() + 10,
                left: $(this).position().left,
                'z-index': 1000
            }, "fast");
        }, function() {
            $(this).next(".kellycode_hover_text").animate({
                opacity: "hide"
            }, "fast");
        });
        
        // hovers to the bottom left of the target
        $(".hovering_btm_lf").hover(function() {
            $(this).next(".kellycode_hover_text").css({
                opacity: "show",
                top: $(this).position().top + $(this).outerHeight() + 10,
                left: $(this).position().left - $(this).next(".kellycode_hover_text").outerWidth(),
                'z-index': 1000
            });
            $(this).next(".kellycode_hover_text").animate({
                opacity: "show",
                top: $(this).position().top + $(this).outerHeight() + 10,
                left: $(this).position().left - $(this).next(".kellycode_hover_text").outerWidth(),
                'z-index': 1000
            }, "fast");
        }, function() {
            $(this).next(".kellycode_hover_text").animate({
                opacity: "hide"
            }, "fast");
        });
    }
};

// collect a parameter out of the url
KELLYCODE_UTILS.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results === null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
};