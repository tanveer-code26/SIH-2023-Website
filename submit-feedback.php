<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $feedback = trim($_POST['feedback']);

    // Validate the form fields
    if (empty($name)) {
        die('Please enter your name.');
    }

    if (empty($email)) {
        die('Please enter your email.');
    }

    if (empty($feedback)) {
        die('Please enter your feedback.');
    }

    // Send the feedback via email or store it in a database
    // ...

    // Send a success response to the client
    http_response_code(200);
    echo 'Thank you for your feedback!';
} else {
    http_response_code(405);
    echo 'Method Not Allowed';
}