<?php

if(isset($_POST["submit"])) {
    $recipient="aaron@xlaero.ca";
    $subject="Form to email message";
    $sender= "Aaron Shcanz";
    $senderEmail= "aaron.schanz@gmail.com";
    $message= "test";

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>