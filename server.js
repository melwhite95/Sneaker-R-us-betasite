const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const home = require('./routes/index');

app.use(express.static(__dirname + '/public'));


home(app);



app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app;