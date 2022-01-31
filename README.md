# Sleeper-Trade-An
This project is made for sleeper fantasy football leagues to view more information/statistics on your league as well as calculate possible trades
Use the league id "650072723749421056" if you want to test it out

Features
Positional Rank: 
- This feature allows you to see how you rank against your teammates in each position. For example, you can see what rank you are in the "rb" position

Points Scored: 
- This feature shows you how many points you scored by week since the fantasy season started
- The data is color coded with these keys: 
  Green: Points scored in last week is greater than points scored in first week (upward trend)
  Red: Points scored in lsat week is less than points scored in first week (downward trend)
  Grey: Points remained relatively the same from first to last week
 
 Transactions: 
 - This feature shows you how many (successful) transactions you made each week, including trades
 - Data is shown in a three axis graph, along with points scored so you can see potential coorelation between transactions and points scored
 - Color of graph is calculated by finding the inverse rgb value of the points scored graph color. 
 
 Points Missed: 
 - This feature shows you how well you set your lineup each week
 - The data is displayed in a doughnut graph to show you how many points you missed every week
 - The week which data is being displayed can be controlled by a vertical range slider located to the left of the graph
 
 Calculate Trades:
 - This feature allows you to view potential trades and see how benefical they would be
 - Can accurately guess which fantasy teams the players are on 
 - Uses algorithm (takes into account td dependence, points scored, etc) to determine the fairness of the trade and displays it to user
 - Checks if the trade fulfills positional needs for teams
 
 Player Lookup:
 - This feature allows you to search up any current (and some past) fantasy player (Qb, Wr, Rb, Te)
 - Provides color coded area graph that shows a players points scored and points projected for any given week. If points scored is greater than points projected, the area is green, otherwise the area is red
 - Shows information on the player such as height weight and calculated rating to show how over/underrated they are
 Random Stats: 
 - This feature allows you to view many random/misc stats in a table format
 - Shows you the heaviest/tallest team, team with most waiver transactions, and the strength of schedule for every team.

Future features:
Auto calculate trades:
- View potential trades for your team depending on positional needs and algorithm that calculates player value
League at a glance:
- Improved UI to show league overall stats on startup

 
