function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
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
    row_2_data_1.setAttribute("style", "border:none;")
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = counter;
    row_2_data_2.setAttribute("style", "border:none;")
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent = finalRankings[pos][key];
    row_2_data_3.setAttribute("style", "border:none;")


    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2); 
  }
}
function displayStats(obj){
  const heightWeightRanksTable = document.querySelector("#heightWeightRanksTable")
  heightWeightRanksTable.setAttribute("style", "display: block")
  const tbody = document.querySelector("#sleepertbodystats")
  counter = 0
  for (let key in obj){
    counter ++
    let row_2 = document.createElement('tr');
    row_2.setAttribute("style", "border:none;")
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.textContent = key;
    row_2_data_1.setAttribute("style", "border:none;")
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = counter;
    row_2_data_2.setAttribute("style", "border:none;")
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent = obj[key];
    row_2_data_3.setAttribute("style", "border:none;")


    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2); 
  }
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
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
const randomStatsContent = document.querySelector("#randomStatsContent")
const heightweightswitch = document.querySelector("#heightweightswitch")


let myChart


sleeperLeague.addEventListener("click", function(){
  console.log("hi")
  let cont = animateItemOut(sleeperLeague)
  if (cont == true){
    setTimeout(() => {sleeperLeague.setAttribute("style", "display:none")}, 600);
    //animateItemIn(leagueIDInput, submitLeagueID)
    setTimeout(() => {leagueIDInput.setAttribute("style", "display:block"), 
    submitLeagueID.setAttribute("style", "display:block")}, 700);

    
  } 
  //sleeperLeague.classList.add("addmoveout")
})

  
userIDList = []
rosterByOwner = {}

