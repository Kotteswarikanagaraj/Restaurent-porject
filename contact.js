// contact.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("cname").value;
    const email = document.getElementById("cemail").value;
    const message = document.getElementById("cmsg").value;

    if (name === "" || email === "" || message === "") {
      alert("❗ Please fill in all fields.");
      return;
    }

    // Simulate sending the message
    alert(`✅ Thank you, ${name}! Your message has been received.`);

    form.reset(); // Clear form after submission
  });
});
