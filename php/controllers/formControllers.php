class UsuarioController {
    private $usuarioModel;

    public function __construct($usuarioModel) {
        $this->usuarioModel = $usuarioModel;
    }

    public function mostrarUsuarios() {
        $usuarios = $this->usuarioModel->obtenerUsuarios();
        include '../views/usuarios.php';
    }
}
?>