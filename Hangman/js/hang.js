$(document).ready(function() { $(".hidden, .img9").hide(); });
var allWords = ["liver", "monk", "chargeable", "hangman", "pack", "chore", "coil", "space", "wire", "cast", "lizard", "freezing", "shift", 
                "tricky", "echo", "mount", "set", "removeal", "sting", "cotter", "density", "romantic", "write", "pitsaw", "chatter"];
function randInt(max) { return Math.floor((Math.random()*max)); }
function randWord() { word = allWords[randInt(25)]; $("#word").html(word); var wordLength = word.length;
    if (wordLength == 1) { $("#n1").show(); }
    else if (wordLength == 2) { $("#n1").show(); $("#n2").show(); $("#n3").hide(); $("#n4").hide(); $("#n5").hide(); $("#n6").hide();
     $("#n7").hide(); $("#n8").hide(); $("#n9").hide(); $("#n10").hide(); $("#n11").hide(); $("#n12").hide(); $("#n13").hide(); }
    else if (wordLength == 3) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").hide(); $("#n5").hide(); $("#n6").hide();
     $("#n7").hide(); $("#n8").hide(); $("#n9").hide(); $("#n10").hide(); $("#n11").hide(); $("#n12").hide(); $("#n13").hide();  }
    else if (wordLength == 4) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").hide(); $("#n6").hide();
     $("#n7").hide(); $("#n8").hide(); $("#n9").hide(); $("#n10").hide(); $("#n11").hide(); $("#n12").hide(); $("#n13").hide();  }
    else if (wordLength == 5) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").show(); $("#n6").hide();
     $("#n7").hide(); $("#n8").hide(); $("#n9").hide(); $("#n10").hide(); $("#n11").hide(); $("#n12").hide(); $("#n13").hide(); }
    else if (wordLength == 6) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").show(); $("#n6").show();
     $("#n7").hide(); $("#n8").hide(); $("#n9").hide(); $("#n10").hide(); $("#n11").hide(); $("#n12").hide(); $("#n13").hide();  }
    else if (wordLength == 7) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").show(); $("#n6").show();
    $("#n7").show(); $("#n8").hide(); $("#n9").hide(); $("#n10").hide(); $("#n11").hide(); $("#n12").hide(); $("#n13").hide(); }
    else if (wordLength == 8) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").show(); $("#n6").show();
    $("#n7").show(); $("#n8").show(); $("#n9").hide(); $("#n10").hide(); $("#n11").hide(); $("#n12").hide(); $("#n13").hide(); }
    else if (wordLength == 9) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").show(); $("#n6").show();
    $("#n7").show(); $("#n8").show(); $("#n9").show(); $("#n10").hide(); $("#n11").hide(); $("#n12").hide(); $("#n13").hide(); }
    else if (wordLength == 10) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").show(); $("#n6").show();
    $("#n7").show(); $("#n8").show(); $("#n9").show(); $("#n10").show(); $("#n11").hide(); $("#n12").hide(); $("#n13").hide(); }
    else if (wordLength == 11) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").show(); $("#n6").show();
    $("#n7").show(); $("#n8").show(); $("#n9").show(); $("#n10").show(); $("#n11").show(); $("#n12").hide(); $("#n13").hide(); }
    else if (wordLength == 12) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").show(); $("#n6").show();
    $("#n7").show(); $("#n8").show(); $("#n9").show(); $("#n10").show(); $("#n11").show(); $("#n12").show(); $("#n13").hide(); }
    else if (wordLength == 13) { $("#n1").show(); $("#n2").show(); $("#n3").show(); $("#n4").show(); $("#n5").show(); $("#n6").show();
    $("#n7").show(); $("#n8").show(); $("#n9").show(); $("#n10").show(); $("#n11").show(); $("#n12").show(); $("#n13").show(); }
}
function checkLetter() { var letter = $("#guessedLettter").val(); var l1 = word.allLetters(); $(".wrongLetters").html(l1); }
function value() { var inputValue = $(".word").val(); return inputValue;$("#n1").show(); }
function checkWord() { var guess = $(".word").val(); guess.toString().toLowerCase();
    if (guess == word) { alert("You are Right!"); } else { alert("You lose."); }
}
