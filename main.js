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
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Badminton",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Birmingham Men's 4",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Badminton",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Derby Women's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Basketball",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Oxford Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 1800
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Basketball",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Loughborough Women's 3",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 2000
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Fencing",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Oxford Brookes Men's 1",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1800
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "East Anglia Men's 1",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "Forest Sports Zone 3G, Gregory Blvd, Forest Fields, Nottingham NG7 6LD",
    "Changing rooms": "",
    "Start time": 1430
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "M5",
    "": "v",
    "Opposition Team": "Loughborough Men's 6",
    "H/A": "H",
    "L/C": "CT",
    "Venue/Location": "Brackenhurst grass pitch, Brackenhurst Ln, Southwell NG25 0QF",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Birmingham Women's 2",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "Gresham Sport Park 3G, Gresham Park Rd, West Bridgford, Nottingham NG2 7YF",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Golf",
    "NTU Team": "Mixed 1",
    "": "v",
    "Opposition Team": "Loughborough Mixed 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Ruddington Grange Golf Club, Wilford Rd, Ruddington, Nottingham NG11 6NB",
    "Changing rooms": "",
    "Start time": 1100
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Bristol Women's 1",
    "H/A": "H",
    "L/C": "VA",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1815
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W4",
    "": "v",
    "Opposition Team": "Leicester Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Lacrosse",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Exeter Men's 1",
    "H/A": "H",
    "L/C": "CH",
    "Venue/Location": "Clifton Campus (3G)",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Lacrosse",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Leicester Men's 1",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "Clifton Campus (3G)",
    "Changing rooms": "",
    "Start time": 1630
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Lacrosse",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Oxford Brookes Women's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (3G)",
    "Changing rooms": "",
    "Start time": 1445
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Netball",
    "NTU Team": "W5",
    "": "v",
    "Opposition Team": "Loughborough Women's 6",
    "H/A": "H",
    "L/C": "CT",
    "Venue/Location": "LWSC SH A",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Cardiff Men's 2",
    "H/A": "H",
    "L/C": "VA",
    "Venue/Location": "Nottingham Rugby Football Club, 1 Holme Rd, West Bridgford, Nottingham NG2 5AA",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Harper Adams Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Grass pitch 5)",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Moulton Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Grass pitch 1)",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M5",
    "": "v",
    "Opposition Team": "East Anglia Men's 3",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Nottingham Moderns RFC",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Anglia Ruskin Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Grass pitch 1)",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Oxford Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1330
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Cambridge Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1330
  },
  {
    "Week": 21,
    "Date": "22/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "King's College Women's 1",
    "H/A": "H",
    "L/C": "CH",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 21,
    "Date": "25/02/2023",
    "Day": "Sat",
    "Sport": "Fencing",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "East Anglia Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1000
  },
  {
    "Week": 21,
    "Date": "25/02/2023",
    "Day": "Sat",
    "Sport": "Fencing",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Anglia Ruskin Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 21,
    "Date": "26/02/2023",
    "Day": "Sun",
    "Sport": "American Football",
    "NTU Team": "Open 1",
    "": "v",
    "Opposition Team": "Glasgow Men's 1",
    "H/A": "H",
    "L/C": "TR",
    "Venue/Location": "Clifton Campus (Grass pitch 5)",
    "Changing rooms": "",
    "Start time": ""
  },
  {
    "Week": 21,
    "Date": "26/02/2023",
    "Day": "Sun",
    "Sport": "Futsal",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Warwick Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 1730
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