<?php
/**
 * upload.php — Handle image uploads for CMS
 *
 *  POST /upload.php   [auth required]
 *  Receives multipart/form-data with an 'image' field.
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/token.php';

setCorsHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit();
}

requireAuth();

if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No file uploaded or upload error.']);
    exit();
}

$file = $_FILES['image'];
$allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
$maxSize = 2 * 1024 * 1024; // 2MB

if (!in_array($file['type'], $allowedTypes)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid file type. Only JPG, PNG, GIF, and WEBP are allowed.']);
    exit();
}

if ($file['size'] > $maxSize) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'File size exceeds 2MB limit.']);
    exit();
}

$uploadDir = __DIR__ . '/uploads/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// Generate unique filename securely
$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

// Fallback extension check
$allowedExts = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
if (!in_array($ext, $allowedExts)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid file extension.']);
    exit();
}

$filename = uniqid('img_') . '_' . time() . '.' . $ext;
$destination = $uploadDir . $filename;

if (move_uploaded_file($file['tmp_name'], $destination)) {
    // Generate public URL
    // In production, HTTP_HOST will be api.edelweisslearningcenter.com
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || $_SERVER['SERVER_PORT'] == 443 ? 'https' : 'http';
    
    // Sometimes HTTP_HOST is not perfectly set in CGI/CLI testing
    $host = $_SERVER['HTTP_HOST'] ?? 'api.edelweisslearningcenter.com';
    
    $url = $protocol . '://' . $host . '/uploads/' . $filename;

    http_response_code(201);
    echo json_encode([
        'success' => true,
        'url' => $url,
        'message' => 'Image uploaded successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save the uploaded image.']);
}
