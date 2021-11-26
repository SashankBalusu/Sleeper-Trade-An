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
    for (let i = 0; i < numUsers; i++) {
      userID = users[i]["user_id"]
      userIDList.push(userID)
    }
  
    for (let i = 0; i < userIDList.length; i++) {
      roster = rosters[i]["players"]
      roster.pop()
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
    let usernameList = []
    for (let i of playerPosCopy){
      if (i != "BN" && i != "FLEX" && i != "DEF"){
        for (let key in ownerPosRank){
          username = httpGet(`https://api.sleeper.app/v1/user/${key}`)
          username = JSON.parse(username)
          username = username["username"]
          usernameList.push(username)
          tempObj[username] = ownerPosRank[key][i]
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
    for (let i = 0; i < usernameList.length; i++){
      let a = document.createElement("a")
      a.textContent = usernameList[i]
      a.setAttribute("style", "color:white")
      a.classList.add("userTrades")
      trades.appendChild(a)
    }
    stats.setAttribute("style", "margin-top: " + (parseInt(usernameList.length)*45) + "px")
    console.log(finalRankings)
    mainSleeper.setAttribute("style", "display: grid")
  //loadGif.setAttribute("style", "display: none")

  //document.write(finalRankings)
})