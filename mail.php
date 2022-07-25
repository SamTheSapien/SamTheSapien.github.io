<?php
	$to = "sm.sapien@pm.com";
	$tema = "Landing Page Interest by Contact Form";
	$message = "Name: ".$_POST['name']."<br>";
	$message .= "Email: ".$_POST['email']."<br>";
	$message .= "Message: ".$_POST['note']."<br>";
	$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	mail($to, $tema, $message, $headers);
?>
