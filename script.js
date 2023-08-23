// Email validation and subscription process

// Variables
const email_input = document.querySelector("#email");
const error_message = document.querySelector(".err-msg");

// Subscribe button
const subscribe_button = document.querySelector("#subscribe-btn");

// Dismiss button
const dismiss_button = document.querySelector(".dismiss-btn");

// Sections
const text = document.querySelector(".text-content");
const img = document.querySelector(".img-content");
const message = document.querySelector(".message");

// Email validation function
function email_validate() {
    // Regex for email format
    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = email_input.value;
    // Check if inserted email matches the format
    if (!email.match(mail_format) || email == /\s*/) {
        email_input.style = "border: 1px solid hsl(4, 100%, 67%);";
        error_message.style = "visibility: visible;";
        return false;
    } else {
        email_input.style = "";
        error_message.style = "";
        return true;
    }
}

// Handles subscribe button click event
function subscribe() {
    // Checks if email is valid to continue process. If it's not, then email error message will be shown
    // which is inside email_validate function and user won't be subscribed.
    if (email_validate()) {
        text.style = "display: none;";
        img.style = "display: none;";
        message.style = "display: block";
        document.querySelector(".user-email").innerText = email_input.value;
        document.querySelector(".card").style = "width: 25rem; padding: 3rem 4rem";
    }
}

// Handles dismiss button click event
function dismiss() {
    text.style = "display: auto;";
    img.style = "display: auto;";
    message.style = "display: none";
    document.querySelector(".card").style = "";
}

// Email validation when email input is changed
email_input.addEventListener("change", email_validate);

// Subscribe button event listener
subscribe_button.addEventListener("click", subscribe);

// Dismiss button event listener
dismiss_button.addEventListener("click", dismiss);