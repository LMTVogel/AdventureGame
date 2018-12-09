var gameContainer = document.getElementById('game-container');

var title = document.getElementById('title');
var description = document.getElementById('description');

var gameButtons = document.getElementById('game-buttons');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var inventoryItem = document.getElementById('inventoryItem');

var startMusic = new Audio("audio/mining.mp3");
var deathSound = new Audio("audio/mcdeath.mp3");
var winMusic = new Audio("audio/win.mp3");

var zwaard = false;
var fakkel = false;


alert("Voor de beste ervaring moet u de muziek aanzetten. Klik op de muziek knop.");

function startscreen() {
	console.log("Start Screen");
	title.innerHTML="Cave Game";
	button3.onclick=function() {music();};
	button3.innerHTML="Muziek";
	button2.onclick=function() {
		level1();
	}
	button2.innerHTML="Start het spel";
	button1.style.display="none";
	description.innerHTML="Je spawned in een mooie vierkante blokachtige wereld. Je ziet een heuvel. Je wilt er een huis op gaan bouwen. Je loopt er op af en je valt bovenop de heuvel in een grot. Je zal hieruit moeten komen. Je krijgt keuzes en je zal de juiste keuze moeten maken. Ook zal je een voorwerp tegenkomen. Dit voorwerp moet je meenemen anders mag je niet door naar het volgende level. Veel succes!";
	description.style.width="500px";
	description.style.margin="0 auto";
}

startscreen();

function music() {
	console.log("Music Turned ON");
	startMusic.loop = true;
	startMusic.play();
	startMusic.volume = 1.0;
}

function death() {
	console.log("Death");
	deathSound.play();
	deathSound.volume = 1.0;
	alert("Je hebt de verkeerde keuze gemaakt. Je bent dood. Je kunt opnieuw beginnen.");
	startscreen();
}

function itemAlert() {
	console.log("NO ITEM");
	alert("Je bent een item vergeten op te pakken! Je begint overnieuw!");
	startscreen();
}

function winNoDiamants() {
	console.log("Win without diamants");
	title.innerHTML="YOU WIN! YOU ROCK LIKE QUEEN!!!! But you're poor because you didn't took the diamants."
	description.innerHTML="Well done.";
	button2.style.display="none";
	button3.style.display="none";
	startMusic.pause();
	winMusic.play();
	winMusic.volume = 1.0;
}

function winDiamants() {
	console.log("Win with diamants");
	title.innerHTML="YOU WIN! YOU ROCK LIKE QUEEN!!!! And you have a lot of money. Like the members of Queen.";
	description.innerHTML="Well done.";
	button2.style.display="none";
	button3.style.display="none";
	startMusic.pause();
	winMusic.play();
	winMusic.volume = 1.0;
}

function level1() {
	console.log("Level 1");
	title.innerHTML="De heuvel";
	description.innerHTML="Je spawned in een prachtige vierkante blok achtige wereld. Je moet gaan overleven. Je ziet een heuvel. Ga je hierop je huis bouwen om te overleven of doe je dit niet.";
	button2.onclick=function() {
		death();
	}
	button2.innerHTML="Je gaat er geen huis op bouwen.";
	button3.onclick=function() {
		level2();
	}
	button3.innerHTML="Je gaat er wel een huis op bouwen.";
}

function level2() {
	console.log("Level 2");
	title.innerHTML="Je hebt het huis gebouwd.";
	description.innerHTML="Je bouwt een huis. Maar je ziet een gat. Ga je het gat in om te kijken wat er zit of maak je het gat dicht om je huis te bouwen?";
	button2.innerHTML="Gat dicht maken.";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Je gaat het gat in";
	button3.onclick=function() {
		level3();
	}
}

function level3() {
	console.log("Level 3");
	title.innerHTML="De grot";
	description.innerHTML="Je komt erachter dat het een cave is. Je loopt verder en je valt in een put die recht naar beneden gaat. Je valt in het water. Steek je een fakkel aan om jezelf droog te maken en jezelf te oriënteren of pak je geen fakkel?";
	button2.innerHTML="Je pakt geen fakkel.";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Je pakt een fakkel.";
	button3.onclick=function() {
		level4();
	}
}

function level4() {
	console.log("Level 4");
	title.innerHTML="De ontdekking";
	description.innerHTML="Je ziet dat de cave enorm is met prachtige onderwaterrivieren. Je gaat op onderzoek uit. Je ziet verderop licht branden. Je gaat erop af. Er blijkt een heks te wonen. Maak je haar dood of vraag je wat ze hier doet?";
	button2.innerHTML="Je gaat met de heks praten";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Je maakt de heks dood.";
	button3.onclick=function() {
		level5();
	}}

function level5() {
	console.log("Level 5");
	title.innerHTML="Het huis doorzoeken";
	description.innerHTML="Je hebt haar dood gemaakt en je doorzoekt het huis voor overleving spullen. Op de zolder van het huis vind je een flesje met water dat glinstert en het geeft licht. Je ziet ook een zwaard. Je moet zelf weten of je hem pakt. Drink je het of laat je het liggen.";
	button1.innerHTML="Pak het zwaard op.";
	button1.style.display="inline-block";
	button1.onclick=function(){
		console.log("Zwaard activated");
		alert("Je hebt het zwaard opgepakt.");
		zwaard = true;
	}
	button2.innerHTML="Je drinkt het drankje op.";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Je drinkt het drankje niet op.";
	button3.onclick=function() {
		level6();
	}
}

