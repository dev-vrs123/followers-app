
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

// .... ここにAPI endpointを追加する処理を入れる。

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/deploy-demo/index.html');
}); // /followersなどもindex.htmlに転送して処理させる。

app.listen(process.env.PORT || 8080);
