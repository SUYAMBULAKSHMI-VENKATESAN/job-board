const typed = new Typed('.multiple-text',{
    strings: ['On-Site', 'Remote', 'Hybrid'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,

});



document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Here, you would typically submit the form data to a server using AJAX or fetch

    // For demonstration, let's display the alert message
    document.getElementById('alertMsg').style.display = 'block';

    // Set a timer to hide the alert message after 5 seconds
    setTimeout(function() {
        document.getElementById('alertMsg').style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
});
