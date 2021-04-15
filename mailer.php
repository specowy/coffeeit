<?php
$URL="index.php"; //URL do pliku
$sec=1; //Liczba sekund opóźnienia
header("refresh: ".$sec.";URL=".$URL);
if(isset($_POST['email'])){
 
$from       = ($_POST['email']); 
$subject    = ($_POST['subject']); 
$message    = ($_POST['message']); 
$to         = 'danieltrybuch@coffeeit.pl';
$headers = array(
    'From' => $from,
    'Reply-To' => $from,
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message."email".$from, $headers);

echo "Dziękujemy  za kontakt z nami";}



?>