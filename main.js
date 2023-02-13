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
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Badminton",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "De Montfort Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Badminton",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Loughborough Women's 3",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Basketball",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Bournemouth Men's 1",
    "H/A": "H",
    "L/C": "CH",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 1730
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Basketball",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Lincoln Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 2000
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Birmingham Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Forest Sports Zone 3G, Gregory Blvd, Forest Fields, Nottingham NG7 6LD",
    "Changing rooms": "",
    "Start time": 1430
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Leicester Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Gresham Sport Park 3G, Gresham Park Rd, West Bridgford, Nottingham NG2 7YF",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Bath Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1445
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "M6",
    "": "v",
    "Opposition Team": "Leicester Men's 2",
    "H/A": "H",
    "L/C": "CT",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1630
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Birmingham Women's 4",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1815
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W6",
    "": "v",
    "Opposition Team": "Warwick Women's 3",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Lacrosse",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Lincoln Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (3G)",
    "Changing rooms": "",
    "Start time": 1500
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Lacrosse",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Bath Women's 1",
    "H/A": "H",
    "L/C": "CH",
    "Venue/Location": "Clifton Campus (3G)",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Netball",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Cardiff Met Women's 1",
    "H/A": "H",
    "L/C": "CH",
    "Venue/Location": "LWSC SH A",
    "Changing rooms": "",
    "Start time": 1730
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Netball",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Northampton Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH A",
    "Changing rooms": "",
    "Start time": 1530
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Derby Men's 1",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "Clifton Campus (Grass pitch 5)",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "East Anglia Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Grass pitch 1)",
    "Changing rooms": "",
    "Start time": 1430
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M6",
    "": "v",
    "Opposition Team": "UCB Men's 1",
    "H/A": "H",
    "L/C": "CS",
    "Venue/Location": "Southwell Rugby Club, Park Ln, Southwell NG25 0QN",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Sussex Women's 1",
    "H/A": "H",
    "L/C": "TR",
    "Venue/Location": "West Bridgford RFC, Stamford Rd, West Bridgford, Nottingham NG2 6GF",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Squash",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Nottingham Men's 6",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC Squash Courts",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Squash",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Leicester Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC Squash Courts",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Brunel Men's 1",
    "H/A": "H",
    "L/C": "TR",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1330
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Kings College Women's 1",
    "H/A": "H",
    "L/C": "CH",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1330
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "East Anglia Men's 4",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Tennis Centre)",
    "Changing rooms": "",
    "Start time": 1100
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "M5",
    "": "v",
    "Opposition Team": "Worcester Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Tennis Centre)",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "M6",
    "": "v",
    "Opposition Team": "Nottingham Men's 10",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Tennis Centre)",
    "Changing rooms": "",
    "Start time": "09:00"
  },
  {
    "Week": 20,
    "Date": "15/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Warwick Women's 3",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Tennis Centre)",
    "Changing rooms": "",
    "Start time": 1600
  },
  {
    "Week": 20,
    "Date": "18/02/2023",
    "Day": "Sat",
    "Sport": "Dodgeball",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Birmingham Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Sportspark, University of East Anglia, University Drive, Norwich, NR4 7TJ",
    "Changing rooms": "",
    "Start time": 1130
  },
  {
    "Week": 20,
    "Date": "18/02/2023",
    "Day": "Sat",
    "Sport": "Dodgeball",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "East Anglia Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Sportspark, University of East Anglia, University Drive, Norwich, NR4 7TJ",
    "Changing rooms": "",
    "Start time": 1215
  },
  {
    "Week": 20,
    "Date": "18/02/2023",
    "Day": "Sat",
    "Sport": "Dodgeball",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Leicester Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Sportspark, University of East Anglia, University Drive, Norwich, NR4 7TJ",
    "Changing rooms": "",
    "Start time": 1630
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