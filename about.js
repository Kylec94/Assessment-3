console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


let duck = document.getElementById('duck')

const rubberDucky = (event) => {
	alert("Stay beautiful")
}

duck.addEventListener("mouseover", rubberDucky)
