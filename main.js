/* 
  API URL
  Update this every week with new fixtures!
*/

// const API_URL = "https://api.npoint.io/8f9061e79eabc54982cd";

/* 
  Define asyn function for fetching API Data
*/

// async function getApiData(url) {
//   const apiResponse = await fetch(url);
//   /*   
//     Storing JSON data 
//   */
//   var data = await apiResponse.json();
  
//   displayHTML(data);
// }

// getApiData(API_URL); //calling the async function

/* 
  This function here takes the data you fetch above
  And add's it to the DOM <3 
*/

/* 

    Had to manually add the JSON because the service 
    kept going down :( 
  
*/
const data = [
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Oxford Brookes Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Forest Sports Zone 3G, Gregory Blvd, Forest Fields, Nottingham NG7 6LD",
    "Changing rooms": "",
    "Start time": 1430
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Birmingham Men's 3",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1445
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "M5",
    "": "v",
    "Opposition Team": "Harper Adams Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Oxford Women's 1",
    "H/A": "H",
    "L/C": "VA",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1815
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W4",
    "": "v",
    "Opposition Team": "East Anglia Women's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1630
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W6",
    "": "v",
    "Opposition Team": "Loughborough Women's 6",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 2000
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Warwick Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Pitch 5)",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M6",
    "": "v",
    "Opposition Team": "Lincoln Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Southwell Rugby Club, Park Ln, Southwell NG25 0QN",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Lincoln Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Pitch 1)",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Squash",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Nottingham Men's 4",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC Squash Courts",
    "Changing rooms": "",
    "Start time": 1600
  },
  {
    "Week": 24,
    "Date": "15/03/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Nottingham Women's 7",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Tennis Centre)",
    "Changing rooms": "",
    "Start time": 1100
  },
  {
    "Week": 24,
    "Date": "19/03/2023",
    "Day": "Sun",
    "Sport": "Futsal",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "SF - Bristol or Newcastle Men's 1",
    "H/A": "H",
    "L/C": "CH",
    "Venue/Location": "LWSC Full Hall",
    "Changing rooms": "",
    "Start time": 1800
  }
]

function displayHTML(data) {
  let reverseArray = data.reverse();
  let fixturesUnique = reverseArray.reduce(function (r, a) {
    r[a.Sport] = r[a.Sport] || [];
    r[a.Sport].push(a);
    return r;
  }, Object.create(null));

  let mega = document.getElementById("1");
  Object.keys(fixturesUnique).forEach(function (key) {
    fixturesUnique[key].map(item => {
      // const gameTime = item['Start time'];
      const gameTime = item['Start time'].toString();
      const gameHour = gameTime.slice(0, 2);
      const gameMin = gameTime.slice(2);
      // console.log(`${gameHour}:${gameMin}`);
      return mega.insertAdjacentHTML("afterbegin",
        `<div class="fixture-mega-container"><div class="fixtures-block">
    <div class="team-1">
      <span>NTU ${item['NTU Team']}</span>
    </div>
    <div class="time-block">
    ${gameHour}:${gameMin}
    </div>
    <div class="team-2">
    <span>${item['Opposition Team']}</span>
    </div>
    </div>
    <div class="fixture-location">
    <div class="bucs__sport">
    <img src="https://nusdigital.s3.amazonaws.com/image/images/478217/original/cali.png"/>
    <p class="games-venue">
      ${item.Date}
    </p>
    </div>
    <div class="bucs__venue">
    <img src="https://nusdigital.s3.amazonaws.com/image/images/478216/original/iconn.png"/>
    <p class="games-venue">
      ${item['Venue/Location']}
    </p>
    </div>
    <div class="bucs__sport">
    <img src="https://nusdigital.s3.amazonaws.com/image/images/478218/original/tick.png"/>
    <p class="games-venue">
      ${item.Sport}
    </p>
    </div>
  </div>
  </div>
`)
    })
  });
}

displayHTML(data)