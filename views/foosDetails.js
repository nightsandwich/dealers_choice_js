module.exports = (player) => `<!DOCTYPE html>
<html>
<head>
  <title>${player.firstName} ${player.lastName}</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="players-list">
    <header><img class="itsf" src="/itsf.jpeg"/></header>
      <div class="details">
      <p>
        <span class="details ranking">Ranked #${player.id}</span>
        <br>
        <img src=${player.photo}>
        <h4>${player.firstName} ${player.lastName} <span><small>(${player.country})</small></span></h4>
      </p>
      <div>
        Open Singles Ranking: ${player.id}
        <br>
        <br>
        <div class="points"> 
          Open Singles Points: ${player.osPoints}
          <br>
          Open Combined Points: ${player.ocPoints}
          <br>
          Mixed Doubles Points: ${player.mdPoints}
          <br>
          Open Doubles Points: ${player.odPoints}
        </div>
      </div>
      
    </div>
  </div>
  <br>
  <br>
  <a href="/" class='back'>Back to Foosball Stars</a>
</body>
</html>`;