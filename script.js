function generatePassword() {

    var length = parseInt(document.getElementById("pwd-length").value);

    var useUpper = document.getElementById("opt-upper").checked;
    var useLower = document.getElementById("opt-lower").checked;
    var useNums = document.getElementById("opt-nums").checked;
    var useSpec = document.getElementById("opt-spec").checked;

    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var nums = "0123456789";
    var spec = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    var pool = "";

    if (useUpper) pool += upper;
    if (useLower) pool += lower;
    if (useNums) pool += nums;
    if (useSpec) pool += spec;

    if (pool === "") {
        document.getElementById("error-msg").style.display = "block";
        document.getElementById("password-output").value = "";
        return;
    }

    document.getElementById("error-msg").style.display = "none";

    if (length < 4 || length > 64 || isNaN(length)) {
        alert("Please enter a length between 4 and 64.");
        return;
    }

    var password = "";

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * pool.length);
        password += pool[randomIndex];
    }

    document.getElementById("password-output").value = password;
    document.getElementById("copy-msg").style.display = "none";
}

function copyPassword() {

    var output = document.getElementById("password-output");

    if (output.value === "") {
        return;
    }

    output.select();
    document.execCommand("copy");

    document.getElementById("copy-msg").style.display = "block";
}