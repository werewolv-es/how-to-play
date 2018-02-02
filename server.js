const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const time = Date.now();
  res.json({"message": time});
});

app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});
