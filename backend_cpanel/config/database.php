<?php
/**
 * Database Connection Setup for Edelweiss Learning Center
 * 
 * Replace placeholders with actual credentials from DomaiNesia cPanel.
 */

$host = 'localhost'; // localhost di cPanel
$db   = 'eliteac1_webelc';
$user = 'eliteac1_webelc';
$pass = '123Q@zaqw';
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