function level6() {
	console.log("Level 6");
	title.innerHTML="De grot verder onderzoeken";
	description.innerHTML="Je gaat verder op onderzoek in de grot. Je komt een groep skeletten tegen. Ren je weg of maak je ze dood? Het word ook steeds donkerder in de grot. Je zult fakkels nodig moeten hebben. ";
	button1.innerHTML="Pak fakkel";
	button1.onclick=function() {
		console.log("Fakkel activated");
		alert("Je hebt de fakkel opgepakt.");
		fakkel = true;
	}
	button2.innerHTML="Je rent weg";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Je gaat de skeletten doodmaken.";

	if (zwaard == true) {
		button3.onclick=function() {
			level7();
		}
	}else {
		button3.onclick=function() {
			itemAlert();
		}
	}
}

function level7() {
	console.log("Level 7");
	title.innerHTML="Groot labyrint";
	description.innerHTML="Je bent er inmiddels achter gekomen dat het een gestoord groot labyrint is. Je weet dat het heel moeilijk gaat worden om weer omhoog te komen.  Je moet dus opzoek naar materialen. Je ziet een oude mijn. Je loopt er op af. Het word erg donker nu je verder gaat.";
	button1.style.display="none";
	button2.innerHTML="Je loopt de donkere gang in.";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Je steekt een fakkel aan.";
	if (fakkel == true) {
		button3.onclick=function() {
			level8();
		}
	}else {
		button3.onclick=function() {
			itemAlert();
		}
	}
}

function level8() {
	console.log("Level 8");
	title.innerHTML="Je gaat de mijn in";
	description.innerHTML="Je ziet hout in de mijn liggen. Pak je het hout op?";
	button1.style.display="none";
	button2.innerHTML="Je pakt het hout niet op.";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Je pakt het hout op.";
	button3.onclick=function() {
		level9();
	}
}

function level9() {
	console.log("Level 9");
	title.innerHTML="Werkbank maken";
	description.innerHTML="Je hebt het hout opgepakt. Nu kun je een werkbank maken. Maak je een schep of maak je een pikhouweel.";
	button1.style.display="none";
	button2.innerHTML="Schep maken.";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Pikhouweel maken.";
	button3.onclick=function() {
		level10();
	}
}

function level10() {
	console.log("Level 10");
	title.innerHTML="IJzer of diamant?";
	description.innerHTML="Doordat je nu een pikhouweel hebt kun je naar ijzer en diamant zoeken om betere tools te maken want met een houten pikhouweel kom je niet naar het oppervlak van de aarde. Je komt bij een plek waar veel ijzer zit. Ga je dit minen of niet?";
	button1.style.display="none";
	button2.innerHTML="Niet minen";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Minen";
	button3.onclick=function() {
		level11();
	}
}

function level11() {
	console.log("Level 11");
	title.innerHTML="Pikhouweel van ijzer";
	description.innerHTML="Je kunt nu een pikhouweel maken die van ijzer is gemaakt. Je gaat opzoek naar diamant want dit kun je nu minen met je ijzeren pikhouweel. Maar plots kom je erachter dat je fakkels op zijn. Je hebt kool nodig om nieuwe fakkels te maken of je gaat verder in het donker.";
	button1.style.display="none";
	button2.innerHTML="Je gaat verder in het donker";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Je gaat kool hakken voor nieuwe fakkels";
	button3.onclick=function() {
		level12();
	}
}

function level12() {
	console.log("Level 12");
	title.innerHTML="Op naar het daglicht!";
	description.innerHTML="Je kunt weer verder om te zoeken naar diamanten. Je vindt er toevallig een paar en nu kun je omhoog gaan graven naar het daglicht. Je mined en mined zonder enige slaap. Je hoort een zombie boven je. Je weet dus dat er een holle ruimte zit. Maar je moet er toch doorheen minen. Ga je er doorheen of er onderdoor. ";
	button1.style.display="none";
	button2.innerHTML="Je gaat er onder door";
	button2.onclick=function() {
		death();
	}
	button3.innerHTML="Je gaat door de holle ruimte heen";
	button3.onclick=function() {
		level13();
	}
}

function level13() {
	console.log("Level 13");
	title.innerHTML="Je gaat door de holle ruimte!";
	description.innerHTML="Je maakt de zombie dood en je gaat verder. Je mined verder naar boven. Je komt diamanten tegen. Neem je deze mee?";
	button1.style.display="none";
	button2.innerHTML="Je neemt ze niet mee.";
	button2.onclick=function() {
		winNoDiamants();
	}
	button3.innerHTML="Je neemt de diamanten mee! Maar ze zijn wel erg zwaar.";
	button3.onclick=function() {
		winDiamants();
	}
}

