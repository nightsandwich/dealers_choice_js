const data = [
    {id: 1, firstName: 'Tony', lastName: 'Spredeman', country: 'USA', ranking: 5, birthYear: 1984, ocPoints: 628, mdPoints: 280, osPoints: 288, odPoints: 340},
    {id: 2, firstName: 'Thomas', lastName: 'Haas', country: 'Germany', ranking: 1, birthYear: 1996, ocPoints: 1061, mdPoints: 192, osPoints: 550, odPoints: 511},
    {id: 3, firstName: 'Matthias', lastName: 'Schoepf', country: 'Austria', ranking: 3, birthYear: 1992, ocPoints: 654, mdPoints: 350, osPoints: 374, odPoints: 280},
    {id: 4, firstName: 'Martin', lastName: 'Dousa', country: 'Czech Republic', ranking: 6, birthYear: 1988, ocPoints: 481, mdPoints: 168, osPoints: 281, odPoints: 200},
    {id: 5, firstName: 'Giuliano', lastName: 'Bentivoglio', country: 'Belgium', ranking: 10, birthYear: 1956, ocPoints: 637, mdPoints: 200, osPoints: 238, odPoints: 399},
    {id: 6, firstName: 'Tommy', lastName: 'Yore', country: 'USA', ranking: 13, birthYear: 1998, ocPoints: 360, mdPoints: 160, osPoints: 216, odPoints: 144},
    {id: 7, firstName: 'Yannick', lastName: 'Correia', country: 'Luxembourg', ranking: 15, birthYear: 1988, ocPoints: 474, mdPoints: 150, osPoints: 204, odPoints: 270}
]

const list = () => {
    return [...data];
};

const find = (ranking) => {
    const player = data.find(player => player.ranking === +ranking);
    return {...player};
}

module.exports = {list: list, find: find};