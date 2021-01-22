import express from 'express';

const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server listening on port ${port}!`));