
var compliment = [
"beautiful",
"brilliant",
"classy",
"glowing eyed",
"kind",
"passionate",
"poetic",
"proud",
"radiant",
"rainbow-infused",
"smart",
"sophisticated",
"sweet",
"wonderful"
];

var insult = [
"awkward",
"complicated",
"consistent",
"eccentric",
"innocent",
"naive",
"perplexing",
"powerful",
"rule-breaking",
"spinster",
"strange",
"unique"
];

var adjective = [
"baby",
"gorgeous",
"new born",
"noble",
"perfect",
"powerful",
"radiant",
"rule-breaking",
"strong",
"stupid-hot",
"talented",
"space"
];

var animal = [
"baby",
"hippo",
"land-mermaid",
"moth",
"musk ox",
"orangutan",
"penguin",
"punching bag",
"sunflower",
"tropical fish",
"unicorn"
];


function knopism() {
  var c = compliment[Math.floor(Math.random() * compliment.length)];
  var i = insult[Math.floor(Math.random() * insult.length)];
  var ad = adjective[Math.floor(Math.random() * adjective.length)];
  var an = animal[Math.floor(Math.random() * animal.length)];

  document.getElementById("knopeMe").innerHTML = ("Oh, you " + c + ", " + i + ", " + ad + " " + an + "!");
}





console.log("This is a test")

