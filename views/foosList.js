module.exports = (players) => `<!DOCTYPE html>
  <html>
  <head>
    <title>Foosball Stars</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="players-list">
    <header><img src="/itsf.jpeg"/><br>Foosball Stars</header>
      ${players.map(player => `
        <div class='player-item'>
          <p>
            <a href="/players/${player.ranking}">${player.ranking}</a>
          </p>
            <h4>${player.firstName} ${player.lastName}</h4>
          <h5 class="player-country">
            Age: ${2021 - player.birthYear}
            <br>  
            Country: ${player.country}  
          </h5>
        </div>`
      ).join("")}
    </div>
  </body>
  </html>`;