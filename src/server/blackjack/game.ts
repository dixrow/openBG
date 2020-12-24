var max_players = 10

var last_id = 1;

// Spades, Hearts, Diamonds and Clubs
var deck = [ "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK"]

const shuf = (a : any[]) => {
	let i, j, x;
	for (i = a.length - 1; i > 0; --i) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

class Player {
	name: string
	id: number
	hand: string[]
	money : number
	bet : number
	constructor(name: string, money: number){
		this.id = id
		id++
		this.name = name
		this.money = money
		this.bet = 0
	}
}

class BlackjackGame {
	players : Player[]
	deck : string[]

	constructor(players : Player[]){
		this.players = players
	}
	startGame() : void {
		this.deck = shuf(deck)
		this.gameLoop()
	}
	gameLoop() : void{
		// bets
		for(let player in this.players){
		}
		// deals 2 cards to each player
		// dealer gets one face up, one face down
		// hit or stand
		// dealer reveals other card and plays accordingly
		// resolve bets

	}

}
