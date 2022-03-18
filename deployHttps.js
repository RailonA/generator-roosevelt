#!/usr/bin/bash

var os = require('os');
const { exec } = require('child_process');

// console.log(os.type()); // "Windows_NT"
// console.log(os.release()); // "10.0.14393"
// console.log(os.platform()); // "win32"

if(os.type()==="Linux"){
    // sudo apt-get update;
        exec("sudo apt-get update", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    // sudo apt-get install openssl;
    exec("sudo apt-get install openssl", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    // echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile;
    exec("echo export PATH='/usr/local/opt/openssl/bin:$PATH' >> ~/bash_profile", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    // source ~/.bash_profile;
    // touch ~/.bash_profile;

    exec("touch ~/.bash_profile", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    // yes "" | openssl req -nodes -new -x509 -keyout server.key -out server.cert;
    exec("yes '' | openssl req -nodes -new -x509 -keyout server.key -out server.cert", {maxBuffer: 1024 * 500}, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });      
          
    
}
else {
console.log(os.type())
}