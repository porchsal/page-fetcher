'use strict';
const request = require('request');
const fs = require('fs');
const net = require('net');
/** 
 * SETUP
 * Our usual client setup code
 */
const host = process.argv[2];
const file = process.argv[3];

  request(host,(err, response, body) => {
    fs.writeFile(file, body, (err) => {
        if (err) throw err;
        return;
      });
    console.log(`Downloaded and saved ${body.length} bytes to ${file}`);

  })    
  

