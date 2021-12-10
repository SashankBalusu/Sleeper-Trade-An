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
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.textContent = key;
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = counter;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent = finalRankings[pos][key];

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
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.textContent = key;
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = counter;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent = obj[key];

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
    numUsers = league["total_rosters"]
    let usernameObj = {}
    for (let i = 0; i < numUsers; i++) {
      userID = users[i]["user_id"]
      userIDList.push(userID)
      let username = users[i]["display_name"]
      usernameObj[userID] = username


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
          ptsfromtds+= parseInt(stat[playerID]["rush_td"])*6
        }
        if (stat[playerID]["pass_td"]){
          tds+=parseInt(stat[playerID]["pass_td"])
          ptsfromtds+=parseInt(stat[playerID]["pass_td"])
        }
        let percentpointsfromtds = ptsfromtds/ptsppr
        let playerVal = (percentpointsfromtds*5) + (((ptsppr/13)/100)*50)//change 13 to amt of weeks elapsed found in nfl slate
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
              playerScores.push(player["player_rank"])
            }
          }
          lowestScores[playerPosKey] = getLowest(playerScores, numPos[playerPosKey])
  
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
    const trades = document.querySelector("#trades")
    const stats = document.querySelector("#stats")
    for (let key in usernameObj){
      let a = document.createElement("a")
      a.textContent = usernameObj[key]
      a.setAttribute("style", "color:black")
      a.classList.add("userTrades")
      trades.appendChild(a)
    }
    let margin = userIDList.length*25+265
    stats.setAttribute("style", "margin-top: " + margin + "px")
    console.log(finalRankings)
    mainSleeper.setAttribute("style", "display: grid")
    const elements = document.getElementsByClassName("userTrades");
    let counter = 0

    //add trades later on
    let myFunction = function() {
      counter++
      if (counter <3){
        alert("trades feature (hopefully) coming soon")

      }
      else {
        alert("oml stop clicking I said the trade feature is coming soon")
        
      }
    };

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }
    positionRankings.addEventListener("click", function(){
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
