// Mobile Navigation

function toggleMenu() {
    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");
}


// Booking Form Validation

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventType = document.getElementById("eventType").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const eventError = document.getElementById("eventError");
    const dateError = document.getElementById("dateError");
    const guestsError = document.getElementById("guestsError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear previous errors

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    eventError.textContent = "";
    dateError.textContent = "";
    guestsError.textContent = "";
    successMessage.textContent = "";


    let valid = true;


    // Name validation

    if (name === "") {

        nameError.textContent = "Please enter your name.";
        valid = false;

    } else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        valid = false;
    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email.";

        valid = false;
    }


    // Phone validation

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        phoneError.textContent =
            "Please enter your phone number.";

        valid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Phone number must contain 10 digits.";

        valid = false;
    }


    // Event validation

    if (eventType === "") {

        eventError.textContent =
            "Please select an event type.";

        valid = false;
    }


    // Date validation

    if (date === "") {

        dateError.textContent =
            "Please select your event date.";

        valid = false;

    } else {

        const selectedDate = new Date(date);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {

            dateError.textContent =
                "Event date cannot be in the past.";

            valid = false;
        }
    }


    // Guest validation

    if (guests === "") {

        guestsError.textContent =
            "Please enter number of guests.";

        valid = false;

    } else if (guests < 1) {

        guestsError.textContent =
            "Number of guests must be at least 1.";

        valid = false;
    }


    // Successful submission

    if (valid) {

        successMessage.textContent =
            "🎉 Your event enquiry has been submitted successfully!";

        form.reset();
    }

});