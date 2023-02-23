<?php 
    
    // var_dump($data = json_decode(file_get_contents('php://input'), true));
    // die();
    $data = json_decode(file_get_contents('php://input'), true);
    
    $tasks_decoded = $data;

    $tasks_encoded = json_encode($tasks_decoded);

    file_put_contents('database.json', $tasks_encoded);

    $response = [
        'success' => true,
        'message' => 'Ok',
        'code' => 200
    ];

    header('Content-Type: application/json');

    echo json_encode($response);


?>