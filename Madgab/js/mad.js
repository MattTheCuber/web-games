$(document).ready(function() { $("#answer").animate({height:0.00000000000000000000000000000000001}, 1);
    $("#hint").animate({height:0.00000000000000000000000000000000001}, 1); });
var statments = ["fork if fuss czar since","butcher hoe pink odd","dell hoards some eye ship heard","hints hide tough ish joan up raid",
                 "bowl dazzle ion","that wink link heaven high","exit us","oh pen the rise","heap rues","ewe harm ike odd",
                 "jay cob stream","wall kin theif ear afar cod","bar thaw home you","see off cal lilly","cal fairy",
                 "jay cub pan niece saw","loose heifer","profir eyes say ya","beef root fill land mulled apply","cherry at or says",
                 "hick lazy has teas","placid bee thee lowered","lend dove mill conon knee","tho you shout knots deal",
                 "dull lass shout beef hearst","canon hey bell","leave it to gus","chew dust it scary it","versed pea tour",
                 "end debt 'twas o","add dem hand heave","the ow you shout knock omit a dull try","nay oh me","thumb as sigh yes calming",
                 "mound sigh on","may then ya'll","raise cyst thud deaf ill","bay being a main jar","sink thee galore he office an aim",
                 "guessed some many","thick crews of friction","chose if fan mare he","la fit ick us","sigh man is carry it",
                 "tee antique riced","sack eye yes","fair essays","thus sir pant","belch ah czar","sam sun andy lila","same mule",
                 "poor ride ghost beef oders truck shun","fair rose streams","ref hull haitian","coo wean ace stir","gal lay shins",
                 "sin nay cog"];
var hints = ["fork if fuss-czar-since","but-cher-hoe p-in-k odd","del-l hoards-s-me eye-ship heard","hints hide-tough-ish-joan u-p raid",
                 "bowl d-azz- -le ion","tha-t wink link-of-high","exitus","oh pen-the r-ise","heaprues","ewe h-ar-m i-ke odd",
                 "jay cob-stream","wall k-in-thei-f ear-af-ar-cod","barthawhomeyou","see-off-cal lilly","calfairy","jay cub-pan-niece saw",
                 "looseheifer","profir-eyes say ya","bee-f root fill l-and-mulled apply","cherry at-or says","hicklazyhasteas",
                 "placid bee-thee-lowered","lend-dove-mill c-on-on knee","tho you-shout-knots-deal","dull-lass-shout-bee-f hearst",
                 "can-on-hey bell","leaveittogus","chew dust-it scary it","versed-pea tour","end d-ebt 't-was-s o","add dem-hand-heave",
                 "the ow-shout-knoc-k omit-a dull try","nayohme","thu-mb as sigh y-es-calming","mound-sigh on","naythenya'll",
                 "raise cyst-thu-d deaf ill","bay be-ing-a-main jar","sink-thee-galore he-of-fice-an aim","guessed some many",
                 "thick crews of friction","chose if fan mare he","la fit ick us","sigh man-is carry it","tee-antique riced","fairessays",
                 "sack eye yes","thu-s sir pant","belchahczar","sam sun-and-dy lila","samemule","poor ride-ghost-beef o-ders truck shun",
                 "fair rose s-treams","refhullhaitian","coowean-ace stir","gallayshins","sinnaycog","chair oboe aim"];
var answers = ["Forgive us our sins.","Put your hope in God.","The Lord is my shepherd.","Inside the fish Jonah prayed.","Bold as a lion.",
               "The twinkling of an eye.","Exodus.","Open their eyes.","Hebrews.","You are my God.","Jacod's dream.",
               "Walk in the fear of our God.","Bartholomew.","Sea of Galilee.","Calvary.","Jacob and Esau.","Lucifer.","Prophet Isaiah.",
               "Be fruitful and multiply.","Chariot horses.","Ecclesiates.","Blessed be the Lord.","Land of milk and honey.",
               "Thou salt not steal.","The last shall be first.","Cain and Abel.","Leviticus.","Judas Iscariot.","1<sup>st</sup> Peter.",
               "And it was so.","Adam and Eve","Thou shalt not commit adultery.","Naomi.","The Messiah is coming.","Mt. Zion.",
               "nathaniel.","Resist the Devil.","Baby in a manger","Sing the glory of his name.","Gethsemane.","The Crucifixion.",
               "Joseph and Mary.","Leviticus.","Simon Iscariot.","The AntiChrist.","Pharisees.","Zacchaeus","The Serpent.","Belshazzar.",
               "Gabriel.","Samson and Delilah.","Samuel.","Pride goes before destruction.","Pharaoh's Dreams.","Revelation.",
               "Queen Esther.","Galatians.","synogode"];
var number;
function randInt(max) { return Math.floor((Math.random()*max)); }
function getStatment() { number = randInt(57); $("#statment").html(statments[number]); }
function showAnswer() { $("#answer").animate({height:60}, 1000); $("#answer").html(answers[number]); }
function showHint() { $("#hint").animate({height:60}, 1000); $("#hint").html(hints[number]); }
