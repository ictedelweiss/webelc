<?php
/**
 * Database Connection Setup for Edelweiss Learning Center
 * 
 * Replace placeholders with actual credentials from DomaiNesia cPanel.
 */

$host = 'localhost'; // Usually 'localhost' in cPanel
$db   = 'u1234567_webelc_db'; // Your DB name from cPanel
$user = 'u1234567_webelc_user'; // Your DB user from cPanel
$pass = 'YOUR_SECURE_PASSWORD'; // Your DB password
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    // Return structured JSON error for debugging, then exit
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode([
        'error' => 'Database connection failed',
        'message' => $e->getMessage()
    ]);
    exit;
}
