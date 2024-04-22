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

    if (!(lowerCaseLetter && upperCaseLetter && specialCharacter && number)) {
        alert("Please enter a valid password. It should contain at least one lowercase letter, one uppercase letter, one number and one special character.");
        return;
    }

    window.location.assign("home.html");
}