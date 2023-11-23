<?php

function formRoutes($conn) {
    $ruta = $_SERVER['REQUEST_URI'];

echo $ruta;

/*     switch ($ruta) {
        case '/':
            require_once '../controllers/formRoutes.php';
            mostrarUsuarios($conn);
            break;
        // Puedes agregar más rutas según sea necesario
        default:
            echo 'Ruta no encontrada';
    } */
}
?>