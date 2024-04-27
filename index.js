/* 
1. Use the inquirer npm package to get user input.*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    // Generate QR code
    var qr_svg = qr.image(url); // Use 'url', not 'URL'
    qr_svg.pipe(fs.createWriteStream('qr2_img.png'));

    // Write the URL to a text file
    fs.writeFile('URL1.txt', url, (err) => { // use 'fs.writeFile'
      if (err) {
        console.error('An error occurred while saving the file:', err);
      } else {
        console.log('The file has been saved!');
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt could not be rendered in the current environment');
    } else {
      console.error('An error occurred:', error);
    }
  });





/*2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
