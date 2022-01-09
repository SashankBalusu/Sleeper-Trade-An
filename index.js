function createPlayerGraph(playerScoresArr, playerProjectionsArr, weeksPassed){
  console.log(document.querySelector("#myChart3"))
  var ctx = document.getElementById("myChart3").getContext("2d");

  var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
  firstWeekPts = playerScoresArr[1]
  lastWeekPts = playerScoresArr[playerScoresArr.length]

  let color
  if (firstWeekPts > lastWeekPts){
    if ((firstWeekPts -10) > lastWeekPts) {
      gradientStroke.addColorStop(0, 'rgba(255, 51, 51, 1)');

      gradientStroke.addColorStop(1, 'rgba(255, 51, 51, 0.25)');
      color = "rgba(255, 51, 51, 1)"
    }
    else {
      gradientStroke.addColorStop(0, 'rgba(160, 160, 160, 1)');

      gradientStroke.addColorStop(1, 'rgba(160, 160, 160, 0.25)');
      color = "rgba(255, 51, 51, 1)"

    }
    
  }
  else {
    gradientStroke.addColorStop(0, 'rgba(102, 204, 0, 1)');

    gradientStroke.addColorStop(1, 'rgba(102, 204, 0, 0.25)');
    color = "rgba(102, 204, 0, 1)"

    
  }
  let labelArr = []
  for (let i = 0; i < weeksPassed-1; i++){
    labelArr.push("Week " + (i + 1))
  }
  var gradientStroke2 = ctx.createLinearGradient(500, 0, 100, 0);
  let tempStr = hexToRgb(invert(color))
  gradientStroke2.addColorStop(0, (tempStr + " 1"));
  gradientStroke2.addColorStop(1, (tempStr + " 0.25"));

  if (myChart){
    myChart.destroy()
  }
  myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labelArr,
          datasets: [{
              label: "Actual Points Scored",
              fontColor: "white",
              borderColor: gradientStroke,
              pointBorderColor: gradientStroke,
              pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
              pointHoverBorderColor: gradientStroke,
              pointBorderWidth: 10,
              pointHoverRadius: 10,
              pointHoverBorderWidth: 1,
              pointRadius: 3,
              fill: false,
              borderWidth: 4,
              data: playerScoresArr,
              spanGaps: true
          },
          {
            label: "Points Projected",
            fontColor: "white",
            borderColor: gradientStroke2,
            pointBorderColor: gradientStroke2,
            pointBackgroundColor: gradientStroke2,
          pointHoverBackgroundColor: gradientStroke2,
            pointHoverBorderColor: gradientStroke2,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: playerProjectionsArr,
            spanGaps: true
        }]
      },
      options: {          
          legend: {
              position: "bottom",
              fontColor: "black",
              maintainAspectRatio: false
          },
          scales: {
              yAxes: [{
                "scaleLabel": {
                  "display": true,
                  "labelString": "Points",
                  "fontColor": "white"
          
                }
              },
              { 
                gridLines: {
                  drawTicks: true,
                  display: true, 
                  zeroLineColor: "rgba(255, 255, 255, 0.25)",
                  color: "rgba(255, 255, 255, 0.25)"
              }
              }
            ],
              xAxes: [{
                "scaleLabel": {
                  "display": true,
                  "labelString": "Week",
                  "fontColor": "white"
          
                },
                  gridLines: {
                      zeroLineColor: "rgba(255, 255, 255, 0.25)",
                      color: "rgba(255, 255, 255, 0.25)"
                  },
                  ticks: {
                      padding: 20,
                      fontColor: "white",
                      fontStyle: "bold"
                  }
              }]
          },
          plugins: {
            title: {
                display: true,
                text: `Player's scores`,
                fontColor: "white"
            }
          }
          
      }
  });
}
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
function httpGetAsync(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, true); // true for asynchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}
Array.prototype.count = function (value) {
  let count = 0;

  this.forEach(item => {
    if (item === value) {
      count++;
  }
  });

  return count;
}
function getLowest(playerScores, numRanks) {
    count = 0
    playerScores.sort(function(a, b){return a - b})
    for (let i = 0; i < numRanks; i++) {
      count += playerScores[i]
    }
    return count
}
function getHighest(playerScores, numRanks) {
  count = 0
  playerScores.sort(function(a, b){return b-a})
  for (let i = 0; i < numRanks; i++) {
    count += playerScores[i]
  }
  return count
}
function animateItemOut(sleeperLeague){
  sleeperLeague.animate([
    // keyframes
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-1000px)' }
  ], {
    // timing options
    duration: 1100
  })
  return true
}
function animateItemIn(leagueIDInput, submitLeagueID){
  leagueIDInput.animate([
    // keyframes
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-50vw)' }
  ], {
    // timing options
    duration: 1100
  })
  submitLeagueID.animate([
    // keyframes
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-50vw)' }
  ], {
    // timing options
    duration: 500
  })
}
function loadGif (loadGif){
  loadGif.setAttribute("style", "display: block")
}
function hideForm(form){
  form.setAttribute("style", "display: none")
  return true
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function displayRanks(pos, positionRankingsTable, finalRankings){
  positionRankingsTable.setAttribute("style", "display: block")
  const tbody = document.querySelector("#sleepertbody")
  counter = 0
  for (let key in finalRankings[pos]){
    counter ++
    let row_2 = document.createElement('tr');
    row_2.setAttribute("style", "border:none;")
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.textContent = key;
    row_2_data_1.setAttribute("style", "border:none; text-align: center;")
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = counter;
    row_2_data_2.setAttribute("style", "border:none; text-align: center;")
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent = (finalRankings[pos][key]).toFixed(2);
    row_2_data_3.setAttribute("style", "border:none; text-align: center;")


    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2); 
  }
}
function displayStats(obj , heightWeightRanksTable, tbody){
  heightWeightRanksTable.setAttribute("style", "display: block")
  counter = 0
  for (let key in obj){
    counter ++
    let row_2 = document.createElement('tr');
    row_2.setAttribute("style", "border:none;")
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.textContent = key;
    row_2_data_1.setAttribute("style", "border:none; text-align: center;")
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = counter;
    row_2_data_2.setAttribute("style", "border:none; text-align: center;")
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent = obj[key];
    row_2_data_3.setAttribute("style", "border:none; text-align: center;")


    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2); 
  }
}
function removeAllChildNodes(parent) {
  try {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  catch {
    return
  }

  
}
function heightToInches(height){
  const arr = height.split("'")
  let feet = parseInt(arr[0])
  feet = feet*12
  feet+= parseInt(arr[1])
  return feet
}
function reverseWithMiddle(middle, num){
  let distance = middle - num
  return middle + distance
}
function makeRegColor(){
  const elements = document.getElementsByClassName("userTrades");
  for (let i = 0; i < elements.length; i++){
    elements[i].setAttribute("style", "color: #717387")
  }
}
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function invert(rgb) {
  rgb = [].slice.call(arguments).join(",").replace(/rgb\(|\)|rgba\(|\)|\s/gi, '').split(',');
  for (var i = 0; i < rgb.length; i++) rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}
function hexToRgb(hex) {
var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},`: null;
}

function removeAllChildNodesExceptOne(parent, dontRem){
  while (parent.firstChild.id != dontRem) {
    parent.removeChild(parent.firstChild);
    console.log("deleted")
}
console.log("finished deleting")
}
// function onReady(callback) {
//   var intervalId = window.setInterval(function() {
//     if (document.getElementsByTagName('body')[0] !== undefined) {
//       window.clearInterval(intervalId);
//       callback.call(this);
//     }
//   }, 1000);
// }

// function setVisible(selector, visible) {
//   document.querySelector(selector).style.display = visible ? 'block' : 'none';
// }


const sleeperLeague = document.querySelector("#sleeperLeague")
const leagueIDInput = document.querySelector("#leagueIDInput")
const submitLeagueID = document.querySelector("#submitLeagueID")
const loadTheGif = document.querySelector("#loadGif")
const mainSleeper = document.querySelector("#mainSleeper")
const positionRankings = document.querySelector("#positionRankings")
const content = document.querySelector("#content")
const positionRankingsContent = document.querySelector("#positionRankingsContent")
const positionRankingsTable = document.querySelector("#positionRanksTable")
const qbRanks = document.querySelector("#qbRanks")
const wrRanks = document.querySelector("#wrRanks")
const rbRanks = document.querySelector("#rbRanks")
const teRanks = document.querySelector("#teRanks")
const kRanks = document.querySelector("#kRanks")
const randomStats = document.querySelector("#randomStats")
const playerLookup = document.querySelector("#playerLookup")
const randomStatsContent = document.querySelector("#randomStatsContent")
const heightweightswitch = document.querySelector("#heightweightswitch")


let myChart, myChart2
let createOwnCount = 0
let statsArr = []
let projectionsArr = []

sleeperLeague.addEventListener("click", function(){
  console.log("hi")
  let cont = animateItemOut(sleeperLeague)
  if (cont == true){
    setTimeout(() => {sleeperLeague.setAttribute("style", "display:none")}, 600);
    //animateItemIn(leagueIDInput, submitLeagueID)
    setTimeout(() => {leagueIDInput.setAttribute("style", "display:block"), 
    submitLeagueID.setAttribute("style", "display:block")}, 700);
    for (let i = 1; i < 19; i++){
      fetch(`https://api.sleeper.app/v1/stats/nfl/regular/2021/${(i)}`)
      .then(response => response.json())
      .then(data => statsArr[i] = data);
      fetch(`https://api.sleeper.app/v1/projections/nfl/regular/2021/${(i)}`)
      .then(response => response.json())
      .then(data => projectionsArr[i] = data);
      // const projectionsData = httpGetAsync(`https://api.sleeper.app/v1/projections/nfl/regular/2021/${(i)}`)
      // const projections = JSON.parse(projectionsData)
      //projectionsArr[i] = projections
    }
    
  } 
  //sleeperLeague.classList.add("addmoveout")
})

  
userIDList = []
rosterByOwner = {}

