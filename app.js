
var beenDealt = false; // check to see if "Deal Cards" button has been clicked
var shuffleCards = false; // check to see if "Shuffle Cards" button has been clicked
var deal = 0; //random number variable used for cards
var randomNumLeft = 0; // "left" number
var randomNumCenter = 0; // "center" number
var randomNumRight = 0; // "right" number
var topCardLeft, topCardCenter, topCardRight; // for animating the top cards
var timerId; // for shuffle slideshow animation
var i=0; //temp value
var player1 = true; // check to see who's turn it is for scoring
var player1score = 0;
var player2score = 0;
var tempScore = 3;

var ImageHome = new Array(28);

for(i=0; i<28; i++){
	ImageHome[i]=new Image();
}

ImageHome[0].src="images/01_of_clubs_A.png"; //ace
ImageHome[1].src="images/02_of_diamonds.png";
ImageHome[2].src="images/03_of_spades.png";
ImageHome[3].src="images/04_of_diamonds.png";
ImageHome[4].src="images/05_of_spades.png";
ImageHome[5].src="images/06_of_diamonds.png";
ImageHome[6].src="images/07_of_spades.png";
ImageHome[7].src="images/08_of_hearts.png";
ImageHome[8].src="images/09_of_spades.png";
ImageHome[9].src="images/10_of_hearts.png";
ImageHome[10].src="images/11_Jack_of_clubs.png";
ImageHome[11].src="images/12_Queen_of_hearts.png";
ImageHome[12].src="images/13_King_of_spades.png";
ImageHome[13].src="images/02_of_spades.png";
ImageHome[14].src="images/03_of_hearts.png";
ImageHome[15].src="images/04_of_clubs.png";
ImageHome[16].src="images/05_of_hearts.png";
ImageHome[17].src="images/06_of_spades.png";
ImageHome[18].src="images/07_of_diamonds.png";
ImageHome[19].src="images/08_of_clubs.png";
ImageHome[20].src="images/09_of_diamonds.png";
ImageHome[21].src="images/10_of_spades.png";
ImageHome[22].src="images/11_Jack_of_hearts.png";
ImageHome[23].src="images/12_Queen_of_spades.png";
ImageHome[24].src="images/13_King_of_diamonds.png";
ImageHome[25].src="images/01_of_diamonds_A.png"; //ace
ImageHome[26].src="images/01_of_hearts_A.png"; //ace
ImageHome[27].src="images/01_of_spades_A.png"; //ace

function randomCard(){
	resetDisplay(); //set images to original
	beenDealt = true; // deal button has been clicked
	deal = Math.floor((Math.random() * 1000) % 33);
	var deck = 3; // number of cards on table

	if(deal <= 10){
		for (i=0; i < deck; i++) {
			if(i=== 0){randomNumLeft = Math.floor((Math.random()*11)+1);}
			if(i=== 1){randomNumCenter = Math.floor((Math.random()*12)+12);}
			if(i=== 2){randomNumRight = 0;}
		}
	} else if(deal > 10 && deal <= 20){
		for (i=0; i < deck; i++) {
			if(i=== 0){randomNumCenter = Math.floor((Math.random()*11)+1);}
			if(i=== 1){randomNumRight = Math.floor((Math.random()*12)+12);}
			if(i=== 2){randomNumLeft = 25;}
		}
	} else if(deal > 20 && deal < 30){
		for (i=0; i < deck; i++) {
			if(i=== 0){randomNumRight = Math.floor((Math.random()*11)+1);}
			if(i=== 1){randomNumLeft = Math.floor((Math.random()*12)+12);}
			if(i=== 2){randomNumCenter = 0;}
		}
	} else {
		for (i=0; i < deck; i++){
			if(i=== 0){randomNumLeft = Math.floor((Math.random()*11)+1);}
			if(i=== 1){randomNumCenter = Math.floor((Math.random()*12)+12);}
			if(i=== 2){	randomNumRight = 25;}
		}
	}
}

