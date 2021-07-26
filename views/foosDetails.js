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
        <span class="news-position">${player.ranking}</span> 
        <h4>${player.firstName} ${player.lastName}</h4>
      </p>
      <p class="news-info">${player.country}</p>
      <small class="ranking-info">
        Open Singles Ranking: ${player.ranking}
        <br> 
        Open Singles Points: ${player.osPoints}
        <br>
        Open Combined Points: ${player.ocPoints}
        <br>
        Mixed Doubles Points: ${player.mdPoints}
        <br>
        Open Doubles Points: ${player.odPoints}
      </small>
      
    </div>
  </div>
  <a href="/">Back to Foosball Stars</a>
</body>
</html>`;