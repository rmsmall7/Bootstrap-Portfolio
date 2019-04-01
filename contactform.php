<?php

if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];

$mailTo = "rmsmall7@gmail.com";
$headers = "From: ".$mailFrom;
$txt = "You have received an email from ".$name.".\n\n".$subject;


  mail($mailTo, $subject, $txt, $headers);

  header("Location: index.php?mailsend");

}