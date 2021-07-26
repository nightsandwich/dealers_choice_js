module.exports = (player) => `<!DOCTYPE html>
<html>
<head>
  <title>Foosball Stars</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="players-list">
    <header><img src="/itsf.jpeg"/></header>
      <div class='player-item'>
      <p>
        <span class="player-ranking">#${player.ranking}</span>
        <br>
        <img src=${player.photo}>
        <h4>${player.firstName} ${player.lastName} <span><small>(${player.country})</small></span></h4>
      </p>
      <div class="ranking-info">
        Open Singles Ranking: ${player.ranking}
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