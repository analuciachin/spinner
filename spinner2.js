const characters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 0;

for (const item of characters) {
  //console.log(item);
  delay += 200;
  setTimeout(() => {
    process.stdout.write(item);
  }, delay);  
}