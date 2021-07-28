const data = [
    {id: 1, firstName: 'Thomas', lastName: 'Haas', country: 'Germany', birthYear: 1996, ocPoints: 1061, mdPoints: 192, osPoints: 550, odPoints: 511, photo: 'https://media.fast4foos.org/photos/players/27608470.jpg'},
    {id: 2, firstName: 'Raphael', lastName: 'Hampel', country: 'Germany',  birthYear: 1999, ocPoints: 932, mdPoints: 72, osPoints: 489, odPoints: 443, photo: 'https://media.fast4foos.org/photos/players/27608759.jpg'},
    {id: 3, firstName: 'Matthias', lastName: 'Schoepf', country: 'Austria',  birthYear: 1992, ocPoints: 654, mdPoints: 350, osPoints: 374, odPoints: 280, photo: 'https://media.fast4foos.org/photos/players/04000458.jpg'},
    {id: 4, firstName: 'Richard', lastName: 'Marsh', country: 'UK', birthYear: 1998, ocPoints: 674, mdPoints: 296, osPoints: 306, odPoints: 368, photo: 'https://media.fast4foos.org/photos/players/82600146.JPG'},
    {id: 5, firstName: 'Tony', lastName: 'Spredeman', country: 'USA', birthYear: 1984, ocPoints: 628, mdPoints: 280, osPoints: 288, odPoints: 340, photo: 'https://media.fast4foos.org/photos/players/84000895.jpg'},
    {id: 6, firstName: 'Martin', lastName: 'Dousa', country: 'Czech Republic',  birthYear: 1988, ocPoints: 481, mdPoints: 168, osPoints: 281, odPoints: 200, photo: 'https://media.fast4foos.org/photos/players/20300060.jpg'},
    {id: 8, firstName: 'Jakob', lastName: 'Heinreichsberger', country: 'Austria', birthYear: 1984, ocPoints: 480, mdPoints: 138, osPoints: 264, odPoints: 216, photo: 'https://media.fast4foos.org/photos/players/04000089.jpg'},
    {id: 10, firstName: 'Giuliano', lastName: 'Bentivoglio', country: 'Belgium',  birthYear: 1956, ocPoints: 637, mdPoints: 200, osPoints: 238, odPoints: 399, photo: 'https://media.fast4foos.org/photos/players/25005138.jpg'},
    {id: 11, firstName: 'Phillip', lastName: 'Kucera', country: 'Austria', birthYear: 1992, ocPoints: 662, mdPoints: 258, osPoints: 228, odPoints: 434, photo: 'https://media.fast4foos.org/photos/players/04000927.jpg'},
    {id: 15, firstName: 'Yannick', lastName: 'Correia', country: 'Luxembourg',  birthYear: 1988, ocPoints: 474, mdPoints: 150, osPoints: 204, odPoints: 270, photo: 'https://media.fast4foos.org/photos/players/25005314.jpg'}
]

const list = () => {
    return [...data];
};

const find = (id) => {
    const player = data.find(player => player.id === +id);
    return {...player};
}

module.exports = {list: list, find: find};