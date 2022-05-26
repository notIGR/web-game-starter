for (let i = 0; i < 5; i++) {
	const btnShow = document.querySelector(`#b${i + 1}`);
	const result = document.querySelector(`#c${i + 1}`);
	btnShow.addEventListener("click", (e) => {
		e.preventDefault();
		const group = document.querySelector(`#group${i + 1}`);
		let selected;
		if(group.children[0].checked){
			selected =group.children[0];
		}
		else{
			selected = group.children[4];
		}
		
		result.innerText = selected.value;
	});
}
