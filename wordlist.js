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
];

var insult = [
"complicated",
"consistent",
"innocent",
"naive",
"powerful",
"rule-breaking",
"spinster",
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

function getValue()
{
var one = compliment[Math.floor(Math.random() * compliment.length)];
var x=document.getElementById("one");
alert (x.innerHTML);
}
<button type="button" onclick="myFunction()">Generate!</button>
