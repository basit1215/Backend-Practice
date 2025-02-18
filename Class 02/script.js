const fs = require('node:fs');

fs.writeFile("hey.txt", "hey hello kaise ho", function(err) {
     if (err) console.error(err);
     else  console.log("File saved!");
 })

 fs.appendFile("hey.txt", " Alhamdullilah!", function(err) {
  if (err) console.error(err);
   else  console.log("File updated!");
})

 fs.rename("hey.txt", "hello.txt", function(err) {
    if (err) console.error(err);
    else  console.log("File Name Changed!");
 })

fs.copyFile("hello.txt", "./copy/chacha.txt", function(err){
  if (err) console.error(err);
    else  console.log("File copied!");
 })

// Check the error message properly

 fs.copyFile("hello.txt", "./copy2/chacha.txt", function(err){
     if (err) console.error(err.message);
     else  console.log("File copied!");
 })

fs.unlink("hello.txt", function(err){
    if (err) console.error(err);
     else  console.log("File deleted!");
 })

fs.rmdir("./copy", {recursive: true}, function(err){
    if (err) console.error(err);
    else  console.log("Directory deleted!");
})

 fs.rm("./copy", {recursive: true}, function(err){
    if (err) console.error(err);
   else  console.log("Directory deleted!");
 })

const http = require("http");

const server = http.createServer(function (req, res){
    res.end("Hello world!");
})

server.listen(3000);
