const fs =  require('fs');
const path = require('path');
const filePath = path.join( __dirname,'log','system-info.txt');
const os = require('os');

const data = `Platform: ${os.platform()} \nTotal Memory: ${os.totalmem()} \nFree RAM: ${os.freemem()} \nCPU Details: ${os.arch()}`;

fs.writeFile('system-info.txt',data, (err)=>{
    if(err) throw err;
    console.log('The file has been saved!');
})

fs.readFile('system-info.txt',(err,data)=>{
    if(err) throw err;
    console.log('system-info.txt contains: '+data);
});

