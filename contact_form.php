<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$from = "From: $name";
$to = "contact@scribbleowl.com";
$subject = "Hello from $name";
$human = strtolower($_POST['human']);

$body = "From: $name\n E-Mail: $email\n Message:\n $message";

if ($name != '' && $email != '') {
	if ($human == 'orange') {
		if (mail ($to, $subject, $body, $from)) {
			echo '<p>Your message has been sent. I\'ll get back with you shortly!</p>';
		} else {
			echo '<p>Something went wrong. Please try again! :(</p>';
		}
	} else if ($human != 'orange') {
		echo '<p>Incorrect anti-spambot answer. Try googling it?</p>';
	}
} else {
	echo '<p>Fill in the required fields.</p>';
}
?>