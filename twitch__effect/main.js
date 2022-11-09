const subtitle = Array.from(document.getElementsByClassName("twitch__card__subtitle"));
console.log(subtitle);
const createSpanWords = (text, index) => {
    const word = document.createElement("span");
    word.innerHTML = `${text}`;
    word.classList.add("card-subtitle-word");
    word.style.transitionDelay = `${index * 40}ms`;
    return word;
    
}


//Add the span tag to the DOM/Subtitle tag

const addWords = (text,index) => subtitle.append(createSpanWords(text,index));


//const AddDom = (text, index) => 

// 
const createSubtitle = text => text.split(" ").map(addWords);

createSubtitle("Find out communities and groups you can be a part of");
createSubtitle("Find out communities and groups you can be a part of");
createSubtitle("Find out communities and groups you can be a part of");
createSubtitle("Find out communities and groups you can be a part of");
createSubtitle("Find out communities and groups you can be a part of");
createSubtitle("Find out communities and groups you can be a part of");
createSubtitle("Find out communities and groups you can be a part of");
createSubtitle("Find out communities and groups you can be a part of");
