var last_id = 1;

// Spades, Hearts, Diamonds and Clubs
var starting_deck = [ "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK"]

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

class Deck {
	deck: Array<string>
	used: Array<string>
	constructor(){
		this.deck = shuf(starting_deck)
		this.used = Array<string>()
	}
	shuffle(){
		this.deck = shuf(this.deck)
	}
	deal():string {
		return (this.deck.pop() as string)
	}
}

class Player {
	name: string
	id: number
	// hand : string[]
	hand : Array<string>;
	money : number
	bet : number
	constructor(name: string, money: number){
		this.id = last_id
		last_id++
		this.name = name
		this.money = money
		this.bet = 0
		this.hand = new Array<string>()
	}
	addBet(amount: number):void {
		this.bet += amount
	}
	addCard(card:string){
		this.hand.push(card)
	}
}

class BlackjackGame {
	players : Array<Player>
	dealerHand : Array<string>
	deck : Deck
	constructor(players : Player[]){
		this.deck = new Deck()
		this.players = players
		this.dealerHand = new Array<string>()
	}
	startGame() : void {
		this.deck.shuffle() 
		this.gameLoop()
	}
	gameLoop() : void{
		// bets
		this.players.forEach(function (player){
			//get info from clients
			player.addBet(14);
		});
		
		// deals 2 cards to each player
		this.players.forEach((player:Player) => {
			player.addCard(this.deck.deal())
		})
		// dealer gets one face up, one face down

		//this one down
		this.dealerHand.push(this.deck.deal())
		//this one up
		this.dealerHand.push(this.deck.deal())

		// hit or stand
		// dealer reveals other card and plays accordingly
		// resolve bets
	}
}
