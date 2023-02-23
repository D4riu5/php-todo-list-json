<?php

    $tasks_string = file_get_contents('database.json');
    $tasks_decoded = json_decode($tasks_string, true);


    if ($_POST['task'] !== '') {
        $newTask = [
            'text' => $_POST['task'],
            'done' => false,
        ];
    
        $tasks_decoded[] = $newTask;
    
        $tasks_encoded = json_encode($tasks_decoded);
    
        file_put_contents('database.json', $tasks_encoded);
    
        $response = [
            'success' => true,
            'message' => 'Ok',
            'code' => 200,
            'newTask' => $newTask
        ];
    
        header('Content-Type: application/json');
        
        echo json_encode($response);
    }

    




?>