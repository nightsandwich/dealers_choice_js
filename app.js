const express = require("express");
const morgan = require("morgan");
const foosBank = require("./foosBank");
const foosList = require("./views/foosList");
const foosDetails = require("./views/foosDetails");

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const players = foosBank.list();
  res.send(foosList(players));

});

app.get("/players/:id", (req, res, next) => {
  //console.log(req);
  const players = foosBank.list();
  if (!players.find(player => player.id === +req.params.id)) {
    const playerError = new Error("Player does not exist");
    next(playerError);
  } else {
    const player = foosBank.find(req.params.id);
    res.send(foosDetails(player));
  }
});
  
// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err);
  });
  
  const PORT = 1337;
  
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });