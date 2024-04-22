// let signup = document.querySelector(".signup");
// let login = document.querySelector(".login");
// let slider = document.querySelector(".slider");
// let formSection = document.querySelector(".form-section");

// signup.addEventListener("click", () => {
//     slider.classList.add("moveslider");
//     formSection.classList.add("form-section-move");
// });
// login.addEventListener("click", () => {
//     slider.classList.remove("moveslider");
//     formSection.classList.remove("form-section-move");
// });

// function auth() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     window.location.assign("home.html");

    
    // if(email == "vkc@gmail.com" && password == "vkc123") {
    //     window.location.assign("index.html");
    //     // alert("Login Successfully");
    // }
    // else{
    //     alert("Invalid information");
    //     return;
    // }
// }


function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // check if email ends with "@gmail.com"
    if (!email.endsWith("@gmail.com")) {
        alert("Please enter a valid email address.");
        return;
    }

    // check if password contains at least one lowercase letter, one uppercase letter, one number and one special character
    var lowerCaseLetter = /[a-z]/.test(password);
    var upperCaseLetter = /[A-Z]/.test(password);
    var number = /[0-9]/.test(password);
    var specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!(lowerCaseLetter && upperCaseLetter && specialCharacter)) {
        alert("Please enter a valid password. It should contain at least one lowercase letter, one uppercase letter, one number and one special character.");
        return;
    }
    popups("Login Successful");
}