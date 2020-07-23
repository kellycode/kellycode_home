
if (!window.KELLYCODE_UTILS) {
    window.KELLYCODE_UTILS = {};
}


// just some items I often use

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

// UTILITY SORTING METHODS
// Generic Sorting of objects by value key
// with the addition of handling odd characters
KELLYCODE_UTILS.compareGenericAsc = function (key) {
    return function (a, b) {
        var characters = '*!@_.()#^&%-=+01234567989abcdefghijklmnopqrstuvwxyz';
        var index_a = characters.indexOf(a[key][0]);
        var index_b = characters.indexOf(b[key][0]);
        if (index_a === index_b) {
            // same first character, sort regular
            if (a[key] < b[key]) {
                return -1;
            }
            else if (a[key] > b[key]) {
                return 1;
            }
            // default
            return 0;
        }
        else {
            return index_a - index_b;
        }
    };
};
KELLYCODE_UTILS.compareGenericDes = function (key) {
    return function (a, b) {
        var characters = '*!@_.()#^&%-=+01234567989abcdefghijklmnopqrstuvwxyz';
        var index_a = characters.indexOf(a[key][0]);
        var index_b = characters.indexOf(b[key][0]);
        if (index_a === index_b) {
            // same first character, sort regular
            if (a[key] < b[key]) {
                return 1;
            }
            else if (a[key] > b[key]) {
                return -1;
            }
            // default
            return 0;
        }
        else {
            return index_b - index_a;
        }
    };
};

// custom tooltip made to be 
// easily modifed and extended
KELLYCODE_UTILS.Tooltip = {
    init: function () {
        // hovers to the bottom right of the target
        $(".hovering_rt").hover(function () {
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
        }, function () {
            $(this).next(".kellycode_hover_text").animate({
                opacity: "hide"
            }, "fast");
        });

        // hovers to the bottom right of the target
        $(".hovering_btm_rt").hover(function () {
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
        }, function () {
            $(this).next(".kellycode_hover_text").animate({
                opacity: "hide"
            }, "fast");
        });

        // hovers to the bottom left of the target
        $(".hovering_btm_lf").hover(function () {
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
        }, function () {
            $(this).next(".kellycode_hover_text").animate({
                opacity: "hide"
            }, "fast");
        });
    }
};

/*
 Simple Validation Utilities
 
 var valid = true;
 
 valid = valid && checkLength( name, "username", 3, 16 );
 valid = valid && checkLength( email, "email", 6, 80 );
 valid = valid && checkLength( password, "password", 5, 16 );
 
 valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
 valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
 valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
 */


KELLYCODE_UTILS.checkLength = function (o, n, min, max) {
    if (o.val().length > max || o.val().length < min) {
        o.addClass("ui-state-error");
        updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
        return false;
    }
    else {
        return true;
    }
}

KELLYCODE_UTILS.checkRegexp = function (o, regexp, n) {
    if (!(regexp.test(o.val()))) {
        o.addClass("ui-state-error");
        updateTips(n);
        return false;
    }
    else {
        return true;
    }
}

// collect a parameter out of the url
KELLYCODE_UTILS.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results === null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
};

(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            }
            else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    };
}(jQuery));

//Usage:
/*
 // Alphanumeric:
 $("#intTextBox").inputFilter(function (value) {
 return /^[0-9a-z]+$/.test(value);
 });
 
 // Integer (both positive and negative):
 $("#intTextBox").inputFilter(function (value) {
 return /^-?\d*$/.test(value);
 });
 
 // Integer (positive only):
 $("#uintTextBox").inputFilter(function (value) {
 return /^\d*$/.test(value);
 });
 
 // Integer (positive and <= 500):
 $("#intLimitTextBox").inputFilter(function (value) {
 return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 500);
 });
 
 // Floating point (use . or , as decimal separator):	
 $("#floatTextBox").inputFilter(function (value) {
 return /^-?\d*[.,]?\d*$/.test(value);
 });
 
 // Currency (at most two decimal places):
 $("#currencyTextBox").inputFilter(function (value) {
 return /^-?\d*[.,]?\d{0,2}$/.test(value);
 });
 
 // Hexadecimal:
 $("#hexTextBox").inputFilter(function (value) {
 return /^[0-9a-f]*$/i.test(value);
 });
 */