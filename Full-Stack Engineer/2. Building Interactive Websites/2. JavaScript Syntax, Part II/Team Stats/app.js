const team = {
    _players: [
        {
            firstName: 'Lionel', 
            lastName: 'Messi', 
            age: 35
        },
        {
            firstName: 'Neymar', 
            lastName: 'Da Silva', 
            age: 30
        },
        {
            firstName: 'Luis', 
            lastName: 'Suarez', 
            age: 35
        }
    ],
    _games: [
        {
            opponent: 'Ronaldo',
            teamPoints: 73,
            opponentPoints: 42,
        },
        {
            opponent: 'Bale',
            teamPoints: 49,
            opponentPoints: 58,
        },
        {
            opponent: 'Haland',
            teamPoints: 80,
            opponentPoints: 65,
        }
    ],
    get players () {
        return this._players;
    },
    get games () {
        return this._games;
    },
    addPlayer (newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this.players.push(player);
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this.games.push(game)
    }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
