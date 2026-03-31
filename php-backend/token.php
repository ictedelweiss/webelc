<?php
require_once __DIR__ . '/config.php';

/**
 * Generate a stateless HMAC-signed auth token
 */
function generateToken(string $username): string
{
    $expiry  = time() + TOKEN_EXPIRY;
    $payload = json_encode(['u' => $username, 'e' => $expiry]);
    $sig     = hash_hmac('sha256', $payload, SECRET_KEY);
    return base64_encode($payload . '::' . $sig);
}

/**
 * Validate a token; returns true if valid and not expired
 */
function validateToken(string $token): bool
{
    try {
        $decoded = base64_decode($token, true);
        if ($decoded === false) {
            return false;
        }

        $sepPos = strrpos($decoded, '::');
        if ($sepPos === false) {
            return false;
        }

        $payload = substr($decoded, 0, $sepPos);
        $sig     = substr($decoded, $sepPos + 2);

        $data = json_decode($payload, true);
        if (!is_array($data) || !isset($data['u'], $data['e'])) {
            return false;
        }

        // Check expiry
        if ((int) $data['e'] < time()) {
            return false;
        }

        // Verify signature
        $expectedSig = hash_hmac('sha256', $payload, SECRET_KEY);
        return hash_equals($expectedSig, $sig);
    } catch (Throwable $e) {
        return false;
    }
}

/**
 * Extract Bearer token from Authorization header
 */
function getTokenFromRequest(): ?string
{
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (str_starts_with($header, 'Bearer ')) {
        return trim(substr($header, 7));
    }
    return null;
}

/**
 * Abort with 401 if no valid token
 */
function requireAuth(): void
{
    $token = getTokenFromRequest();
    if ($token === null || !validateToken($token)) {
        http_response_code(401);
        echo json_encode(['message' => 'Unauthorized']);
        exit();
    }
}
