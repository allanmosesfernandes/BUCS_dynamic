const subtitle = Array.from(document.getElementsByClassName("twitch__card__subtitle"));

subtitle.map((sub, index) => {
  subtitleWords = `${sub.innerText}`;
  sub.innerHTML = "";
  subtitleWords.split(" ").map((word, index) => {
      const wordSpan = document.createElement("span");
      wordSpan.classList.add("card-subtitle-word");
      wordSpan.style.transitionDelay = `${index * 40}ms`;
      wordSpan.innerHTML=`${word}`;
      sub.append(wordSpan);
  })

})


