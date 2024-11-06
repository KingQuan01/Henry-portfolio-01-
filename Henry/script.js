// Simple form submission alert
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display an alert with the form data
    alert(
      `Thank you, ${name}! Your message has been received.\nEmail: ${email}\nMessage: ${message}`
    );

    // Optionally, you can reset the form after submission
    this.reset();
  });
