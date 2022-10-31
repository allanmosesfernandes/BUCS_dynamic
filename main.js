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

Object.keys(fixturesUnique).forEach(function(key) {
  fixturesUnique[key].map(item => {
    return mega.innerHTML(`
    <div class="col-12">
      <div class="animated flipInY past-result-item box-shadow">
        <div class="past-result-numbers">
        </div>
      </div>
    </div>
    `)
  })
});