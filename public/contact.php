<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input']);
    exit;
}

$name    = strip_tags(trim($input['name']    ?? ''));
$email   = strip_tags(trim($input['email']   ?? ''));
$phone   = strip_tags(trim($input['phone']   ?? ''));
$message = strip_tags(trim($input['message'] ?? ''));

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Pflichtfelder fehlen']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige E-Mail-Adresse']);
    exit;
}

$to      = 'info@alexis-care.de';
$subject = '=?UTF-8?B?' . base64_encode('Neue Beratungsanfrage von ' . $name) . '?=';

$body  = "Sie haben eine neue Beratungsanfrage erhalten:\n\n";
$body .= "Name:     $name\n";
$body .= "E-Mail:   $email\n";
$body .= "Telefon:  " . ($phone ?: 'Nicht angegeben') . "\n\n";
$body .= "Nachricht:\n$message\n";

$headers  = "From: info@alexis-care.de\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'E-Mail konnte nicht gesendet werden']);
}