submitLeagueID.addEventListener("click", function() {
    const sleeperIDForm = document.querySelector("#sleeperIDForm")
    sleeperIDForm.setAttribute("style", "display:none")
    //loadGif(loadTheGif)
  
    //sleep(5000)
    console.log("in")
    
    let userData = httpGet("https://api.sleeper.app/v1/league/650072723749421056/users")
    const users = JSON.parse(userData)
    let leagueData = httpGet("https://api.sleeper.app/v1/league/650072723749421056")
    const league = JSON.parse(leagueData)
    let statData = httpGet("https://api.sleeper.app/v1/stats/nfl/regular/2021")
    const stat = JSON.parse(statData)
    let playerData = httpGet("https://FlatPleasingCamel.sashankbalusu.repl.co")
    playerData = playerData.substring(78)
    playerData = playerData.substring(0, playerData.length -26)
    let player = JSON.parse(playerData)
    let leagueID = leagueIDInput.value
    let rosterData = httpGet(`https://api.sleeper.app/v1/league/${leagueID}/rosters`)
    
    const rosters = JSON.parse(rosterData)
    let nflStateData = httpGet("https://api.sleeper.app/v1/state/nfl")
    const nflState = JSON.parse(nflStateData)
    let weeksPassed = nflState["leg"]
    console.log(weeksPassed)

    let weeks = []
    let matchupData
    let matchup
    for (let i = 1; i < weeksPassed; i++){
      matchupData = httpGet(`https://api.sleeper.app/v1/league/650072723749421056/matchups/${(i)}`)
      matchup = JSON.parse(matchupData)
      weeks[i] = matchup
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
    console.log(rosterByOwner)
    
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
        Object.entries(tempObj).sort(([,a],[,b]) => a-b)
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
        ranks[key] = reverseWithMiddle(5.5, index)


        // var index = temp.findIndex(p => p.attr1 == usernameObj[owner]);
  
      }
      numericRank[usernameObj[owner]] = ranks
      ranks = {}
      console.log(numericRank)
    }
    const trades = document.querySelector("#trades")
    const stats = document.querySelector("#stats")
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
    console.log(finalRankings)
    mainSleeper.setAttribute("style", "display: grid")
    const elements = document.getElementsByClassName("userTrades");
    let counter = 0

    //add trades later on
    let myFunction = function(elements, loc) {
      console.log(elements[loc].id)
      positionRankingsContent.setAttribute("style", "display:none")
      randomStatsContent.setAttribute("style", "display:none")
      document.querySelector("#tradeContent").setAttribute("style", "display: block")
      makeRegColor()
      elements[loc].setAttribute("style", "color: white")
      positionRankings.setAttribute("style", "color:#717387")
      randomStats.setAttribute("style", "color:#717387")
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
      for (let i = 0; i < weeksPassed; i++){
        labelArr.push("Week " + (i + 1))
      }
      let dataArr = []
      let name = elements[loc].id
      console.log(name)
      let uID = getKeyByValue(usernameObj, name)
      let rosterID = rosterIDObj[uID]
      console.log(rosterID)
      console.log(uID)
      console.log(usernameObj)
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
        console.log("last matchup" + firstmatchup)
        console.log("i" + i + " " + firstmatchup[0])

        if (firstmatchup[i]["roster_id"] == rosterID){
          firstWeekPts = firstmatchup[i]["points"]
        }
        if (lastmatchup[i]["roster_id"] == rosterID){
          lastWeekPts = lastmatchup[i]["points"]
        }

      }
      console.log(firstWeekPts)
      console.log(lastWeekPts)
      if (firstWeekPts > lastWeekPts){
        if ((firstWeekPts -10) > lastWeekPts) {
          gradientStroke.addColorStop(0, 'rgba(255, 51, 51, 1)');

          gradientStroke.addColorStop(1, 'rgba(255, 51, 51, 0.25)');
        }
        else {
          gradientStroke.addColorStop(0, 'rgba(160, 160, 160, 1)');

          gradientStroke.addColorStop(1, 'rgba(160, 160, 160, 0.25)');
        }
        
      }
      else {
        gradientStroke.addColorStop(0, 'rgba(102, 204, 0, 1)');

        gradientStroke.addColorStop(1, 'rgba(102, 204, 0, 0.25)');
      }
      
      if (myChart){
        myChart.destroy()
      }
      myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: labelArr,
              datasets: [{
                  label: "Data",
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
                  data: dataArr
              }]
          },
          options: {          
              legend: {
                  position: "bottom",
                  fontColor: "white"
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          fontColor: "rgba(255,255,255, 1)",
                          fontStyle: "bold",
                          beginAtZero: true,
                          maxTicksLimit: 5,
                          padding: 20
                      },
                      gridLines: {
                          drawTicks: false,
                          display: false
                      }

                  }],
                  xAxes: [{
                      gridLines: {
                          zeroLineColor: "transparent"
                      },
                      ticks: {
                          padding: 20,
                          fontColor: "rgba(0,0,0, 1)",
                          fontStyle: "bold"
                      }
                  }]
              },
              plugins: {
                title: {
                    display: true,
                    text: `${name}'s scores`
                }
              }
              
          }
      });
    dataArr = []
    labelArr = []  
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
      document.querySelector("#tradeContent").setAttribute("style", "display:none;")
      randomStatsContent.setAttribute("style", "display:none")
      positionRankingsContent.setAttribute("style", "display:block")
      //console.log(finalRankings)
    })
    qbRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("QB", positionRankingsTable, finalRankings)
      qbRanks.setAttribute("style", "background:#3e8e41")
      wrRanks.setAttribute("style", "background:black")
      rbRanks.setAttribute("style", "background:black")
      teRanks.setAttribute("style", "background:black")
      kRanks.setAttribute("style", "background:black")

    })
    wrRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("WR", positionRankingsTable, finalRankings)
      wrRanks.setAttribute("style", "background:#3e8e41")
      qbRanks.setAttribute("style", "background:black")
      rbRanks.setAttribute("style", "background:black")
      teRanks.setAttribute("style", "background:black")
      kRanks.setAttribute("style", "background:black")

    })
    rbRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("RB", positionRankingsTable, finalRankings)
      rbRanks.setAttribute("style", "background:#3e8e41")
      wrRanks.setAttribute("style", "background:black")
      qbRanks.setAttribute("style", "background:black")
      teRanks.setAttribute("style", "background:black")
      kRanks.setAttribute("style", "background:black")

    })
    teRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("TE", positionRankingsTable, finalRankings)
      teRanks.setAttribute("style", "background:#3e8e41")
      wrRanks.setAttribute("style", "background:black")
      rbRanks.setAttribute("style", "background:black")
      qbRanks.setAttribute("style", "background:black")
      kRanks.setAttribute("style", "background:black")

    })
    kRanks.addEventListener("click", function(){
      removeAllChildNodes(document.querySelector("#sleepertbody"))
      displayRanks("K", positionRankingsTable, finalRankings)
      kRanks.setAttribute("style", "background:#3e8e41")
      wrRanks.setAttribute("style", "background:black")
      rbRanks.setAttribute("style", "background:black")
      teRanks.setAttribute("style", "background:black")
      qbRanks.setAttribute("style", "background:black")

    })
    randomStats.addEventListener("click", function(){
      makeRegColor()
      document.querySelector("#tradeContent").setAttribute("style", "display:none;")
      positionRankings.setAttribute("style", "color: #717387")
      randomStats.setAttribute("style", "color: white")
      removeAllChildNodes(document.querySelector("#sleepertbodystats"))
      positionRankingsContent.setAttribute("style", "display:none")
      weightObj = {}
      heightObj = {}
      console.log(rosterByOwner)

      for (key in rosterByOwner){
        let totalweight = 0
        let totalHeight = 0
        let roster = rosterByOwner[key]
        for (let ownerRoster in roster){
          //now u have each player
          let playerWeight = parseInt(roster[ownerRoster]['weight'])
          let playerHeight = roster[ownerRoster]['height']
          if (playerHeight){
            let playerHeightInches = heightToInches(playerHeight)

            totalHeight += playerHeightInches
          }

          if (playerWeight){
            totalweight += playerWeight
          }
          
        }
        let username = usernameObj[key]
        heightObj[username] = totalHeight
        weightObj[username] = totalweight
      }
      let weightObjSorted = Object.fromEntries(
        Object.entries(weightObj).sort(([,a],[,b]) => a-b)
      )
      let heightObjSorted = Object.fromEntries(
        Object.entries(heightObj).sort(([,a],[,b]) => a-b)
      )
      displayStats(weightObjSorted)
      randomStatsContent.setAttribute("style", "display:block;")
      heightweightswitch.addEventListener("click", function(){
        if (heightweightswitch.checked){
          removeAllChildNodes(document.querySelector("#sleepertbodystats"))
          
          displayStats(heightObjSorted)
          //console.log(heightObjSorted)
        }
        else {
          removeAllChildNodes(document.querySelector("#sleepertbodystats"))

          displayStats(weightObjSorted)

          //console.log(weightObjSorted)
        }
      })
    })
    



  //loadGif.setAttribute("style", "display: none")

  //document.write(finalRankings)
})


