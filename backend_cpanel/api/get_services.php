<?php
/**
 * API Endpoint: Get Services
 * Path: /api/get_services.php
 * Endpoint returns dummy data or queries from 'services' table.
 */

// Load CORS settings (strict origin access)
require_once __DIR__ . '/../config/cors.php';

// Prepare headers
header("Content-Type: application/json; charset=UTF-8");

// Load database connection
require_once __DIR__ . '/../config/database.php';

// If 'services' table exists, fetch from DB.
// Otherwise, return sample dummy data for initial integration.
try {
    $stmt = $pdo->query("SELECT * FROM services");
    $services = $stmt->fetchAll();

    if ($services) {
        $response = [
            'status' => 'success',
            'data' => $services
        ];
    } else {
        // Sample dummy data fallback
        $response = [
            'status' => 'sample',
            'data' => [
                ['id' => 1, 'name' => 'English Literacy', 'description' => 'Comprehensive English course for all ages.'],
                ['id' => 2, 'name' => 'Foundational Education', 'description' => 'Critical skills for pre-school and early school years.'],
                ['id' => 3, 'name' => 'Elite Academia', 'description' => 'Personalized premium tutoring for advanced learners.']
            ]
        ];
    }

    echo json_encode($response);
} catch (\Exception $e) {
    // Graceful fallback to dummy data if table is not yet created
    $response = [
        'status' => 'fallback',
        'data' => [
            ['id' => 1, 'name' => 'English Literacy', 'description' => 'Comprehensive English course for all ages.'],
            ['id' => 2, 'name' => 'Foundational Education', 'description' => 'Critical skills for pre-school and early school years.'],
            ['id' => 3, 'name' => 'Elite Academia', 'description' => 'Personalized premium tutoring for advanced learners.']
        ]
    ];
    echo json_encode($response);
}
