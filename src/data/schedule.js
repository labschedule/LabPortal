// // Function to generate a random integer between min and max (inclusive)
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Function to generate a random day from Monday to Saturday (abbreviated to the first three letters)
// function getRandomDay() {
//   const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   return days[getRandomInt(0, 5)];
// }

// // Function to generate a random time period from 09:00 to 21:00
// function getRandomTime() {
//   const startHour = getRandomInt(9, 19); // Random hour between 9 and 19 (inclusive)
//   const endHour = startHour + getRandomInt(1, 3); // Random hour between startHour and startHour + 2 (inclusive)
//   return `${startHour.toString().padStart(2, "0")}:00 - ${endHour
//     .toString()
//     .padStart(2, "0")}:00`;
// }

// Generating the list of objects
export const weeklySchedule = [];

// for (let i = 1; i <= 25; i++) {
//   const item = {
//     id: i,
//     day: getRandomDay(),
//     time: getRandomTime(),
//     title: `Class ${i.toString().padStart(2, "0")}`,
//     professor: `Professor's Name ${i}`,
//   };
//   weeklySchedule.push(item);
// }
