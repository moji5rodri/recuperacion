const express = require("express");
const app     = express();
const path    = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/", express.static("exam"));

app.post("/find", (request, response) => {
    console.log(request.body.first_name);
    console.log(request.body.last_name);
    console.log(request.body.career);
    response.json({"method": "post", "success": true});

});

app.listen(8080, function () {
  console.log('Listening on port 8080!')
});
