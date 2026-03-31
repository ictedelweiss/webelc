<?php
// =============================================
// Edelweiss Learning Center - CMS Config
// =============================================

// === Admin Credentials ===
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD', 'Edelweiss26!'); // Change this after first login

// === Signing Key for Token ===
// IMPORTANT: Change this to a long random string in production!
define('SECRET_KEY', 'ELC_DomaiNesia_Secret_2026!@#QWERTY');

// === Token Expiry (seconds) ===
define('TOKEN_EXPIRY', 7 * 24 * 60 * 60); // 7 days

// === Database Settings ===
define('DB_HOST', 'localhost');
define('DB_NAME', 'eliteac1_webelc');
define('DB_USER', 'eliteac1_webelc');
define('DB_PASS', '123Q@zaqw');
define('DB_CHARSET', 'utf8mb4');

// === CORS Allowed Origins ===
define('ALLOWED_ORIGINS', [
    'https://edelweisslearningcenter.com',
    'https://www.edelweisslearningcenter.com',
    'https://elc-website-blv.pages.dev',
    'http://localhost:3000',
    'http://localhost:3001',
]);
