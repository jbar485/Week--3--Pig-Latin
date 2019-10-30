var vowels = ["a", "e", "i", "o", "u", "y", "Y", "A", "E", "I", "O", "U"];

var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];

var pigLatin = function(sentence) {
  var resultArray = [];
  sentence.forEach(function(word){
    var letters = word.split("");
    if (vowels.includes(letters[0]) === true) {
      if (letters[0] === "y") {
        var y = letters.shift();
        letters.push(y);
      }else {
        letters.push("w");
      }
    }else if(consonants.includes(letters[0]) === true){
      while (consonants.includes(letters[0]) === true) {
        if (letters[0] === "q" && letters[1] === "u") {
          var quest = letters.shift();
          var quest1 = letters.shift();
          letters.push(quest, quest1);
        }else {
          var consonant = letters.shift();
          letters.push(consonant);
          break;
        }
      }
    }
    letters.push("ay")
    var finalSentence = letters.join("");
    resultArray.push(finalSentence);
  });

  return resultArray.join(' ');
}



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val().split(" ");
    $("#final").text(pigLatin(sentence));
    $("#final").show();
  });
});
