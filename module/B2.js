const B2 = async (level_select) => {
  level = level_select;
  document.getElementById("btn-section").style.display = "none";
  document.getElementById("Level").innerHTML = "level : B2";
  document.getElementById("home").style.display = "inline-block";
  document.getElementById("game-section").style.display = "flex";
  document.getElementById("answer").removeAttribute("disabled");
  document.getElementById("check").removeAttribute("disabled");
  document.getElementById("reset").style.display = "inline-block";
  document.getElementById("topScore").innerHTML = "Top Score : " + topScore;
  document.getElementById("game-section").innerHTML = "";
  document.getElementById("partOfSpeech").innerHTML = "part of speech : ";
  document.getElementById("translate").innerHTML = "meaning : ";
  document.getElementById("hint").innerHTML = "Definition : ";

  const data = (await fetch("./Word.json").then((response) => response.json()))
    .B2;

  const num = Math.floor(Math.random() * data.length);
  // word = data[num][0].toLocaleUpperCase() + data[num].slice(1);
  word = data[num].toLocaleUpperCase();


  const partOfSpeech = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  ).then((response) => response.json());

  console.log(word, "=", word.length); //เฉลย

  submit_en2thai(word);

  document.getElementById("hint").innerHTML +=
    partOfSpeech[0].meanings[0].definitions[0].definition;
  document.getElementById("partOfSpeech").innerHTML +=
    partOfSpeech[0].meanings[0].partOfSpeech;

  const hintNum = Math.floor(Math.random() * word.length);
  const hint = word[hintNum];

  for (let index = 0; index < word.length; index++) {
    if (hintNum == index) {
      document.getElementById(
        "game-section"
      ).innerHTML += `<span class='border-bottom border-primary ms-2 fs-1 text-center' style='width: 70px;'>${hint}</span>`;
    } else {
      document.getElementById("game-section").innerHTML +=
        "<span class='border-bottom border-primary ms-2' style='width: 70px;'></span>";
    }
  }
};
