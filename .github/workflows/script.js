document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.getElementById("gender").value;
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("cpassword").value;
    let result = document.getElementById("result");

    // Validation
    if(fname === "" || lname === "" || email === "" || phone === "" ||
        gender === "" || pass === "" || cpass === "") {
        result.style.color = "red";
        result.innerHTML = "All fields are required!";
        return;
    }

    if(phone.length !== 10 || isNaN(phone)) {
        result.style.color = "red";
        result.innerHTML = "Enter a valid 10-digit phone number!";
        return;
    }

    if(pass !== cpass) {
        result.style.color = "red";
        result.innerHTML = "Passwords do not match!";
        return;
    }

    result.style.color = "green";
    result.innerHTML = "Registration Successful!";
});
