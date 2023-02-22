<?php 

    $tasks_string = file_get_contents('database.json');
    $tasks_decoded = json_decode($tasks_string, true);

    // var_dump($tasks_decoded);

    $tasks = [];
    foreach($tasks_decoded as $task) {
        $tasks[] = [
            'text' => $task['text'],
            'done' => false,
        ];
    }

    // var_dump($tasks);

    $response = [
        'success' => true,
        'message' => 'Ok',
        'tasks' => $tasks,
    ];

    // var_dump($response);

    $json_response = json_encode($response);

    // var_dump($json_response);

    header('Content-Type: application/json');
    
    echo $json_response;



?>