<?php
/**
 * articles.php — Articles CRUD API
 *
 *  GET    /articles.php              List all articles (newest first)
 *  GET    /articles.php?slug=xxx     Get article by slug
 *  GET    /articles.php?id=xxx       Get article by id
 *  POST   /articles.php              Create article  [auth required]
 *  PUT    /articles.php?id=xxx       Update article  [auth required]
 *  DELETE /articles.php?id=xxx       Delete article  [auth required]
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/token.php';

setCorsHeaders();

$method = $_SERVER['REQUEST_METHOD'];
$pdo    = getConnection();

// ── GET ───────────────────────────────────────────────────────────────────────
if ($method === 'GET') {

    if (!empty($_GET['slug'])) {
        $stmt = $pdo->prepare('SELECT * FROM articles WHERE slug = ? LIMIT 1');
        $stmt->execute([$_GET['slug']]);
        $row = $stmt->fetch();
        if ($row) {
            echo json_encode($row);
        } else {
            http_response_code(404);
            echo json_encode(['message' => 'Article not found']);
        }

    } elseif (!empty($_GET['id'])) {
        $stmt = $pdo->prepare('SELECT * FROM articles WHERE id = ? LIMIT 1');
        $stmt->execute([(int) $_GET['id']]);
        $row = $stmt->fetch();
        if ($row) {
            echo json_encode($row);
        } else {
            http_response_code(404);
            echo json_encode(['message' => 'Article not found']);
        }

    } else {
        $stmt = $pdo->query('SELECT * FROM articles ORDER BY created_at DESC');
        echo json_encode($stmt->fetchAll());
    }

// ── POST : Create ─────────────────────────────────────────────────────────────
} elseif ($method === 'POST') {
    requireAuth();

    $body      = json_decode(file_get_contents('php://input'), true) ?? [];
    $title     = trim($body['title'] ?? '');
    $slug      = trim($body['slug'] ?? '');
    $content   = $body['content'] ?? '';
    $excerpt   = trim($body['excerpt'] ?? '');
    $thumbnail = trim($body['thumbnail'] ?? '');

    if ($title === '' || $slug === '') {
        http_response_code(400);
        echo json_encode(['message' => 'Title and slug are required']);
        exit();
    }

    // Slug uniqueness
    $chk = $pdo->prepare('SELECT id FROM articles WHERE slug = ?');
    $chk->execute([$slug]);
    if ($chk->fetch()) {
        http_response_code(409);
        echo json_encode(['message' => 'Slug already exists. Please choose a different slug.']);
        exit();
    }

    $stmt = $pdo->prepare(
        'INSERT INTO articles (title, slug, content, excerpt, thumbnail, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, NOW(), NOW())'
    );
    $stmt->execute([$title, $slug, $content, $excerpt, $thumbnail]);
    $newId = $pdo->lastInsertId();

    $row = $pdo->prepare('SELECT * FROM articles WHERE id = ?');
    $row->execute([$newId]);

    http_response_code(201);
    echo json_encode(['success' => true, 'article' => $row->fetch()]);

// ── PUT : Update ──────────────────────────────────────────────────────────────
} elseif ($method === 'PUT') {
    requireAuth();

    $id = (int) ($_GET['id'] ?? 0);
    if ($id === 0) {
        http_response_code(400);
        echo json_encode(['message' => 'Article ID is required']);
        exit();
    }

    // Exists?
    $chk = $pdo->prepare('SELECT id FROM articles WHERE id = ?');
    $chk->execute([$id]);
    if (!$chk->fetch()) {
        http_response_code(404);
        echo json_encode(['message' => 'Article not found']);
        exit();
    }

    $body      = json_decode(file_get_contents('php://input'), true) ?? [];
    $title     = trim($body['title'] ?? '');
    $slug      = trim($body['slug'] ?? '');
    $content   = $body['content'] ?? '';
    $excerpt   = trim($body['excerpt'] ?? '');
    $thumbnail = trim($body['thumbnail'] ?? '');

    if ($title === '' || $slug === '') {
        http_response_code(400);
        echo json_encode(['message' => 'Title and slug are required']);
        exit();
    }

    // Slug uniqueness (exclude self)
    $chkSlug = $pdo->prepare('SELECT id FROM articles WHERE slug = ? AND id != ?');
    $chkSlug->execute([$slug, $id]);
    if ($chkSlug->fetch()) {
        http_response_code(409);
        echo json_encode(['message' => 'Slug already used by another article']);
        exit();
    }

    $pdo->prepare(
        'UPDATE articles
         SET title = ?, slug = ?, content = ?, excerpt = ?, thumbnail = ?, updated_at = NOW()
         WHERE id = ?'
    )->execute([$title, $slug, $content, $excerpt, $thumbnail, $id]);

    $row = $pdo->prepare('SELECT * FROM articles WHERE id = ?');
    $row->execute([$id]);

    echo json_encode(['success' => true, 'article' => $row->fetch()]);

// ── DELETE ────────────────────────────────────────────────────────────────────
} elseif ($method === 'DELETE') {
    requireAuth();

    $id = (int) ($_GET['id'] ?? 0);
    if ($id === 0) {
        http_response_code(400);
        echo json_encode(['message' => 'Article ID is required']);
        exit();
    }

    $stmt = $pdo->prepare('DELETE FROM articles WHERE id = ?');
    $stmt->execute([$id]);

    if ($stmt->rowCount() === 0) {
        http_response_code(404);
        echo json_encode(['message' => 'Article not found']);
        exit();
    }

    echo json_encode(['success' => true, 'message' => 'Article deleted successfully']);

} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
}
