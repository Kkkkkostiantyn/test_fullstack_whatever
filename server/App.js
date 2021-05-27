const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(8080, () => console.log(`App has been started on port 8080 ...`));
