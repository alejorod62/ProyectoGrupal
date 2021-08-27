const usuariosController = require('.././controller/usuariosController');
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

/* Multer config */

const configImagenPerfil = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/usuarios'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: configImagenPerfil });


router.get('/login', usuariosController.login)
router.get('/profile', usuariosController.perfil)
router.get('/register', usuariosController.registro)
router.post('/register', uploadFile.single ('ImagePerfil') ,usuariosController.guardar)
router.post('/new', usuariosController.crear);
router.get('/:id/edit', usuariosController.editar)
router.put('/:id/edit', usuariosController.modificar);
module.exports = router;