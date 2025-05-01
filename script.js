// Function to handle form submission
function submitContactForm(event) {
    event.preventDefault(); // Prevent form from submitting normally
    alert("Thank you for contacting Smart Stationers! We will get back to you shortly.");
    // Clear the form fields
    document.getElementById('contactForm').reset();
}

// Attach event listener to the form
document.getElementById('contactForm').addEventListener('submit', submitContactForm);
