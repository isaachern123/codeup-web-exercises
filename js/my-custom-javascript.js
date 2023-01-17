"use strict";

$(function() {

    $('h1').click(function () {
        $(this).css('color', 'blue')
    })
    $('ul').click(function () {
        $(this).css('font-size', '108px')
    })
    $('li').hover(
        function(){ $(this).css("background", "red"); },  // notice the comma here!
        function(){ $(this).css("background", "black"); }
    );
});

