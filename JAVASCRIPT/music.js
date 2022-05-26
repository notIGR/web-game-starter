const btnShow= document.querySelector("button");
const result = document.getElementById("c1");


btnShow.addEventListener("click", (e) => {
	const selected = document.querySelector("input[type=\"radio\"]:checked");
	result.innerText = selected.value;
	e.preventDefault();
});
