// 1. Welcome message (Home page button)
function showMessage() {
    alert("Welcome to Travel Explorer!");
}

document.addEventListener("DOMContentLoaded", function () {

    // 2. Mobile menu toggle
    var nav = document.querySelector("nav");
    var menu = document.querySelector("nav ul");

    if (nav && menu) {
        var toggle = document.createElement("span");
        toggle.className = "menu-toggle";
        toggle.textContent = "☰";
        toggle.setAttribute("role", "button");
        toggle.setAttribute("aria-label", "Toggle menu");
        toggle.setAttribute("tabindex", "0");
        nav.insertBefore(toggle, menu);

        toggle.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }

    // 3. Contact form validation
    var form = document.querySelector("form");

    if (form) {
        var inputs = form.querySelectorAll("input");
        var nameField = inputs[0];
        var emailField = inputs[1];
        var subjectField = inputs[2];
        var messageField = form.querySelector("textarea");

        function showError(field, message) {
            field.classList.add("invalid");
            var error = document.createElement("small");
            error.className = "error";
            error.textContent = message;
            field.insertAdjacentElement("afterend", error);
        }

        function clearErrors() {
            var errors = form.querySelectorAll(".error");
            for (var i = 0; i < errors.length; i++) {
                errors[i].remove();
            }
            var invalids = form.querySelectorAll(".invalid");
            for (var j = 0; j < invalids.length; j++) {
                invalids[j].classList.remove("invalid");
            }
            var oldSuccess = document.querySelector(".success");
            if (oldSuccess) {
                oldSuccess.remove();
            }
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            clearErrors();

            var valid = true;
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nameField.value.trim().length < 3) {
                showError(nameField, "Please enter your full name (at least 3 characters).");
                valid = false;
            }

            if (!emailPattern.test(emailField.value.trim())) {
                showError(emailField, "Please enter a valid email address.");
                valid = false;
            }

            if (subjectField.value.trim().length < 3) {
                showError(subjectField, "Please enter a subject (at least 3 characters).");
                valid = false;
            }

            if (messageField.value.trim().length < 10) {
                showError(messageField, "Message must be at least 10 characters.");
                valid = false;
            }

            if (valid) {
                var success = document.createElement("div");
                success.className = "success";
                success.textContent = "Thank you! Your message has been sent successfully.";
                form.insertAdjacentElement("afterend", success);
                form.reset();
            }
        });
    }
});