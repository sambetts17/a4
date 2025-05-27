// Display welcome alert when the page loads
window.onload = function () {
  alert("Welcome to the Newsletter Signup");
};

// Validate form before submission
function validateForm(event) {
  // Access form values and trim whitespace
  var fname = document.forms["signupForm"]["fname"].value.trim();
  var lname = document.forms["signupForm"]["lname"].value.trim();

  // Check if either first or last name is empty or email address
  if (fname === "" || lname === "" || email == "") {
    alert("Please fill out Required Fields");
    event.preventDefault(); // Stop form submission
    return false;
  }

  return true;
}