// Import required modules
import fs from "fs";

// Define file paths
const inputFilePath = './config/settings.json';
const outputFilePath = './src/data/settings.js';

// Read and process JSON data
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  try {
    // Parse the JSON data
    const settingsData = JSON.parse(data);

    // Format the data for export in JavaScript
    const jsContent = `export const settings = ${JSON.stringify(settingsData, null, 2)};`;

    // Write the formatted content to the output JS file
    fs.writeFile(outputFilePath, jsContent, 'utf8', (err) => {
      if (err) {
        console.error("Error writing JS file:", err);
      } else {
        console.log("Schedule data successfully saved to schedule.js!");
      }
    });
  } catch (parseErr) {
    console.error("Error parsing JSON data:", parseErr);
  }
});
