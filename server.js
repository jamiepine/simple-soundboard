const express = require('express');

const app = express();
const PORT = process.env.PORT = 4000;

const sounds = './public/sounds';
const fs = require('fs');

let append = `const sounds = {`
let count = 0
fs.readdirSync(sounds).forEach(file => {
  count++
  append = append.concat(`
  "${file}" : {
    url : "sounds/${file}"
  },
  `)
})

append = append.concat(`  };`)

// console.log(append)

fs.writeFile('public/sounds.js', append, (err) => {  
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log(`${count} sounds loaded.`);
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});