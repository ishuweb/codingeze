<?php

// ERROR SHOWING || PREVENT INTERNAL ERROR 500 
ini_set ('display_errors', 1);  
ini_set ('display_startup_errors', 1);  
error_reporting (E_ALL);  

// GET REQUEST URL 
$full_request = $_SERVER['REQUEST_URI'];
// GET CURRENT PAGE ONLY 
$request = str_replace("/codingeze", "", $full_request);

// FUNCTION TO REDIRETC HANDLING
switch ($request) {
    case '/':
        require __DIR__ . '../../homepage/index.html';
    break;
    case '':
        require __DIR__ . '../../homepage/index.html';
    break;
    case '/about':
        require __DIR__ . '../../test1/info.php';
    break;
    case '/contact':
        require __DIR__ . '../../test2/cont.php';
    break;
    case '/services':
        require __DIR__ . '../../test3/service.php';
    break;
    default:
        require __DIR__ . '../../default/not-found.php';
    break;
}

?>