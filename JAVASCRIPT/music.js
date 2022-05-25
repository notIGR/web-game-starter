const btnShow = document.querySelector("button");
const result = document.querySelector("p");

btnShow.addEventListener("click", () =>{
	const selected = document.querySelector("input[type=\"radio\"]:checked");
	result.innerText = selected.value;
});