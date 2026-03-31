<?php
/**
 * setup.php — One-time database table setup
 * Run once via browser: https://edelweisslearningcenter.com/api-elc/setup.php
 * DELETE this file from server after setup is complete!
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');

$pdo = getConnection();

$sql = "
CREATE TABLE IF NOT EXISTS `articles` (
  `id`          INT UNSIGNED     NOT NULL AUTO_INCREMENT,
  `title`       VARCHAR(500)     NOT NULL,
  `slug`        VARCHAR(500)     NOT NULL,
  `content`     LONGTEXT         NOT NULL,
  `excerpt`     TEXT             NOT NULL DEFAULT '',
  `thumbnail`   VARCHAR(1000)    NOT NULL DEFAULT '',
  `created_at`  DATETIME         NOT NULL,
  `updated_at`  DATETIME         NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_slug` (`slug`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
";

try {
    $pdo->exec($sql);
    echo json_encode([
        'success' => true,
        'message' => 'Table `articles` is ready. Delete this setup.php file from your server now!',
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
