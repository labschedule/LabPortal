// Import required modules
import fs from "fs";
import path from "path";

// Define folder and output paths
const folderPath = './config/images/scanners/image'; // Folder to read files from
const outputFilePath = './src/data/pictures.js'; // Output JS file

// Read files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  // Filter to include only files, ignoring directories
  const fileList = files.filter(file => {
    const filePath = path.join(folderPath, file);
    return fs.statSync(filePath).isFile();
  });

  // Prepare content for export in JavaScript format
  const jsContent = `export const pictures = ${JSON.stringify(fileList, null, 2)};`;

  // Write the array of filenames to the output JS file
  fs.writeFile(outputFilePath, jsContent, 'utf8', (err) => {
    if (err) {
      console.error("Error writing JS file:", err);
    } else {
      console.log("File list successfully saved to fileList.js!");
    }
  });
});
