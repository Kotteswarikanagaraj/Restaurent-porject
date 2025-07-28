document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const guests = document.getElementById("guests").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !phone || !guests || !date || !time) {
    alert("Please fill in all required fields.");
    return;
  }

  alert(`🎉 Thank you, ${name}! Your table for ${guests} is booked on ${date} at ${time}.`);

  // Optional: Redirect to success page
  // window.location.href = "success.html";
});
