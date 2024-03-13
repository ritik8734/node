const fs = require('fs');

const fileName = process.argv[2];
var dataToWrite = process.argv[3];
fs.writeFileSync(fileName,dataToWrite);