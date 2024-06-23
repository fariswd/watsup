const express = require('express');
const app = express();

const waRoutes = require('./routes/waRoutes');
let {browser, page} = require('./module/browser');

app.use('/public', express.static(__dirname + '/public'));
app.use('/', waRoutes);
app.listen(3000, () => {
  console.log('Listen on port 3000');
});
