<?php

require_once 'config/bd.php';
require_once 'routes/formRoutes.php';

// Crear la conexión a la base de datos
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Manejar la ruta
formRoutes($conn); 

// Cerrar la conexión después de usarla
$conn->close();
?>