submitLeagueID.addEventListener("click", function() {
    const sleeperIDForm = document.querySelector("#sleeperIDForm")
    sleeperIDForm.setAttribute("style", "display:none")
    //loadGif(loadTheGif)
    //loadGif(loadTheGif)
    let users, league, stat, player, rosters, nflState, matchupData, matchup
    let weeks = []
    let transactions = []
    
    let weeksPassed
    let leagueID = leagueIDInput.value
    let pastLeagueID = JSON.parse(localStorage.getItem("leagueID"))
    if (pastLeagueID == leagueID){
      users = JSON.parse(localStorage.getItem("users"))
      league = JSON.parse(localStorage.getItem("league"))
      stat = JSON.parse(localStorage.getItem("stat"))
      let playerData = httpGet("https://FlatPleasingCamel.sashankbalusu.repl.co")
      playerData = playerData.substring(78)
      playerData = playerData.substring(0, playerData.length -26)
      player = JSON.parse(playerData)
      rosters = JSON.parse(localStorage.getItem("rosters"))
      nflState = JSON.parse(localStorage.getItem("nflState"))
      matchupData = JSON.parse(localStorage.getItem("matchupData"))
      matchup = JSON.parse(localStorage.getItem("matchup"))
      weeks = JSON.parse(localStorage.getItem("weeks"))
      transactions = JSON.parse(localStorage.getItem("transactions"))
      weeksPassed = JSON.parse(localStorage.getItem("weeksPassed"))
      // statsArr = JSON.parse(localStorage.getItem("statsArr"))
      // projectionsArr = JSON.parse(localStorage.getItem("projectionsArr"))
      
  
    }
    else {
      let userData = httpGet("https://api.sleeper.app/v1/league/650072723749421056/users")
      users = JSON.parse(userData)
      let leagueData = httpGet("https://api.sleeper.app/v1/league/650072723749421056")
      league = JSON.parse(leagueData)
      let statData = httpGet("https://api.sleeper.app/v1/stats/nfl/regular/2021")
      stat = JSON.parse(statData)

      let playerData = httpGet("https://FlatPleasingCamel.sashankbalusu.repl.co")
      playerData = playerData.substring(78)
      playerData = playerData.substring(0, playerData.length -26)
      player = JSON.parse(playerData)

      let rosterData = httpGet(`https://api.sleeper.app/v1/league/${leagueID}/rosters`)
      
      rosters = JSON.parse(rosterData)

      let nflStateData = httpGet("https://api.sleeper.app/v1/state/nfl")
      nflState = JSON.parse(nflStateData)

      weeksPassed = nflState["leg"]
      
      // let weeks = []
      // let matchupData
      // let matchup
      for (let i = 1; i < weeksPassed; i++){
        matchupData = httpGet(`https://api.sleeper.app/v1/league/650072723749421056/matchups/${(i)}`)
        matchup = JSON.parse(matchupData)
        weeks[i] = matchup
        
        
        const transactionData = httpGet(`https://api.sleeper.app/v1/league/650072723749421056/transactions/${(i)}`)
        const trans = JSON.parse(transactionData)
        transactions[i] = trans
        
        
      }
      try {
        localStorage.setItem("leagueID", JSON.stringify(leagueID))
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("league", JSON.stringify(league))
        localStorage.setItem("stat", JSON.stringify(stat))
        localStorage.setItem("rosters", JSON.stringify(rosters))
        localStorage.setItem("nflState", JSON.stringify(nflState))
        localStorage.setItem("weeksPassed", JSON.stringify(weeksPassed))
        localStorage.setItem("matchupData", JSON.stringify(matchupData))
        localStorage.setItem("matchup", JSON.stringify(matchup))
        localStorage.setItem("weeks", JSON.stringify(weeks))
        localStorage.setItem("transactions", JSON.stringify(transactions))
      }
      catch {
        localStorage.removeItem("leagueID")
      }
      

      // localStorage.setItem("statsArr", JSON.stringify(statsArr))

      // localStorage.setItem("projectionsArr", JSON.stringify(projectionsArr))

    }
    
    numUsers = league["total_rosters"]

    let usernameObj = {}
    let rosterIDObj = {}
    for (let i = 0; i < numUsers; i++) {
      userID = users[i]["user_id"]
      userIDList.push(userID)
      let username = users[i]["display_name"]
      usernameObj[userID] = username
      for (let j = 0; j < numUsers; j++){
        if (users[i]["user_id"] == rosters[j]["owner_id"]){
          rosterIDObj[users[i]["user_id"]] = rosters[j]["roster_id"]
          break
        }
      }


    }
    for (let i = 0; i < userIDList.length; i++) {
      roster = rosters[i]["players"]
      //console.log("roster" + roster)
      for (let z = roster.length; z--;){
        let pos = roster[z]
        let pos2 = player[pos]["position"]
        if (pos2 == "DEF"){
          roster.splice(z, 1)          
        }

      }
      for (let j = 0; j < roster.length; j++) {
        playerID = roster[j]
        roster[j] = {}
        roster[j]["player_id"] = playerID
        roster[j]["player_name"] = player[playerID]["search_full_name"]
        playerPosition = player[playerID]["position"]
        roster[j]["position"] = playerPosition
        //add league type check for stats eventually, right now it will default ppr
        playerRank = stat[playerID]["rank_ppr"]
        roster[j]["player_rank"] = playerRank
        playerheight = player[playerID]["height"].substring(0,player[playerID]['height'].length - 1)
        roster[j]["height"] = playerheight
        roster[j]["weight"] = player[playerID]["weight"]
        let ptsppr = stat[playerID]["pts_ppr"]
        let tds = 0
        let ptsfromtds = 0
        if (stat[playerID]["rec_td"]){
          tds+=parseInt(stat[playerID]["rec_td"])
          ptsfromtds+= tds*6

        }
        if (stat[playerID]["rush_td"]){
          tds+=parseInt(stat[playerID]["rush_td"])
          ptsfromtds+= (parseInt(stat[playerID]["rush_td"])*6)
        }
        if (stat[playerID]["pass_td"]){
          tds+=parseInt(stat[playerID]["pass_td"])
          ptsfromtds+=(parseInt(stat[playerID]["pass_td"])*4)
        }
        let gp = stat[playerID]["gp"]
        let percentpointsfromtds = ptsfromtds/ptsppr*100
        percentpointsfromtds = reverseWithMiddle(50, percentpointsfromtds)
        let playerVal = ((percentpointsfromtds/100)*5) + (((ptsppr/gp)/100)*50)
        roster[j]["tds"] = percentpointsfromtds

        roster[j]["playerVal"] = playerVal
      }
      ownerID = rosters[i]["owner_id"]
      rosterByOwner[ownerID] = roster
    }
    
    playerPositions = league["roster_positions"]
    playerPosCopy = []
    numPos = {}
  
    for (let i = 0; i < playerPositions.length; i++) {
      currPlayer = playerPositions[i]
      if (playerPosCopy.length == 0) {
        x = playerPositions.count(playerPositions[i])
        playerPosCopy.push(currPlayer)
        numPos[currPlayer] = x
      }
      else {
  
        for (let j = 0; j < playerPosCopy.length; j++) {
          if (playerPosCopy[j] == currPlayer) {
            break
          }
          else {
            if (playerPosCopy.length == 0) {
  
              x = playerPositions.count(playerPositions[i])
              playerPosCopy.push(currPlayer)
              numPos[currPlayer] = x
            }
            else if (j == (playerPosCopy.length - 1)) {
              x = playerPositions.count(playerPositions[i])
              playerPosCopy.push(currPlayer)
              numPos[currPlayer] = x
            }
          }
        }
      }
  
  
    }
    playerScores = []
    ownerPosRank = {}
    lowestScores = {}
  
    for (let key in rosterByOwner) {
      for (let playerPosKey of playerPosCopy) {
        if (playerPosKey != "BN" && playerPosKey != "FLEX" && playerPosKey != "DEF") {
          ownerPlayers = rosterByOwner[key]
          for (let player of ownerPlayers) {
            if (player["position"] == playerPosKey){
              playerScores.push(player["playerVal"])
            }
          }
          lowestScores[playerPosKey] = getHighest(playerScores, numPos[playerPosKey])
          ownerPosRank[key] = lowestScores
          playerScores = []
        }
      }
      lowestScores = {}
  
    }


  
    finalRankings = {}
    tempObj = {}
    for (let i of playerPosCopy){
      if (i != "BN" && i != "FLEX" && i != "DEF"){
        for (let key in ownerPosRank){
          // username = httpGet(`https://api.sleeper.app/v1/user/${key}`)
          // username = JSON.parse(username)
          // username = username["username"]
          let usernameFromObj = usernameObj[key]
          tempObj[usernameFromObj] = ownerPosRank[key][i]
        }
        let posSorted = Object.fromEntries(
        Object.entries(tempObj).sort(([,a],[,b]) => b-a)
        )
        finalRankings[i] = posSorted
        tempObj = {}
      }
    }
    let numericRank = {}
    let ranks = {}
    for (let owner in rosterByOwner) {
      for (let key in finalRankings){
        let temp = finalRankings[key]
        let iterate = 0
        let index
        for (let [user, value] of Object.entries(temp)) {
          iterate++
          if (user == usernameObj[owner]){
            index = iterate
          }
        }
        // for (let user in temp){
        //   if (user == usernameObj[owner]){
        //     index = iterate
        //   }
        //   else {
        //     iterate ++
        //   }
        // }
        ranks[key] = index


        // var index = temp.findIndex(p => p.attr1 == usernameObj[owner]);
  
      }
      numericRank[usernameObj[owner]] = ranks
      ranks = {}
    }
    let positionalNeed = {}
    for (let key in numericRank){
      let posNeedGive = {}
      let need = []
      let give = []
      let rank = numericRank[key]
      for (let innerkey in rank){
        let posRank = rank[innerkey]
        if (posRank >= (userIDList.length/2)){
          need.push(innerkey)
        }
        else {
          give.push(innerkey)
        }


      }
      posNeedGive["need"] = need
      posNeedGive["give"] = give
      positionalNeed[key] = posNeedGive
      posNeedGive = {}
    }
    const trades = document.querySelector("#trades")
    const stats = document.querySelector("#stats")
    let customTrade = document.createElement("a")
    customTrade.textContent = "Create your own"
    customTrade.setAttribute("style", "color:#717387")
    customTrade.classList.add("userTrades")
    customTrade.id = "createOwn"
    trades.appendChild(customTrade)
    for (let key in usernameObj){
      let a = document.createElement("a")
      a.textContent = usernameObj[key]
      a.setAttribute("style", "color:#717387")
      a.classList.add("userTrades")
      a.id = usernameObj[key]
      trades.appendChild(a)
    }
    let margin = userIDList.length*25+265
    stats.setAttribute("style", "margin-top: " + margin + "px")
    mainSleeper.setAttribute("style", "display: grid")
    const elements = document.getElementsByClassName("userTrades");
    let counter = 0

    //add trades later on
    let myFunction = function(elements, loc) {
      if (elements[loc].id == "createOwn"){
        return
      }
      positionRankingsContent.setAttribute("style", "display:none")
      randomStatsContent.setAttribute("style", "display:none")
      document.querySelector("#tradeContent").setAttribute("style", "display: block")
      document.querySelector("#chooseTradeContent").setAttribute("style", "display:none;")
      makeRegColor()
      elements[loc].setAttribute("style", "color: white")
      createOwn.setAttribute("style", "color: #717387")
      positionRankings.setAttribute("style", "color:#717387")
      randomStats.setAttribute("style", "color:#717387")
      playerLookup.setAttribute("style", "color: #717387")
      const playerLookupContent = document.querySelector("#playerLookupContent")
      playerLookupContent.setAttribute("style", "display: none")
      //fix hardcoded names
      var chartjson = {
        "title": `${elements[loc].id}'s ranks`,
        "data": [{
          "name": "QB",
          "score": numericRank[elements[loc].id]["QB"]
        }, {
          "name": "WR",
          "score": numericRank[elements[loc].id]["WR"]
        }, {
          "name": "RB",
          "score": numericRank[elements[loc].id]["RB"]
        }, {
          "name": "TE",
          "score": numericRank[elements[loc].id]["TE"]
        }, {
          "name": "K",
          "score": numericRank[elements[loc].id]["K"]
        }],
        "xtitle": "Secured Marks",
        "ytitle": "Marks",
        "ymax": 10,
        "ykey": 'score',
        "xkey": "name",
        "prefix": "%"
      }
      
      //chart colors
      var colors = ['one',  'four', 'seven', 'ten', 'thirteen', 'fourteen'];
      
      //constants
      var TROW = 'tr',
        TDATA = 'td';
      
      var chart = document.createElement('div');
      //create the chart canvas
      var barchart = document.createElement('table');
      //create the title row
      var titlerow = document.createElement(TROW);
      //create the title data
      var titledata = document.createElement(TDATA);
      titledata.setAttribute("style", "border: none;")
      //make the colspan to number of records
      titledata.setAttribute('colspan', chartjson.data.length + 1);
      titledata.setAttribute('class', 'charttitle');
      titledata.innerText = chartjson.title;
      titlerow.appendChild(titledata);
      barchart.appendChild(titlerow);
      chart.appendChild(barchart);
      
      //create the bar row
      var barrow = document.createElement(TROW);
      
      //lets add data to the chart
      for (var i = 0; i < chartjson.data.length; i++) {
        barrow.setAttribute('class', 'bars');
        var prefix = chartjson.prefix || '';
        //create the bar data
        var bardata = document.createElement(TDATA);

        bardata.setAttribute("style", "text-align: center; border: none;")
        var bar = document.createElement('div');
        bar.setAttribute('class', colors[i]);
        let height = reverseWithMiddle(5.5, (chartjson.data[i][chartjson.ykey]))
        bar.style.height = height*10 + prefix;
        bar.style.width = "40px"
        bardata.innerText = chartjson.data[i][chartjson.ykey];
        bardata.appendChild(bar);
        barrow.appendChild(bardata);
      }
      
      //create legends
      var legendrow = document.createElement(TROW);
      var legend = document.createElement(TDATA);
      legend.setAttribute("style", "border:none")
      legend.setAttribute('class', 'legend');
      legend.setAttribute('colspan', chartjson.data.length);
      
      //add legend data
      for (var i = 0; i < chartjson.data.length; i++) {
        var legbox = document.createElement('span');
        legbox.setAttribute('class', 'legbox');
        var barname = document.createElement('span');
        barname.setAttribute('class', colors[i] + ' xaxisname');
        var bartext = document.createElement('span');
        bartext.innerText = chartjson.data[i][chartjson.xkey];
        legbox.appendChild(barname);
        legbox.appendChild(bartext);
        legend.appendChild(legbox);
      }
      barrow.appendChild(legend);
      barchart.appendChild(barrow);
      barchart.appendChild(legendrow);
      chart.appendChild(barchart);
      document.getElementById('chart').innerHTML = chart.outerHTML;
      // counter++
      // if (counter <3){
      //   alert("trades feature (hopefully) coming soon")

      // }
      // else {
      //   alert("oml stop clicking I said the trade feature is coming soon")
        
      // }
      var ctx = document.getElementById('myChart').getContext("2d");

      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      
      let labelArr = []
      for (let i = 0; i < weeksPassed-1; i++){
        labelArr.push("Week " + (i + 1))
      }
      let dataArr = []
      let name = elements[loc].id
      let uID = getKeyByValue(usernameObj, name)
      let rosterID = rosterIDObj[uID]

      for (let i = 1; i < weeksPassed; i++){
        // let matchupData = httpGet(`https://api.sleeper.app/v1/league/650072723749421056/matchups/${(i)}`)
        // const matchup = JSON.parse(matchupData)
        let currMatchup = weeks[i]
        for (let j = 0; j < matchup.length; j++){
          if (currMatchup[j]["roster_id"] == rosterID){
            dataArr.push(currMatchup[j]["points"])
          }
        }
      }
      let firstWeekPts = 0
      let lastWeekPts = 0
      for (let i = 0; i < matchup.length; i++){
        let firstmatchup = weeks[1]
        let lastmatchup = weeks[weeksPassed-1]

        if (firstmatchup[i]["roster_id"] == rosterID){
          firstWeekPts = firstmatchup[i]["points"]
        }
        if (lastmatchup[i]["roster_id"] == rosterID){
          lastWeekPts = lastmatchup[i]["points"]
        }

      }
      let color
      if (firstWeekPts > lastWeekPts){
        if ((firstWeekPts -10) > lastWeekPts) {
          gradientStroke.addColorStop(0, 'rgba(255, 51, 51, 1)');

          gradientStroke.addColorStop(1, 'rgba(255, 51, 51, 0.25)');
          color = "rgba(255, 51, 51, 1)"
        }
        else {
          gradientStroke.addColorStop(0, 'rgba(160, 160, 160, 1)');

          gradientStroke.addColorStop(1, 'rgba(160, 160, 160, 0.25)');
          color = "rgba(255, 51, 51, 1)"

        }
        
      }
      else {
        gradientStroke.addColorStop(0, 'rgba(102, 204, 0, 1)');

        gradientStroke.addColorStop(1, 'rgba(102, 204, 0, 0.25)');
        color = "rgba(102, 204, 0, 1)"

        
      }
      let amtTransactionsByWeek = []
      let amountTrans = 0
      let amountTrades = 0
      for (let i = 1; i < transactions.length; i++){
        let currWeekTransactions = transactions[i]
        for (let j = 0; j < currWeekTransactions.length; j++){
          if (currWeekTransactions[j]["roster_ids"].length == 1){
            let checkIfOnlyDrop = false
            if (currWeekTransactions[j]["adds"] != "null") {
              checkIfOnlyDrop = true
            }
            if (currWeekTransactions[j]["roster_ids"][0] == rosterID && currWeekTransactions[j]["status"] == "complete" && checkIfOnlyDrop == true) {
              amountTrans ++
            }
          }
          else {
            for (let z = 0; z < currWeekTransactions[j]["roster_ids"].length; z++){
              if (currWeekTransactions[j]["roster_ids"][z] == rosterID){
                amountTrades++
                amountTrans++
                break;
              }
            }
          }
        }
        amtTransactionsByWeek[i-1] = amountTrans
        amountTrans = 0
      }
      var gradientStroke2 = ctx.createLinearGradient(500, 0, 100, 0);
      let tempStr = hexToRgb(invert(color))
      gradientStroke2.addColorStop(0, (tempStr + " 1"));
      gradientStroke2.addColorStop(1, (tempStr + " 0.25"));

      if (myChart){
        myChart.destroy()
      }
      myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: labelArr,
              datasets: [{
                  label: "Score",
                  fontColor: "white",
                  borderColor: gradientStroke,
                  pointBorderColor: gradientStroke,
                  pointBackgroundColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                  pointHoverBorderColor: gradientStroke,
                  pointBorderWidth: 10,
                  pointHoverRadius: 10,
                  pointHoverBorderWidth: 1,
                  pointRadius: 3,
                  fill: false,
                  borderWidth: 4,
                  data: dataArr,
                  yAxisID:"left"
              },
              {
                label: "Transactions",
                fontColor: "white",
                borderColor: gradientStroke2,
                pointBorderColor: gradientStroke2,
                pointBackgroundColor: gradientStroke2,
              pointHoverBackgroundColor: gradientStroke2,
                pointHoverBorderColor: gradientStroke2,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: false,
                borderWidth: 4,
                data: amtTransactionsByWeek,
                yAxisID:"right"
            }]
          },
          options: {          
              legend: {
                  position: "bottom",
                  fontColor: "black",
                  maintainAspectRatio: false
              },
              scales: {
                  yAxes: [{
                    "scaleLabel": {
                      "display": true,
                      "labelString": "Points Scored",
                      "fontColor": "white"
              
                    },
                    "id": "left",
                    "stacked": false,
                    "ticks": {
                      "beginAtZero": true,
                       fontColor: "white"

                    }
                  },
                  {
                    "scaleLabel": {
                      "display": true,
                      "labelString": "Transactions",
                      "fontColor": "white"

                    },
                    "id": "right",
                    "position": "right",
                    "stacked": false,
                    "ticks": {
                      "beginAtZero": true,
                       fontColor: "white"

                    }, 
                    gridLines: {
                      drawTicks: true,
                      display: true, 
                      zeroLineColor: "rgba(255, 255, 255, 0.25)",
                      color: "rgba(255, 255, 255, 0.25)"
                  }
                  }
                ],
                  xAxes: [{
                    "scaleLabel": {
                      "display": true,
                      "labelString": "Week",
                      "fontColor": "white"
              
                    },
                      gridLines: {
                          zeroLineColor: "rgba(255, 255, 255, 0.25)",
                          color: "rgba(255, 255, 255, 0.25)"
                      },
                      ticks: {
                          padding: 20,
                          fontColor: "white",
                          fontStyle: "bold"
                      }
                  }]
              },
              plugins: {
                title: {
                    display: true,
                    text: `${name}'s scores`,
                    fontColor: "white"
                }
              }
              
          }
      });
      let weekInput = document.querySelector("#weekInput")
      weekInput.max = `${weeksPassed-1}`
      weekInput.oninput = displayChart
      displayChart()

      function displayChart(){
        let weekVal = weekInput.value
        let posPoints = {}
        let maxScores = []
        for (let key in numPos){
          posPoints[key] = []
        }
        for (let i = 1; i < weeks.length; i++){
          let currMatch = weeks[i]
          for (let j = 0; j < currMatch.length; j++){
            if (currMatch[j]["roster_id"] == rosterID){
              let currMatchPlayers = currMatch[j]["players"]
              let flexPoints = []
              for (let z = 0; z < currMatchPlayers.length; z++){
                let currPlayerID = currMatchPlayers[z]
                let currPlayerPosition = player[currPlayerID]["position"]
                if (currPlayerPosition == "FB"){
                  currPlayerPosition = "RB"
                }
                //console.log(currMatch[j]["player_points"])
                let currPlayerPoints = currMatch[j]["players_points"][currPlayerID]
                let playerPositionPoints = posPoints[currPlayerPosition]
                playerPositionPoints.push(currPlayerPoints)
                posPoints[currPlayerPosition] = playerPositionPoints
                if (currPlayerPosition == "WR" || currPlayerPosition == "RB" || currPlayerPosition == "TE"){
                  flexPoints.push(currPlayerPoints)
                  posPoints["FLEX"] = flexPoints
      
                }
      
      
              }
            }
      
          }
          for (let key in posPoints){
            if (key == "FLEX"){
              //let cumpos = 0
              let maxArr = []
                let tempNum = numPos["WR"]
                let wrMaxSorted = posPoints["WR"].sort((a, b) => b-a);
                let wrMax = wrMaxSorted[tempNum]
                maxArr.push(wrMax)
                tempNum = numPos["RB"]
                let rbMaxSorted = posPoints["RB"].sort((a, b) => b-a);
                let rbMax = rbMaxSorted[tempNum]
                maxArr.push(rbMax)
      
                tempNum = numPos["TE"]
                let teMaxSorted = posPoints["TE"].sort((a, b) => b-a);
                let teMax = teMaxSorted[tempNum]
                maxArr.push(teMax)
      
        
      
                // if (innerkey == "WR" ||innerkey == "RB" ||innerkey == "TE"){
                //   cumpos+= numPos[innerkey] 
                // }
              
              //let posPointsFlex = posPoints[key]
              let sorted = maxArr.sort((a, b) => b-a)
              let pointsToUse = sorted[0]
              let pointsToUseArr = []
              pointsToUseArr.push(pointsToUse)
              posPoints[key] = pointsToUseArr
              continue
            }
            
      
          }
          for (let key in posPoints){
            let posPointsValue = posPoints[key]
            let highestToLowest = posPointsValue.sort((a, b) => b-a);
            let amount = numPos[key]
            const slicedArray = highestToLowest.slice(0, amount);
            posPoints[key] = slicedArray
          }
          let maxScore = 0
          for (let key in posPoints){
            let currPos = posPoints[key]
            for (let j = 0; j < currPos.length; j++){
              maxScore += currPos[j]
            }
          }
          maxScores.push(maxScore)
          
          posPoints = {}
          for (let key in numPos){
            posPoints[key] = []
          }
      
        }
        let maxPointsScored = []
        let truePointsScored = []
        let totalPointsScored
        for (let i = 1; i < maxScores.length+1; i++){
          let currMatch = weeks[i]
          for (let j = 0; j < currMatch.length; j++){
            if (currMatch[j]["roster_id"] == rosterID){
              truePointsScored.push(currMatch[j]["points"])
            }
          }
          maxPointsScored.push(parseFloat(maxScores[i-1].toFixed(1)))
        }
        var ctx = document.getElementById("myChart2");
        if (myChart2){
          myChart2.destroy()
        }
        let dataPieChart = [truePointsScored[weekVal-1], (maxPointsScored[weekVal-1]-truePointsScored[weekVal-1]).toFixed(1)]
        myChart2 = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ["Total", "Points Missed"],
            datasets: [{
              label: '# of Tomatoes',
              data: dataPieChart,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            cutoutPercentage: 40,
            responsive: false,
            title: {
                display: true,
                text: `${name}'s week ${weekVal} data`,
                fontColor: "white"
            }
            
      
          }
        });
      }
      //console.log(percentageOfTotal)
    };
   

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(){
          myFunction(elements, i)}
        , false);
    }
    positionRankings.addEventListener("click", function(){
      makeRegColor()
      positionRankings.setAttribute("style", "color: white")
      randomStats.setAttribute("style", "color:#717387")
      createOwn.setAttribute("style", "color: #717387")
      document.querySelector("#tradeContent").setAttribute("style", "display:none;")
      document.querySelector("#chooseTradeContent").setAttribute("style", "display:none;")
      randomStatsContent.setAttribute("style", "display:none")
      playerLookup.setAttribute("style", "color: #717387")
      const playerLookupContent = document.querySelector("#playerLookupContent")
      playerLookupContent.setAttribute("style", "display: none")
      positionRankingsContent.setAttribute("style", "display:block")
      //console.log(finalRankings)
    })
    qbRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("QB", positionRankingsTable, finalRankings)
      qbRanks.setAttribute("style", "background:white; color: black;")
      wrRanks.setAttribute("style", "background:#222430")
      rbRanks.setAttribute("style", "background:#222430")
      teRanks.setAttribute("style", "background:#222430")
      kRanks.setAttribute("style", "background:#222430")

    })
    wrRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("WR", positionRankingsTable, finalRankings)
      wrRanks.setAttribute("style", "background:white; color: black;")
      qbRanks.setAttribute("style", "background:#222430")
      rbRanks.setAttribute("style", "background:#222430")
      teRanks.setAttribute("style", "background:#222430")
      kRanks.setAttribute("style", "background:#222430")

    })
    rbRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("RB", positionRankingsTable, finalRankings)
      rbRanks.setAttribute("style", "background:white; color: black;")
      wrRanks.setAttribute("style", "background:#222430")
      qbRanks.setAttribute("style", "background:#222430")
      teRanks.setAttribute("style", "background:#222430")
      kRanks.setAttribute("style", "background:#222430")

    })
    teRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("TE", positionRankingsTable, finalRankings)
      teRanks.setAttribute("style", "background:white; color: black;")
      wrRanks.setAttribute("style", "background:#222430")
      rbRanks.setAttribute("style", "background:#222430")
      qbRanks.setAttribute("style", "background:#222430")
      kRanks.setAttribute("style", "background:#222430")

    })
    kRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("K", positionRankingsTable, finalRankings)
      kRanks.setAttribute("style", "background:white; color: black;")
      wrRanks.setAttribute("style", "background:#222430")
      rbRanks.setAttribute("style", "background:#222430")
      teRanks.setAttribute("style", "background:#222430")
      qbRanks.setAttribute("style", "background:#222430")

    })
    playerLookup.addEventListener("click", function(){
      makeRegColor()
      positionRankings.setAttribute("style", "color: #717387")
      randomStats.setAttribute("style", "color:#717387")
      createOwn.setAttribute("style", "color: #717387")
      document.querySelector("#tradeContent").setAttribute("style", "display:none;")
      document.querySelector("#chooseTradeContent").setAttribute("style", "display:none;")
      randomStatsContent.setAttribute("style", "display:none")
      positionRankingsContent.setAttribute("style", "display:none")
      playerLookup.setAttribute("style", "color: white")
      const playerLookupContent = document.querySelector("#playerLookupContent")
      playerLookupContent.setAttribute("style", "display: block")
      const results = document.querySelector("#results")
      results.setAttribute("style", "display: block")
      const lookup = document.querySelector("#lookup")
      lookup.setAttribute("style", "display: block")
      const singlePlayerInfo = document.querySelector("#singlePlayerInfo")
      singlePlayerInfo.setAttribute("style", "display: none")
      let searchPlayer = document.querySelector("#searchPlayer")
      searchPlayer.oninput = updateAuto
      function updateAuto(){
        removeAllChildNodes(document.querySelector("#results"))
        let len = searchPlayer.value.length
        let count = 0
        let resultsArr = {}
        let playerIDObj = {}
        for (let key in player){
          
          if (len == 0){
            break
          }
          if (player[key]["position"]!= "RB" && player[key]["position"]!= "FB"&& player[key]["position"]!= "QB"&& player[key]["position"]!= "WR"&& player[key]["position"]!= "TE"&& player[key]["postion"]!= "K"){
            continue
            
          }
          let sub = player[key]["full_name"]
          try {
            sub = sub.slice(0, len)
          }
          catch {
            continue
          }
          if (searchPlayer.value.toLowerCase() == sub.toLowerCase() ){
            let rank

            if (player[key]["search_rank"] == null){
              rank = 9999999
            }
            else {
              rank = player[key]["search_rank"]
            }
            resultsArr[player[key]["full_name"]] = rank
            playerIDObj[player[key]["full_name"]] = key
            

          }
        }
        let resultsArrSorted = Object.fromEntries(
          Object.entries(resultsArr).sort(([,a],[,b]) => a-b)
          )
        console.log(resultsArrSorted)
        for (let key in resultsArrSorted){
          if (count == 25){
            break
          }
          let results = document.querySelector("#results")
          let div = document.createElement("div")
          div.classList.add("playerWrapper")
          let p = document.createElement("p")
          p.textContent= key
          p.classList.add("players")
          p.id = playerIDObj[key]
          div.appendChild(p)
          results.appendChild(div) 
          count ++

        }
        let allPlayersResult = document.querySelectorAll(".players")
        allPlayersResult.forEach(singlePlayer => singlePlayer.addEventListener("click", function(){
          console.log("hi")
          const singlePlayerInfo = document.querySelector("#singlePlayerInfo")
          const truePlayerInfo = document.querySelector("#truePlayerInfo")
          const myChart3Wrapper = document.querySelector("#myChart3Wrapper")
          removeAllChildNodesExceptOne(truePlayerInfo, "myChart3Wrapper")
          singlePlayerInfo.setAttribute("style", "display: block")
          let playerName = document.createElement("h1")
          playerName.textContent = singlePlayer.textContent
          truePlayerInfo.insertBefore(playerName, myChart3Wrapper)
          const results = document.querySelector("#results")
          results.setAttribute("style", "display: none")
          const lookup = document.querySelector("#lookup")
          lookup.setAttribute("style", "display: none")
          let playerID = singlePlayer.id
          let height = document.createElement("p")
          height.textContent = `Height: ${player[playerID]["height"]}`
          truePlayerInfo.insertBefore(height, myChart3Wrapper)
          let weight = document.createElement("p")
          weight.textContent = `Weight: ${player[playerID]["weight"]}`
          truePlayerInfo.insertBefore(weight, myChart3Wrapper)
          let playerScoresArr = []

          for (let i = 1; i < weeksPassed; i++){
            let finished1 = false
            let currWeekStats = statsArr[i]
            for (let innerkey in currWeekStats){
              if (innerkey == playerID){
                playerScoresArr.push(currWeekStats[innerkey]["pts_ppr"])
                finished1 = true
                break
              }
            }
            if (finished1 == false) {
              playerScoresArr.push(0.0)
            }

          }
          let playerProjectionsArr = []
          for (let i = 1; i < weeksPassed; i++){
            let currWeekProjections = projectionsArr[i]
            let finished = false
            for (let innerkey in currWeekProjections){
              if (innerkey == playerID){
                if (currWeekProjections[innerkey]["pts_ppr"] == undefined){
                  playerProjectionsArr.push(0.0)
                }
                else {
                  playerProjectionsArr.push(currWeekProjections[innerkey]["pts_ppr"])

                }
                finished = true
                break
              }
            }
            if (finished == false){
              playerProjectionsArr.push(0.0)
            }
            
          }
          createPlayerGraph(playerScoresArr, playerProjectionsArr, weeksPassed)

          console.log(playerProjectionsArr)
          console.log(playerScoresArr)

        }))
        console.log("hi")
      }
      const exitStats = document.querySelector("#exitStats")
      exitStats.addEventListener("click", function(){
        const singlePlayerInfo = document.querySelector("#singlePlayerInfo")
        singlePlayerInfo.setAttribute("style", "display: none")
        const lookup = document.querySelector("#lookup")
        lookup.setAttribute("style", "display: block")
        const results = document.querySelector("#results")
        results.setAttribute("style", "display: block")
        
      })
    })
    randomStats.addEventListener("click", function(){
      makeRegColor()
      document.querySelector("#tradeContent").setAttribute("style", "display:none;")
      positionRankings.setAttribute("style", "color: #717387")
      createOwn.setAttribute("style", "color: #717387")
      playerLookup.setAttribute("style", "color: #717387")
      const playerLookupContent = document.querySelector("#playerLookupContent")
      playerLookupContent.setAttribute("style", "display: none")
      randomStats.setAttribute("style", "color: white")
      removeAllChildNodes(document.querySelector("#sleepertbodystats"))
      removeAllChildNodes(document.querySelector("#sleepertbodytransactions"))
      removeAllChildNodes(document.querySelector("#sleepertbodywins"))

      positionRankingsContent.setAttribute("style", "display:none")
      document.querySelector("#chooseTradeContent").setAttribute("style", "display:none;")
      weightObj = {}
      heightObj = {}

      for (key in rosterByOwner){
        let totalweight = 0
        let totalHeight = 0
        let countPlayersHeight = 0
        let countPlayersWeight = 0

        let roster = rosterByOwner[key]
        for (let ownerRoster in roster){
          //now u have each player
          let playerWeight = parseInt(roster[ownerRoster]['weight'])
          let playerHeight = roster[ownerRoster]['height']
          if (playerHeight){
            let playerHeightInches = heightToInches(playerHeight)

            totalHeight += playerHeightInches
            countPlayersHeight++
          }

          if (playerWeight){
            totalweight += playerWeight
            countPlayersWeight++
          }
          
        }
        let username = usernameObj[key]
        heightObj[username] = (totalHeight/countPlayersHeight).toFixed(2)
        weightObj[username] = (totalweight/countPlayersWeight).toFixed(2)
      }
      let weightObjSorted = Object.fromEntries(
        Object.entries(weightObj).sort(([,a],[,b]) => b-a)
      )
      let heightObjSorted = Object.fromEntries(
        Object.entries(heightObj).sort(([,a],[,b]) => b-a)
      )
      displayStats(weightObjSorted, document.querySelector("#heightWeightRanksTable"),document.querySelector("#sleepertbodystats") )
      randomStatsContent.setAttribute("style", "display:block;")
      heightweightswitch.addEventListener("click", function(){
        if (heightweightswitch.checked){
          removeAllChildNodes(document.querySelector("#sleepertbodystats"))
          
          displayStats(heightObjSorted, document.querySelector("#heightWeightRanksTable"),document.querySelector("#sleepertbodystats"))
          //console.log(heightObjSorted)
        }
        else {
          removeAllChildNodes(document.querySelector("#sleepertbodystats"))

          displayStats(weightObjSorted, document.querySelector("#heightWeightRanksTable"), document.querySelector("#sleepertbodystats"))

          //console.log(weightObjSorted)
        }
      })
      let amountTrans = 0
      let transactionObj = {}
      for (let user in rosterIDObj){
        let rosterID = rosterIDObj[user]
        
        for (let i = 1; i < transactions.length; i++){
          let currWeekTransactions = transactions[i]
          for (let j = 0; j < currWeekTransactions.length; j++){
            if (currWeekTransactions[j]["roster_ids"].length == 1){
              let checkIfOnlyDrop = false
              if (currWeekTransactions[j]["adds"] != null) {
                checkIfOnlyDrop = true
              }
              if (currWeekTransactions[j]["roster_ids"][0] == rosterID && currWeekTransactions[j]["status"] == "complete" && checkIfOnlyDrop == true) {
                amountTrans ++
              }
            }
            else {
              for (let z = 0; z < currWeekTransactions[j]["roster_ids"].length; z++){
                if (currWeekTransactions[j]["roster_ids"][z] == rosterID){
                  amountTrans++
                  break;
                }
              }
            }
          }
        }
        transactionObj[usernameObj[user]] = amountTrans
        amountTrans = 0

        
      }
      let transactionObjSorted = Object.fromEntries(
        Object.entries(transactionObj).sort(([,a],[,b]) => b-a)
      )
      displayStats(transactionObjSorted, document.querySelector("#transactionRanksTable"),document.querySelector("#sleepertbodytransactions") )
      let winsByOwner = {}
      for (let i = 0; i < rosters.length; i++){
        winsByOwner[rosters[i]["owner_id"]] = rosters[i]["settings"]["wins"]
      }
      let totalWins = 0
      let currWeekMatchupID, currWeekOpponent
      let opponents = []
      let winsAgainstOwner = {}
      for (let owner in usernameObj){
        for (let i = 1; i < weeksPassed; i++){
          for (let j = 0; j < weeks[i].length; j++){
            if (weeks[i][j]["roster_id"] == rosterIDObj[owner]){
              currWeekMatchupID = weeks[i][j]["matchup_id"]
            }
          }
          for (let j =0; j < weeks[i].length; j++){
            if (weeks[i][j]["matchup_id"] == currWeekMatchupID && weeks[i][j]["roster_id"] != rosterIDObj[owner]){
              currWeekOpponent = weeks[i][j]["roster_id"]
              opponents.push(currWeekOpponent)
            }
          }
        }
        for (let i = 0; i < opponents.length; i++){
          let opponentUserID = getKeyByValue(rosterIDObj, opponents[i])

          totalWins += winsByOwner[opponentUserID]
        }
        winsAgainstOwner[usernameObj[owner]] = totalWins
        totalWins = 0
        opponents = []
      }
      let winsAgainstOwnerSorted = Object.fromEntries(
        Object.entries(winsAgainstOwner).sort(([,a],[,b]) => b-a)
      )
      displayStats(winsAgainstOwnerSorted, document.querySelector("#opponentWinsRanksTable"),document.querySelector("#sleepertbodywins") )
    })
    const createOwn = document.querySelector("#createOwn")
    createOwn.addEventListener("click", function(){
      makeRegColor()
      createOwnCount++
      createOwn.setAttribute("style", "color: white")
      positionRankings.setAttribute("style", "color:#717387")
      randomStats.setAttribute("style", "color:#717387")
      positionRankingsContent.setAttribute("style", "display:none")
      randomStatsContent.setAttribute("style", "display:none")
      
      document.querySelector("#tradeContent").setAttribute("style", "display: none")
      const chooseTradeContent = document.querySelector("#chooseTradeContent")
      const addTeam1 = document.getElementById("addTeam1")
      const minusTeam1 = document.getElementById("minusTeam1")
      chooseTradeContent.setAttribute("style", "display:grid;")
      if (createOwnCount == 1){
        addTeam1.addEventListener("click", function(){
          const team1con = document.querySelector("#team1con")
          let input = document.createElement("input")
          input.type = "text"
          let len = team1con.children.length
          if (len == 2){
            input.setAttribute("style", "border: none;border-right: solid black; border-bottom: solid black; border-radius: 10px 0 0 0")

          }
          else {
            input.setAttribute("style", "border: none;border-right: solid black; border-bottom: solid black;")

          }
          input.id = "team1player"+(len-1)
          input.classList.add("playerInput")
          input.placeholder = "Team 1"
          team1con.insertBefore(input, team1con.children[team1con.children.length -2])
        })
        minusTeam1.addEventListener("click", function(){
          const team1con = document.querySelector("#team1con")
          team1con.removeChild(team1con.children[team1con.children.length -3])
        })
        const addTeam2 = document.getElementById("addTeam2")
        const minusTeam2 = document.getElementById("minusTeam2")
        addTeam2.addEventListener("click", function(){
          const team2con = document.querySelector("#team2con")

          let input = document.createElement("input")
          input.type = "text"
          let len = team2con.children.length
          if (len == 2){
            input.setAttribute("style", "border: none;border-left: solid black; border-bottom: solid black; border-radius: 0 10px 0 0")

          }
          else {
            input.setAttribute("style", "border: none;border-left: solid black; border-bottom: solid black;")

          }
          input.id = "team2player"+(len-1)
          input.classList.add("playerInput")
          input.placeholder = "Team 2"
          team2con.insertBefore(input, team2con.children[team2con.children.length -2])
        })
        minusTeam2.addEventListener("click", function(){
          const team2con = document.querySelector("#team2con")
          team2con.removeChild(team2con.children[team2con.children.length -3])
        })
      }
    })
    const submitTrade = document.querySelector("#submitTrade")
    submitTrade.addEventListener("click", function(){
      const chooseTradeContent = document.querySelector("#chooseTradeContent")
      chooseTradeContent.setAttribute("style", "display:grid; background:transparent;")
      const team1con = document.querySelector("#team1con")
      document.querySelector("#tradeCreatorHeader").setAttribute("style", "display:none;")

      team1players = []
      for (let i = 1; i < (team1con.children.length - 1); i++){
        let select = document.querySelector("#team1player" + i)
        team1players.push(select.value)
      }
      const team2con = document.querySelector("#team2con")
      team2players = []
      for (let i = 1; i < (team2con.children.length - 1); i++){
        let select = document.querySelector("#team2player" + i)
        team2players.push(select.value)
      }
      let team1Val = 0
      let team1owner
      let team1playerPositions = []
      for (let playerName of team1players){
        playerName = playerName.toLowerCase()
        playerName = playerName.replace(/\s+/g, '');

        for (let owner in rosterByOwner){
          let roster = rosterByOwner[owner]
          for (let i = 0; i < roster.length; i++){
            if (roster[i]["player_name"] == playerName){
              team1Val += roster[i]["playerVal"]
              team1owner = owner
              team1playerPositions.push(roster[i]["position"])
            }
          }

        }
      }
      let team2Val = 0
      let team2owner
      let team2playerPositions = []
      for (let playerName of team2players){
        playerName = playerName.toLowerCase()
        playerName = playerName.replace(/\s+/g, '');

        for (let owner in rosterByOwner){
          let roster = rosterByOwner[owner]
          for (let i = 0; i < roster.length; i++){
            if (roster[i]["player_name"] == playerName){
              team2Val += roster[i]["playerVal"]
              team2owner = owner
              team2playerPositions.push(roster[i]["position"])
            }
          }

        }
      }
      const tradeInsights = document.querySelector("#tradeInsights")
      team1con.setAttribute("style", "display:none;")
      team2con.setAttribute("style", "display:none;")
      submitTrade.setAttribute("style", "display: none;")

      tradeInsights.setAttribute("style", "display: block;")
      let strongerfor = document.createElement("p")
      strongerfor.classList.add("tradeInsightP")
      if (team1Val < team2Val){
        strongerfor.textContent = "Trade is better for team 1"
      }
      else {
        strongerfor.textContent = "Trade is better for team 2"
      }
      tradeInsights.appendChild(strongerfor)

      let team1ownername = document.createElement("p")
      team1ownername.classList.add("tradeInsightP")
      team1ownername.textContent = "Guess: Team 1 is '" + usernameObj[team1owner] + "'"

      tradeInsights.appendChild(team1ownername)
      
      let team2ownername = document.createElement("p")
      team2ownername.classList.add("tradeInsightP")
      team2ownername.textContent = "Guess: Team 2 is '" + usernameObj[team2owner] + "'"

      tradeInsights.appendChild(team2ownername)
      team1fulfilled = false;
      let currentOwnerNeedGive = positionalNeed[usernameObj[team1owner]]

      for (let i = 0; i <team1playerPositions.length; i++){
        for (let j = 0; j < currentOwnerNeedGive["need"].length; j++){
          if (team1playerPositions[i] == currentOwnerNeedGive[j]){
            team1fulfilled = true
            break
          }
        }
      }
      team2fulfilled = false;
      currentOwnerNeedGive = positionalNeed[usernameObj[team2owner]]

      for (let i = 0; i <team2playerPositions.length; i++){
        for (let j = 0; j < currentOwnerNeedGive["need"].length; j++){
          if (team2playerPositions[i] == currentOwnerNeedGive[j]){
            team2fulfilled = true
            break
          }
        }
      }
      let fulfilled = document.createElement("p")
      fulfilled.classList.add("tradeInsightP")
      if (team1fulfilled == true && team2fulfilled == true){
        fulfilled.textContent = "Trade fulfilled positional needs for only team 2"

      }
      else if (team1fulfilled == true && team2fulfilled == false){
        fulfilled.textContent = "Trade fulfilled positional needs for team 1"

      }
      else if (team1fulfilled == false && team2fulfilled == true){
        fulfilled.textContent = "Trade fulfilled positional needs for only team 2"

      }
      else {
        fulfilled.textContent = "Trade fulfilled positional needs for no one"

      }

      tradeInsights.appendChild(fulfilled)
      
      let team1units = document.createElement("p")
      team1units.classList.add("tradeInsightP")
      team1units.textContent = "Team 1 is recieving " + team2Val.toFixed(2) +  " units in value (higher is better)"

      tradeInsights.appendChild(team1units)

      let team2units = document.createElement("p")
      team2units.classList.add("tradeInsightP")
      team2units.textContent = "Team 2 is recieving " + team1Val.toFixed(2) +  " units in value (higher is better)"

      tradeInsights.appendChild(team2units)
      let backbutton = document.createElement("button")
      backbutton.textContent = "Go back"
      backbutton.id = "createOwnBack"
      
      tradeInsights.appendChild(backbutton)
      const createOwnBack = document.querySelector("#createOwnBack")
      createOwnBack.addEventListener("click", function(){
        team1con.setAttribute("style", "display:grid;")
        team2con.setAttribute("style", "display:grid;")
        submitTrade.setAttribute("style", "display: grid;")
        tradeInsights.setAttribute("style", "display: none;")
        while (tradeInsights.children.length > 1){
          tradeInsights.removeChild(tradeInsights.children[tradeInsights.children.length -1])

        }
        chooseTradeContent.setAttribute("style", "display:grid;")
        document.querySelector("#tradeCreatorHeader").setAttribute("style", "display:grid;")

      })


    })
    



  //loadGif.setAttribute("style", "display: none")

  //document.write(finalRankings)
})


