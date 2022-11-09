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
      console.log(wordSpan);
      // return wordSpan.innerHTML=`${word}`
      // wordSpan.classList.add("card-subtitle-word");
      // wordSpan.style.transitionDelay = `${index * 40}ms`;
  })
  // word.classList.add("card-subtitle-word");
  // word.style.transitionDelay = `${index * 40}ms`;
  // sub.innerText = "";
  // return sub.append(subtitleWords);
})



const createSubs = () => {

}

// const createSpanWords = (text, index) => {
//     const word = document.createElement("span");
//     word.innerHTML = `${text}`;
//     word.classList.add("card-subtitle-word");
//     word.style.transitionDelay = `${index * 40}ms`;
//     return word;
    
// }


//Add the span tag to the DOM/Subtitle tag

const addWords = (text,index) => subtitle.append(createSpanWords(text,index));


//const AddDom = (text, index) => 

// 
const createSubtitle = text => text.split(" ").map(addWords);

// createSubtitle("Find out communities and groups you can be a part of");
// createSubtitle("Find out communities and groups you can be a part of");
// createSubtitle("Find out communities and groups you can be a part of");
// createSubtitle("Find out communities and groups you can be a part of");
// createSubtitle("Find out communities and groups you can be a part of");
// createSubtitle("Find out communities and groups you can be a part of");
// createSubtitle("Find out communities and groups you can be a part of");
// createSubtitle("Find out communities and groups you can be a part of");
