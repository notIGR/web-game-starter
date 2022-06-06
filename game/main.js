for (let i = 0; i < 5; i++) {
	const btnShow = document.querySelector(`#b${i + 1}`);
	const result = document.querySelector(`#c${i + 1}`);
	btnShow.addEventListener("click", (e) => {
		e.preventDefault();
		const group = document.querySelector(`#group${i + 1}`);
		let selected;
		if (group.children[0].checked) {
			selected = group.children[0];
		} else {
			selected = group.children[4];
		}

		result.innerText = selected.value;
	});
}
//next step will be to have a diffrent alert depending on witch artist is chosen. and add a stop wacth to help people track how long they listen to each track.
/*
const wubz = () => {
	alert(
		"Welcome to Wook Bass: here you find lots of whomp whomps, wubz for your dubz, and many other obscure sounds instead of lyrics. Wook bass is one of many sub generes of Dubstep"
	);
	const jesse = document.getElementById("subtronics");
	const budz= document.getElementById("ganjaWhite");
	if(jesse.checked) {
		alert("My personal favorite, Subtronics likes to mix and match sound that you would not think to put together in one song.");
	}
	if(budz.checked) {
		alert("Mr. Wobbles greets you with open arms. Ganja white night has a huge following of fans called buds because all who listen to Ganja White Night are friends");
	}
};
const brostep = () => {
	alert(
		"Hey bro, you listen to dubstep? Here you will hear some brostep. Usually has some vocals followed by an aggresive in your face beat drop, accompanyued by a carfully selected group of noises modified via computer. Listen for the Boom...Clap on repeat in the background. Typically runs at 140 bpm, but flow of the songs feels like 70 bpm"
	);
	const king = document.getElementById("sullyKing");
	const bear= document.getElementById("bearGrillz");
	if(king.checked) {
		alert("Heavy Metal meets dubstep, Sullivan king is born");
	}
	if(bear.checked) {
		alert("Do you feel it Mr. Crabs?");
	}
};
const riddim = () => {
	alert(
		"DJ, DOWN WITH THE CHUNE. Yet another sub genre of dubstep, similar to brostep with the repeating boom...clap running on repeat in the background. Minimal to no lyrics and simple sound design make it easy to bounce too."
	);
	const hol = document.getElementById("hol!");
	const death= document.getElementById("muerte");
	if(hol.checked) {
		alert("Fun fact: Hol! is a producer based in France.");
	}
	if(death.checked) {
		alert("Muerte is spanish for death if you did not already know.");
	}
};
const techno = () => {
	alert(
		"Thump,thump,thump,thump,thump.... is that my heart beat? Nope, its just TECHNO! Thump Tick,Thump Tick,Thump Tick,Thump Tick. Very repettitiv genre of EDM with songs on average being 6-7 minutes long. Techno focus on slowly adding one element of the song at a time. They are in no rush to get too the drop, techno is a marathon not a sprint."
	);
	const tonalTheory = document.getElementById("tonal");
	const deWitte= document.getElementById("charlotte");
	if(tonalTheory.checked) {
		alert("Up and coming techno artist based in the DMV(D.C, Maryland, Virginia), not the Department of Motor Vheichles!");
	}
	if(deWitte.checked) {
		alert("Belgian DJ and producer, specialized in dark acid techno. Has been active in the EDM scene since 2010");
	}
};
const celeb = () => {
	alert(
		"There are some celeberties that like to DJ as a hobby. I have selected Bass house tracks. Like all house music, listen out for the boots n cats. Bass House specificlly usually has a higher bpm and has the bass turned all the way up."
	);
	const shaq = document.getElementById("disel");
	const idris= document.getElementById("idris");
	if(shaq.checked) {
		alert("NBA start turned DJ. He actully prefers to produce dubstep, but when you have time and money you can do whatever you want");
	}
	if(idris.checked) {
		alert("Idris Iba is a renissanse man. Mixed martial arts, actor, Comedian, Disc Jocky, AND producer.");
	}
};
*/

window.onload = function(){
	// eslint-disable-next-line no-octal
	let seconds = 0;
	// eslint-disable-next-line no-octal
	let tens = 0;
	const OutputSeconds = document.getElementById("second");
	const OutputTens = document.getElementById("tens");
	const buttonStart = document.getElementById("btn-start");
	const buttonStop = document.getElementById("btn-stop");
	const buttonReset = document.getElementById("btn-reset");
	let Interval;

	buttonStart.addEventListener("click", () => {
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
	});

	buttonStop.addEventListener("click", () => {
		clearInterval(Interval);
	});

	buttonReset.addEventListener("click", () => {
		clearInterval(Interval);
		tens = "00";
		seconds = "00";
		OutputSeconds.innerHTML = seconds;
		OutputTens.innerHTML = tens;
	});

	const startTimer = () =>{
		tens++;
		if(tens <= 9){
			OutputTens.innerHTML = "0" + tens;
		}

		if(tens > 9){
			OutputTens.innerHTML = tens;
		}

		if(tens > 99){
			seconds++;
			OutputSeconds.innerHTML = "0" + seconds;
			tens = 0;
			OutputTens.innerHTML = "0" + 0;
		}

		if(seconds > 9){
			OutputSeconds.innerHTML = seconds;
		}
	};
};
