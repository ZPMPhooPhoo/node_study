const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
  console.log("get ok!");
  res.send('Hello World!');
  });
  


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