function pickCard(form){

	if(beenDealt === true && shuffleCards === false){
		if(deal <= 10){
			if(form === "displayRight"){
				document.images["displayRight"].src = ImageHome[randomNumRight].src;
				alert("You have found the Ace!");
				tallyScore();
				document.getElementById("chipsLeft").style.visibility="visible";
			}
			if(form === "displayLeft"){
				document.images["displayLeft"].src = ImageHome[randomNumLeft].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if (form === "displayCenter"){
				document.images["displayCenter"].src = ImageHome[randomNumCenter].src;
				tempScore -= 1;
				alert("Try another card.");
			}
		} else if (deal > 10 && deal <= 20) {
			if(form === "displayRight"){
				document.images["displayRight"].src = ImageHome[randomNumRight].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if(form === "displayLeft"){
				document.images["displayLeft"].src = ImageHome[randomNumLeft].src;
				alert("You have found the Ace!");
				tallyScore();
				document.getElementById("chipsCenter1").style.visibility="visible";
			}
			if (form === "displayCenter"){
				document.images["displayCenter"].src = ImageHome[randomNumCenter].src;
				tempScore -= 1;
				alert("Try another card.");
			}
		} else if (deal > 20 && deal < 30) {
			if(form === "displayRight"){
				document.images["displayRight"].src = ImageHome[randomNumRight].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if(form === "displayLeft"){
				document.images["displayLeft"].src = ImageHome[randomNumLeft].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if (form === "displayCenter"){
				document.images["displayCenter"].src = ImageHome[randomNumCenter].src;
				alert("You have found the Ace!");
				tallyScore();
				document.getElementById("chipsRight").style.visibility="visible";
			}
		} else {
			if(form === "displayRight"){
				document.images["displayRight"].src = ImageHome[randomNumRight].src;
				alert("You have found the Ace!");
				tallyScore();
				document.getElementById("chipsCenter2").style.visibility="visible";
			}
			if(form === "displayLeft"){
				document.images["displayLeft"].src = ImageHome[randomNumLeft].src;
				tempScore -= 1;
				alert("Try another card.");
			}
			if (form === "displayCenter"){
				document.images["displayCenter"].src = ImageHome[randomNumCenter].src;
				tempScore -= 1;
				alert("Try another card.");
			}
		}
	} else {
		if (shuffleCards === true){
			alert("You must stop shuffling the cards first");
		} else {
			alert("You must click the \"Deal Cards\" button first");
		}
	}
}

function resetDisplay(){
	document.images["displayLeft"].src = "images/cardBlue.jpg";
	document.images["displayCenter"].src = "images/cardRed.jpg";
	document.images["displayRight"].src = "images/cardBlue.jpg";
	stopSlideShow();
}

function animate(whichCard){
	whichCard %= topCardLeft.length;
	document.images["displayLeft"].src=topCardLeft[whichCard];
	document.images["displayCenter"].src=topCardCenter[whichCard];
	document.images["displayRight"].src=topCardRight[whichCard];
	timerId = window.setTimeout("animate(" + (whichCard + 1)+");",60);
}

function startSlideShow(){
	if(shuffleCards === false){
		shuffleCards = true;
		beenDealt = false;
		topCardLeft = new Array( "images/cardRed.jpg","images/cardBlue.jpg",
			"images/cardBlue.jpg","images/cardRed.jpg");
		topCardCenter = new Array( "images/cardBlue.jpg","images/cardRed.jpg",
			"images/cardBlue.jpg","images/cardRed.jpg");
		topCardRight = new Array( "images/cardRed.jpg","images/cardBlue.jpg",
			"images/cardRed.jpg","images/cardBlue.jpg");
		animate(0);
	} else {
		shuffleCards = false;
		stopSlideShow();
	}
 }

function stopSlideShow(){
	shuffleCards = false;
	clearTimeout(timerId);
}

function instructions(){
	alert("The game is to find the Ace of the three cards.\n" +
	"Click the \"Deal Cards\" button before selecting a card.\n" +
	"You can Shuffle the cards if you like BUT the \"Deal Cards\" must \n" +
	"be clicked before proceeding to a new game. \n" +
	"Have fun! (the chips have no real value.)");
}

function tallyScore () {
	if (player1 === true) {
		player1score += tempScore;
		player1 = false;
		document.getElementById("player1score").innerHTML = "$" + player1score;
		tempScore = 3;
	} else {
		player2score += tempScore;
		player1 = true;
		document.getElementById("player2score").innerHTML = "$" + player2score;
		tempScore = 3;
	}
}
