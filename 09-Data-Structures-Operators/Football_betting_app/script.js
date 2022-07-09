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

printGoals(...game.scored);

//The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

game.odds.team1 < game.odds.team2 &&
  console.log("Team 2 is more likely to win");
game.odds.team1 > game.odds.team2 &&
  console.log("Team 1 is more likely to win");
