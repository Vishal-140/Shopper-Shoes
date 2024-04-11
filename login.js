let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    window.location.assign("home.html");

    
    // if(email == "vkc@gmail.com" && password == "vkc123") {
    //     window.location.assign("index.html");
    //     // alert("Login Successfully");
    // }
    // else{
    //     alert("Invalid information");
    //     return;
    // }
}
