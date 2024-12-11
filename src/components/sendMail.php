<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Recipient email
    $to = "rohinishankari613@gmail.com";
    
    // Subject
    $subject = "New Contact Form Message from $name";
    
    // Email body
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    
    // Headers
    $headers = "From: $email\r\n";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
