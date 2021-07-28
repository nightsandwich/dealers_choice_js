module.exports = (players) => `<!DOCTYPE html>
  <html>
  <head>
    <title>Foosball Stars</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="players-list">
    <header><img class="itsf" src="/itsf.jpeg"/><br>International Table Soccer Federation Foosball Stars</header>
      ${players.map(player => `
        <div class='player'>
          <div class='ranking'>
            <div>
              Ranking:
              <a href="/players/${player.id}"> ${player.id}</a>
              <br>
              <a href="/players/${player.id}"><img src=${player.photo}></a>
            </div>
            <div>  
              <h4 class='name'>${player.firstName} ${player.lastName}</h4>
            </div>
            <div>
              <h5 class="age-country">
                Age: ${2021 - player.birthYear}
                <br>  
                Country: ${player.country}  
              </h5>
              <br>
            </div>
          </div>
        </div>`
      ).join("")}
    </div>
  </body>
  </html>`;