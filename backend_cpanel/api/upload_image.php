<?php
/**
 * API Endpoint: Upload Image
 * Path: /api/upload_image.php
 * Endpoint handles image uploads and returns an absolute URL.
 */

// Load CORS settings (strict origin access)
require_once __DIR__ . '/../config/cors.php';

// Prepare headers
header("Content-Type: application/json; charset=UTF-8");

// Set project subdomain base
$subdomain_base = "https://api.edelweisslearningcenter.com/uploads/";

// Check for file in request
if (isset($_FILES['file'])) {
    $file = $_FILES['file'];
    $filename = time() . '_' . basename($file['name']);
    $upload_dir = __DIR__ . '/../uploads/';
    $target_path = $upload_dir . $filename;

    // Basic MIME type validation
    $allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!in_array($file['type'], $allowed_types)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid file type. Only JPG, PNG, GIF, and WEBP allowed.']);
        exit;
    }

    // Move file to uploads directory
    if (move_uploaded_file($file['tmp_name'], $target_path)) {
        $absolute_url = $subdomain_base . $filename;
        echo json_encode([
            'status' => 'success',
            'url' => $absolute_url,
            'filename' => $filename
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to move uploaded file. Check directory permissions.']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded. Use "file" key in FormData.']);
}
