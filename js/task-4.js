const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        return alert("All form fields must be filled in");
    }
    
    const userData = {
        email: login,
        password: password,
    };
    
    console.log(userData);
    
    form.reset();
})