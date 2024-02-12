var easyLetters = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"];
var normalLetters = ["A", "B", "B", "C", "C", "D", "D", "E", "F", "F", "G", "G", "H", "H", "I", "L", "M", "M", "N", "O", "P", "P", "R", "S",
                     "T", "U", "V", "V", "W", "W", "Y", "Y"];
var hardLetters = ["J", "K", "J", "K", "Q", "X", "Z"];
function randInt(max) { return Math.floor((Math.random()*max)); }
function randLetter(differculty, number) { $("#letter").html(differculty[randInt(number)]); }

function showList(number, id, heading, on, two, th, fo, fi, si, se, ei, ni, te, el, tw) { $(".lists").eq(number).animate({height:725}, 1000);
    $(id).html("<h2 class='c'>List "+ heading + "</h2><br class='c'/><ol class='c'><li class='c'>" + on + "</li><li class='c'>" + two +
    "</li><li class='c'>" + th + "</li><li class='c'>" + fo + "</li><li class='c'>" + fi + "</li><li class='c'>" + si +
    "</li><li class='c'>" + se + "</li><li class='c'>" + ei + "</li><li class='c'>" + ni + "</li><li class='c'>" + te +
    "</li><li class='c'>" + el + "</li><li class='c'>" + tw + "</li></ol>"); }
function hideList(number, id) { $(".lists").eq(number).animate({height:0.0000000000000000001}, 1000); $(id).hide(); }

var c = 179;
var t;
function timedCount() { $(".timer").html(c + " seconds");
    if (c == 0) {
        alert("Your time is up");
        restartCount();
        restartCount().stop();
        stopCount();
    }
    c = c - 1; t = setTimeout(function(){ timedCount(); }, 1000); }
function restartCount() { c = 180; clearTimeout(t); timedCount(); stopCount(); }
function stopCount() { clearTimeout(t); }

$(document).ready(function() { $(".lists").css("height", "0.0000000000000000001"); });
