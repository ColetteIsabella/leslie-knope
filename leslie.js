$("form").submit(function(event){
  event.preventDefault();
  console.log("When I'm being yelled at, I hear people caring loudly at me.");
});

  var compliment = [
  "beautiful",
  "brilliant",
  "classy",
  "glowing eyed",
  "kind",
  "passionate",
  "poetic",
  "powerful",
  "proud",
  "radiant",
  "rainbow-infused",
  "smart",
  "sophisticated",
  "sweet",
  "wonderful"
  ];

  var insult = [
  "complicated",
  "confused",
  "consistent",
  "innocent",
  "naive",
  "rule-breaking",
  "spinster",
  "unique",
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
  "princess",
  "punching bag",
  "sunflower",
  "tropical fish",
  "unicorn"
  ];

  var images =[
  "images/leslie1.png",
  "images/leslie2.png",
  "images/leslie3.jpg",
  "images/leslie4.jpg",
  "images/leslie5.png",
  "images/leslie6.png"
  ];

  $("#button").click(function(){
    var dupes = true;
    while(dupes == true){
      var c = compliment[Math.floor(Math.random()*compliment.length)];
      var i = insult[Math.floor(Math.random()*insult.length)];
      var ad = adjective[Math.floor(Math.random()*adjective.length)];
      var an = animal[Math.floor(Math.random()*animal.length)];
      var img = images[Math.random()*images.length];
    if (ad != an){
      dupes = false;
    }
  }
  var name = $("#name").val();
  var profession = $("#profession").val();

  $("#knopeMe").text("Oh " +name+ ", you " + c + ", " + i + ", " + ad + " " + an + " " + profession + "!");
  $("#leslie").attr("src", images[Math.floor(Math.random()*images.length)]);

  });


  //fb/tw




