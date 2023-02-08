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
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Badminton",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Loughborough Men's 3",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH A",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Fencing",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Nottingham Men's 4",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1800
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Bedfordshire Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Forest Sports Zone 3G, Gregory Blvd, Forest Fields, Nottingham NG7 6LD",
    "Changing rooms": "",
    "Start time": 1430
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "M5",
    "": "v",
    "Opposition Team": "Lincoln Men's 3",
    "H/A": "H",
    "L/C": "CT",
    "Venue/Location": "Brackenhurst grass pitch, Brackenhurst Ln, Southwell NG25 0QF",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Birmingham Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Grass pitch 4)",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Birmingham City Women's 1",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "Gresham Sport Park 3G, Gresham Park Rd, West Bridgford, Nottingham NG2 7YF",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Gaelic Football",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Nottingham Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "The Meadows Recreation Ground, Wilford Grove, Nottingham NG2 2DU",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Edinburgh Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1630
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Manchester Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Edinburgh Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1815
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Oxford Brookes Women's 2",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 1445
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W5",
    "": "v",
    "Opposition Team": "Warwick Women's 3",
    "H/A": "H",
    "L/C": "CT",
    "Venue/Location": "Clifton Campus (Hockey Pitch)",
    "Changing rooms": "",
    "Start time": 2000
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Lacrosse",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Warwick Women's 2",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "Clifton Campus (3G)",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Netball",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Nottingham Women's 4",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH A",
    "Changing rooms": "",
    "Start time": 1730
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Netball",
    "NTU Team": "W4",
    "": "v",
    "Opposition Team": "Harper Adams Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH A",
    "Changing rooms": "",
    "Start time": 1930
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Netball",
    "NTU Team": "W5",
    "": "v",
    "Opposition Team": "Nottingham Women's 6",
    "H/A": "H",
    "L/C": "CT",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 1930
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Nottingham Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Nottingham Rugby Football Club, 1 Holme Rd, West Bridgford, Nottingham NG2 5AA",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Oxford Brookes Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Grass pitch 1)",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M6",
    "": "v",
    "Opposition Team": "Aston Men's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Southwell Rugby Club, Park Ln, Southwell NG25 0QN",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Oxford Brookes Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "West Bridgford RFC, Stamford Rd, West Bridgford, Nottingham NG2 6GF",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Squash",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Warwick Men's 3",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "LWSC Squash Courts",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "UCL Men's 1",
    "H/A": "H",
    "L/C": "CH",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1600
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Warwick Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1330
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Oxford Brookes Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1330
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Loughborough Women's 2",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "LWSC SH 2",
    "Changing rooms": "",
    "Start time": 1600
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Nottingham Men's 6",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Clifton Campus (Tennis Centre)",
    "Changing rooms": "",
    "Start time": "09:00"
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "M5",
    "": "v",
    "Opposition Team": "Nottingham Men's 9",
    "H/A": "H",
    "L/C": "CT",
    "Venue/Location": "Clifton Campus (Tennis Centre)",
    "Changing rooms": "",
    "Start time": 1800
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "TBC - Coventry or Leicester Women's 1",
    "H/A": "H",
    "L/C": "CC",
    "Venue/Location": "Clifton Campus (Tennis Centre)",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Warwick Women's 3",
    "H/A": "H",
    "L/C": "CT",
    "Venue/Location": "Clifton Campus (Tennis Centre)",
    "Changing rooms": "",
    "Start time": 1600
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Volleyball",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Anglia Ruskin Women's 1 (Cambridge)",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC SH B",
    "Changing rooms": "",
    "Start time": 1600
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Fencing",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Nottingham Women's 2",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "David Ross Sports Village, Beeston Ln, Lenton Abbey, Nottingham NG7 2RD",
    "Changing rooms": "",
    "Start time": 1500
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Gaelic Football",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Birmingham Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "The Meadows Recreation Ground, Wilford Grove, Nottingham NG2 2DU",
    "Changing rooms": "",
    "Start time": 1200
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Table Tennis",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Loughborough Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Sports Hub - Sport and Wellness Hub, University of Warwick Cryfield Village, Leighfield Rd, Coventry CV4 7EU",
    "Changing rooms": "",
    "Start time": 1100
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Table Tennis",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Nottingham Women's 3",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Sports Hub - Sport and Wellness Hub, University of Warwick Cryfield Village, Leighfield Rd, Coventry CV4 7EU",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Table Tennis",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Warwick Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "Sports Hub - Sport and Wellness Hub, University of Warwick Cryfield Village, Leighfield Rd, Coventry CV4 7EU",
    "Changing rooms": "",
    "Start time": 1500
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Water Polo",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Warwick Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "David Ross Sports Village, Beeston Ln, Lenton Abbey, Nottingham NG7 2RD",
    "Changing rooms": "",
    "Start time": 1945
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Water Polo",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Warwick Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "David Ross Sports Village, Beeston Ln, Lenton Abbey, Nottingham NG7 2RD",
    "Changing rooms": "",
    "Start time": 1815
  },
  {
    "Week": 19,
    "Date": "12/02/2023",
    "Day": "Sun",
    "Sport": "Futsal",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Leeds Beckett Men's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "LWSC Full Hall",
    "Changing rooms": "",
    "Start time": 2000
  },
  {
    "Week": 19,
    "Date": "12/02/2023",
    "Day": "Sun",
    "Sport": "Table Tennis",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Cambridge Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "University of Cambridge Sports Centre, CB3 0AS",
    "Changing rooms": "",
    "Start time": 1100
  },
  {
    "Week": 19,
    "Date": "12/02/2023",
    "Day": "Sun",
    "Sport": "Table Tennis",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Derby Women's 1",
    "H/A": "H",
    "L/C": "L",
    "Venue/Location": "University of Cambridge Sports Centre, CB3 0AS",
    "Changing rooms": "",
    "Start time": 1200
  },
  {
    "Week": "",
    "Date": "",
    "Day": "",
    "Sport": "",
    "NTU Team": "",
    "": "",
    "Opposition Team": "",
    "H/A": "",
    "L/C": "",
    "Venue/Location": "",
    "Changing rooms": "",
    "Start time": ""
  },
  {
    "Week": "Week",
    "Date": "Date",
    "Day": "Day",
    "Sport": "Sport",
    "NTU Team": "NTU Team",
    "": "",
    "Opposition Team": "Opposition Team",
    "H/A": "H/A",
    "L/C": "L/C",
    "Venue/Location": "Venue/Location",
    "Changing rooms": "",
    "Start time": "Start time"
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Badminton",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Loughborough Women's 3",
    "H/A": "A",
    "L/C": "CC",
    "Venue/Location": "",
    "Changing rooms": "",
    "Start time": ""
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Fencing",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Nottingham Women's 2",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "David Ross Sports Centre (DRSV), Beeston Lane, Nottingham. NG7 2RJ",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Football",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Loughborough Men's 3",
    "H/A": "A",
    "L/C": "CC",
    "Venue/Location": "Holywell Grass Pitch 5, Loughborough University, LE11 3TU",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Golf",
    "NTU Team": "Mixed 1",
    "": "v",
    "Opposition Team": "Birmingham Mixed 2",
    "H/A": "A",
    "L/C": "TR",
    "Venue/Location": "Edgbaston Golf Club, 25 Church Rd, Birmingham B15 3TB",
    "Changing rooms": "",
    "Start time": "09:30"
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Nottingham Men's 3",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Water Based, Nottingham Hockey Centre, University Boulevard, Nottingham. NG7 2PS",
    "Changing rooms": "",
    "Start time": 1900
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Nottingham Men's 4",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Sand dressed Astro, David Ross Sports Centre (DRSV), Beeston Lane, Nottingham. NG7 2RJ",
    "Changing rooms": "",
    "Start time": 1730
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "M6",
    "": "v",
    "Opposition Team": "Worcester Men's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Worcester International Hockey Centre, Droitwich Road, WR3 7SW",
    "Changing rooms": "",
    "Start time": 1615
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Hockey",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Oxford Women's 2",
    "H/A": "A",
    "L/C": "CC",
    "Venue/Location": "Fletcher Field Artificial Pitch Iffley Road Sports Centre OX4 1SR",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Lacrosse",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Oxford Brookes Men's 1",
    "H/A": "A",
    "L/C": "CC",
    "Venue/Location": "Oxford Brookes University Westminster Campus, Harcourt Hill, Oxford, OX2 9AT",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Lacrosse",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Oxford Brookes Women's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Oxford Brookes University Westminster Campus, Harcourt Hill, Oxford, OX2 9AT",
    "Changing rooms": "",
    "Start time": 1445
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Birmingham Men's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Bournbrook 3G, Bournbrook Pavilion, 48 Aston Webb Blvd, Birmingham B15 2GR",
    "Changing rooms": "",
    "Start time": 1800
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Rugby Union",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Lincoln Men's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Lincoln Rugby Football Club, Longdales Park, Lodge Farm, LN2 2RS",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Squash",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Birmingham Men's 5",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Sport and Fitness University of Birmingham B15 2TT",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Squash",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "East Anglia Men's 2",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Squash Courts, Sportspark, University of East Anglia, Norwich, NR4 7TJ",
    "Changing rooms": "",
    "Start time": 1530
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Table Tennis",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Nottingham Men's 5",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "David Ross Sports Centre (DRSV), Beeston Lane, Nottingham. NG7 2RJ",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "Cambridge Men's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "David Lloyd Peterborough, Thorpe Wood Health & Racquets Club, PE3 6SB",
    "Changing rooms": "",
    "Start time": 1200
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "M3",
    "": "v",
    "Opposition Team": "Nottingham Men's 4",
    "H/A": "A",
    "L/C": "CC",
    "Venue/Location": "Nottingham Tennis Centre, University Blvd, Nottingham NG7 2QH",
    "Changing rooms": "",
    "Start time": 1000
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Tennis",
    "NTU Team": "M6",
    "": "v",
    "Opposition Team": "Nottingham Men's 8",
    "H/A": "A",
    "L/C": "CT",
    "Venue/Location": "Nottingham Tennis Centre, University Blvd, Nottingham NG7 2QH",
    "Changing rooms": "",
    "Start time": 1700
  },
  {
    "Week": 19,
    "Date": "08/02/2023",
    "Day": "Wed",
    "Sport": "Water Polo",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Oxford Brookes Women's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Radley College Sports Centre, Radley College, Kennington Rd, Abingdon, OX14 2HR",
    "Changing rooms": "",
    "Start time": 1330
  },
  {
    "Week": 19,
    "Date": "10/02/2023",
    "Day": "Fri",
    "Sport": "Rugby Union",
    "NTU Team": "M5",
    "": "v",
    "Opposition Team": "Bedfordshire Men's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "University of Bedfordshire, Polhill Avenue, Bedford,",
    "Changing rooms": "",
    "Start time": 1900
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Fencing",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Lincoln Men's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Charles Wilson, University of Leicester, LE1 7RH",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Fencing",
    "NTU Team": "M1",
    "": "v",
    "Opposition Team": "Leicester Men's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Charles Wilson, University of Leicester, LE1 7RH",
    "Changing rooms": "",
    "Start time": 1600
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Fencing",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Loughborough Women's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "David Ross Sports Centre (DRSV), Beeston Lane, Nottingham. NG7 2RJ",
    "Changing rooms": "",
    "Start time": 1200
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Fencing",
    "NTU Team": "W1",
    "": "v",
    "Opposition Team": "Oxford Brookes Women's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "David Ross Sports Centre (DRSV), Beeston Lane, Nottingham. NG7 2RJ",
    "Changing rooms": "",
    "Start time": 1800
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Table Tennis",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Oxford Women's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Sports Hub - Sport and Wellness Hub, University of Warwick Cryfield Village, Leighfield Rd, Coventry CV4 7EU",
    "Changing rooms": "",
    "Start time": 1600
  },
  {
    "Week": 19,
    "Date": "11/02/2023",
    "Day": "Sat",
    "Sport": "Table Tennis",
    "NTU Team": "W2",
    "": "v",
    "Opposition Team": "Nottingham Women's 2",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Sports Hub - Sport and Wellness Hub, University of Warwick Cryfield Village, Leighfield Rd, Coventry CV4 7EU",
    "Changing rooms": "",
    "Start time": 1400
  },
  {
    "Week": 19,
    "Date": "12/02/2023",
    "Day": "Sun",
    "Sport": "American Football",
    "NTU Team": "Open 1",
    "": "v",
    "Opposition Team": "Staffordshire Open 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Sir Stanley Matthews Sports Centre - Playing fields, Staffordshire University, Leek Road, Stoke on Trent. ST4 2DF",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "12/02/2023",
    "Day": "Sun",
    "Sport": "Futsal",
    "NTU Team": "M2",
    "": "v",
    "Opposition Team": "De Montfort Men's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "Queen Elizabeth II Diamond Jubilee Leisure Centre, 50 Duns Ln, Leicester, LE3 5LX",
    "Changing rooms": "",
    "Start time": 1300
  },
  {
    "Week": 19,
    "Date": "12/02/2023",
    "Day": "Sun",
    "Sport": "Futsal",
    "NTU Team": "M4",
    "": "v",
    "Opposition Team": "Bedfordshire Men's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "University of Bedfordshire, Polhill Avenue, Bedford MK41 9EA",
    "Changing rooms": "",
    "Start time": 1230
  },
  {
    "Week": 19,
    "Date": "12/02/2023",
    "Day": "Sun",
    "Sport": "Table Tennis",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "Birmingham Women's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "University of Cambridge Sports Centre, CB3 0AS",
    "Changing rooms": "",
    "Start time": ""
  },
  {
    "Week": 19,
    "Date": "12/02/2023",
    "Day": "Sun",
    "Sport": "Table Tennis",
    "NTU Team": "W3",
    "": "v",
    "Opposition Team": "East Anglia Women's 1",
    "H/A": "A",
    "L/C": "L",
    "Venue/Location": "University of Cambridge Sports Centre, CB3 0AS",
    "Changing rooms": "",
    "Start time": 1300
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