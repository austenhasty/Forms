document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("myForm");
    const input = document.getElementById("inputField");
    const msg = document.getElementById("msg");

    form.addEventListener("submit", function (event) {

        const value = input.value;
        const regex = /^[a-zA-Z0-9]+$/;

        if (!regex.test(value)) {
            event.preventDefault();
            msg.textContent = "Please only enter letters and numbers.";
        } else {
            event.preventDefault();
            msg.textContent = "Success! You did it!";
        }

    });

});