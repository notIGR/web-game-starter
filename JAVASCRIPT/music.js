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
const wubz = () => {
	alert(
		"Welcome to Wook Bass: here you find lots of whomp whomps, wubz for your dubz, and many other obscure sounds instead of lyrics. Wook bass is one of many sub generes of Dubstep"
	);
};
const brostep = () => {
	alert(
		"Hey bro, you listen to dubstep? Here you will hear some brostep. Usually has some vocals followed by an aggresive in your face beat drop, accompanyued by a carfully selected group of noises modified via computer. Listen for the Boom...Clap on repeat in the background. Typically runs at 140 bpm, but flow of the songs feels like 70 bpm"
	);
};
const riddim = () => {
	alert(
		"DJ, DOWN WITH THE CHUNE. Yet another sub genre of dubstep, similar to brostep with the repeating boom...clap running on repeat in the background. Minimal to no lyrics and simple sound design make it easy to bounce too."
	);
};
const techno = () => {
	alert(
		"Thump,thump,thump,thump,thump.... is that my heart beat? Nope, its just TECHNO! Thump Tick,Thump Tick,Thump Tick,Thump Tick. Very repettitiv genre of EDM with songs on average being 6-7 minutes long. Techno focus on slowly adding one element of the song at a time. They are in no rush to get too the drop, techno is a marathon not a sprint."
	);
};
const celeb = () => {
	alert(
		"There are some celeberties that like to DJ as a hobby. I have selected Bass house tracks. Like all house music, listen out for the boots n cats. Bass House specificlly usually has a higher bpm and has the bass turned all the way up."
	);
};

window.onload = function(){
	// eslint-disable-next-line no-octal
	var seconds = 00;
	// eslint-disable-next-line no-octal
	var tens = 00;
	var OutputSeconds = document.getElementById("second");
	var OutputTens = document.getElementById("tens");
	var buttonStart = document.getElementById("btn-start");
	var buttonStop = document.getElementById("btn-stop");
	var buttonReset = document.getElementById("btn-reset");
	var Interval;

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
