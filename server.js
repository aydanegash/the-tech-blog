// Dependencies
const express = require('express');
const path = require('path');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
