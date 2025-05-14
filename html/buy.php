<?php
if (isset($_POST['email']) && isset($_POST['code'])) {
    $to = $_POST['email'];
    $code = $_POST['code'];
    $subject = "Your verification code";
    $message = "Your verification code is: $code";
    $headers = "From: no-reply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent";
    } else {
        echo "Email failed";
    }
}
?>
