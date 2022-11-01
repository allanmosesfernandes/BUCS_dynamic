import myJSON from './csvjson.json' assert {type: 'json'};

const sportJSON = myJSON;

//creates a sub-array of each unique sport
    let fixturesUnique = sportJSON.reduce(function (r, a) {
        r[a.Sport] = r[a.Sport] || [];
        r[a.Sport].push(a);
        return r;
    }, Object.create(null));

//Add these suckers to the DOM

// console.log(fixturesUnique)
// for (const key in fixturesUnique) {

//   console.log(`${key}: ${fixturesUnique[key]}`);
// }

// pastResults.map(num => {

//   const numsArray = num.winning_numbers.split(" ");
//   numsArray.push(num.mega_ball);
//   numsArray.push("x" + num.multiplier.split("")[1]);
//   console.log(numsArray);

//   // pastResultsBlock.append(`
//   //   <div class="col-12">
//   //     <div class="animated flipInY past-result-item box-shadow">
//   //       <div class="past-result-date">${moment(num.draw_date).format("MMM Do")}</div>
//   //       <div class="past-result-numbers">
//   //         ${numsArray.map(number => `<span>${number}</span>`)}
//   //       </div>
//   //     </div>
//   //   </div>
//   //   `)
//   })

let mega = document.getElementById("1");
console.log(mega)

console.log(fixturesUnique)
Object.keys(fixturesUnique).forEach(function(key) {
  fixturesUnique[key].map(item => {
    console.log(item)
    // const gameTime = item['Start time'];
    const gameTime = item['Start time'].toString();
    const gameHour = gameTime.slice(0,2);
    const gameMin = gameTime.slice(2);
    // console.log(`${gameHour}:${gameMin}`);
    return  mega.insertAdjacentHTML("afterbegin", `<div class="fixtures-block">
    <div class="team-1">
    <span>${item.Sport}</span>
      <span>NTU ${item['NTU Team']}</span>
    </div>
    <div class="time-block">
    ${gameHour}:${gameMin}
    </div>
    <div class="team-2">
    <span>${item['Opposition Team']}</span>
    </div>
    <div class="fixture-location">
    <img src="./football-ticket.png"/>
      <span>
     
      </span>
    </div>
  </div>
`)
  })


});

 // ${item['Venue/Location']}