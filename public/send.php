<?php
	header('Content-Type: application/json');
  if (isset($_POST['groupId']) && isset($_POST['comment'])) {
    $groupId = strip_tags(mysql_escape_string($_POST['groupId']));
    $comment = strip_tags(mysql_escape_string($_POST['comment']));
    $body = "GroupId: ".$groupId."<br>Comment: ".$comment;

    require './phpmailer/PHPMailerAutoload.php';
    $mail = new PHPMailer;
    $mail->setFrom('naomiandwillwedding@gmail.com', 'our site');
    $mail->addAddress('naomiandwillwedding@gmail.com', 'our mailbox');
    $mail->IsHTML(true);
    $mail->Subject = "Wedding RSVP";
    $mail->MsgHTML($body);
    $mail->CharSet="UTF-8";
    if(!$mail->Send()) {
      $return["success"] = false;
      $return["message"] = "Mailer Error: ".$mail->ErrorInfo;
    } else {
      $return["success"] = true;
      $return["message"] = "sent!";
    }
    echo json_encode($return);
  } else {
  	echo "Access is denied.";
  }
?>