const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// CHALLENGE #1
// Create team players arrays
const [players1, players2] = game.players;
// Create gk variable and fieldplayers variables
const [gk, ...fieldplayers] = players1;
// Create allPlayers variable(22 players)
const allPlayers = [...players1, ...players2];
// Add substitues to player1 team
players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x, team2 },
} = game;

// Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
let goals = 0;
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals(...game.scored);

//The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// game.odds.team1 < game.odds.team2 &&
//   console.log("Team 2 is more likely to win");
// game.odds.team1 > game.odds.team2 &&
//   console.log("Team 1 is more likely to win");

// CHALLENGE #2
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
let goal = 0;
for (const player of game.scored) {
  goal++;
  console.log(`Goal ${goal}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console
let totalOdds = 0;
let averageOdds = 0;
let odds = Object.values(game.odds);
// console.log(properties);

for (const odd of odds) {
  totalOdds += odd;
}
averageOdds = totalOdds / odds.length;
console.log(`Average odds are ${averageOdds}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names ????

for (let [team, odd] of Object.entries(game.odds)) {
  teamStr = team;
  teamStr === "x"
    ? (teamStr = "a draw is")
    : (teamStr = `victory ${game[team]}`);

  console.log(`Odd of ${teamStr} is ${odd}`);
}

// CHALLENGE #3

const gameEvents = new Map([
  [17, "?????? GOAL"],
  [36, "???? Substitution"],
  [47, "?????? GOAL"],
  [61, "???? Substitution"],
  [64, "???? Yellow card"],
  [69, "???? Red card"],
  [70, "???? Substitution"],
  [72, "???? Substitution"],
  [76, "?????? GOAL"],
  [80, "?????? GOAL"],
  [92, "???? Yellow card"],
]);

//. Create an array 'events' of the different game events that happened (no duplicates)
const events = new Set();
for (const [key, value1] of gameEvents) {
  events.add(value1);
}

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ?????? GOAL
for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`[FIRST HALF] ${key}, ${value}`)
    : console.log(`[SECOND HALF] ${key}, ${value}`);
}
