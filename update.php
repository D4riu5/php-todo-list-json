<?php 
    
    if ($_POST['updatedTasks']) {

        $tasks_decoded= $_POST['updatedTasks'];
        
        $tasks_encoded = json_encode($tasks_decoded);

        file_put_contents('database.json', $tasks_encoded);

        $response = [
            'success' => true,
            'message' => 'Ok',
            'code' => 200
        ];

        header('Content-Type: application/json');

        echo json_encode($response);


    }

    

?>