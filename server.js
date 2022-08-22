const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send({
    name: 'test',
  });
});

app.listen(process.env.PORT || 8081);
