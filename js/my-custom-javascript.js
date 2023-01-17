"use strict";

$(function() {

    $('h1').click(function () {
        $(this).css('background-color', 'blue')
    })
    $('ul').click(function () {
        $(this).css('font-size', '18px')
    })
    $('li').hover(
        function(){ $(this).css("background", "red"); },  // notice the comma here!
        function(){ $(this).css("background", "black"); }
    );
});

