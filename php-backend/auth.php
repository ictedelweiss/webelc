<?php
/**
 * auth.php — Admin Authentication API
 *
 *  POST /auth.php             Login with JSON {username, password}
 *  GET  /auth.php             Check Bearer token validity
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/token.php';

setCorsHeaders();

$method = $_SERVER['REQUEST_METHOD'];

// ── POST : Login ─────────────────────────────────────────────────────────────
if ($method === 'POST') {
    $body     = json_decode(file_get_contents('php://input'), true) ?? [];
    $username = trim($body['username'] ?? '');
    $password = $body['password'] ?? '';

    if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
        $token = generateToken($username);
        echo json_encode(['success' => true, 'token' => $token]);
    } else {
        http_response_code(401);
        echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
    }

// ── GET : Verify token ────────────────────────────────────────────────────────
} elseif ($method === 'GET') {
    $token = getTokenFromRequest();
    if ($token !== null && validateToken($token)) {
        echo json_encode(['authenticated' => true]);
    } else {
        http_response_code(401);
        echo json_encode(['authenticated' => false]);
    }

} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
}
