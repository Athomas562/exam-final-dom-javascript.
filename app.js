const log = document.querySelector("#log-mood");
const modal = document.querySelector(".modal")
const end = document.querySelector(".test");

function CreateModal() {
	const modal = document.createElement("div");
    const form = document.createElement("form")
	const btnA = document.createElement("button");
	const h2 = document.createElement("h2");
	const h3 = document.createElement("h3");
	const label = document.createElement("label");
	const inputA = document.createElement("input");
	const h5A = document.createElement("h5");
	const h5B = document.createElement("h5");
	const h5C = document.createElement("h5");
	const h5D = document.createElement("h5");
	const h5E = document.createElement("h5");
	const h4 =  document.createElement("h4");
	const btnB = document.createElement("button");

	modal.classList.add("modal");
	btnA.classList.add("btn text");
	h2.classList.add("text-preset-2");
	h3.classList.add("text-preset-3");
	h5A.classList.add("text-preset-5");
	h5B.classList.add("text-preset-5");
	h5C.classList.add("text-preset-5");
	h5D.classList.add("text-preset-5");
	h5E.classList.add("text-preset-5");
	h4.classList.add("text-preset-4");
	btnB.classList.add("btn block blue-600 neutral-o-text");
    form.classList.add("log-form");

	h2.textContent = "Log your mood";
	h3.textContent = "How was your mood today ?";
	h5A.textContent = "Very Happy";
	h5B.textContent = "Happy";
	h5C.textContent = "Neutral";
	h5D.textContent = "Sad";
	h5E.textContent = "Very Sad";
    h4.textContent = "Log Mood";

    document.body.appendChild(modal);
    modal.appendChild(form);
    form.appendChild(btnA);
    form.appendChild(h2);
    form.appendChild(h3);
    form.appendChild(label);
    label.appendChild(inputA);
    label.appendChild(h5A);
    label.appendChild(inputA);
    label.appendChild(h5B);
    label.appendChild(inputA);
    label.appendChild(h5C);
    label.appendChild(inputA);
    label.appendChild(h5D);
    label.appendChild(inputA);
    label.appendChild(h5E);
    btnB.appendChild(h4);

}

log.addEventListener("click", () => {
	CreateModal.showModal()
});

end.addEventListener("click", () => {
     modal.remove()
})
