import express from 'express';
import bodyParser from 'body-parser';

const PORT = 8080;

const app = express();

app.set('port', PORT);
app.use(bodyParser.json());

// API Route
app.get('/', (req, res, next) => {
  res.json({ body: 'Hello multi-tenant application.' });
});

app.listen(PORT, () => {
  console.log(`Express server started at port: ${PORT}`);
});