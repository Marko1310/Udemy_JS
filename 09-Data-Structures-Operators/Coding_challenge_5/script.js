const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// TARGET LOG
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// Split to each row
let splitRows = flights.split("+");

let lengthMax = 0;

// Extract elements of each row
for (row of splitRows) {
  let [type, from, to, time] = row.split(";");

  type = type.replaceAll("_", " ");
  type.includes("Delayed") ? (type = "🔴" + type) : (type = type);

  from = from.slice(0, 3).toUpperCase();
  to = to.slice(0, 3).toUpperCase();
  time = time.padStart().replace(":", "h");

  let output = `${type} from ${from} to ${to} (${time})`;

  // Calculate the max length of string
  if (output.length > lengthMax) {
    lengthMax = output.length;
  }

  console.log(output.padStart(lengthMax, " "));
}
