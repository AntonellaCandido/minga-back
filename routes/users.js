import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a emoji');
});

export default router;

//rooter.get al enrrutador le informo que tiene que hacer una petision de tipo GET
// '/' es el string que definirá la ruta de conexión(puede ser cualquien string se recomienda NO USAR MAYUSCULA)
// ejemplos: sigin // sign_in // sign-in //ESTO NO SE DEBERIA: signIn
//funcion que se ejecuta cuando llamo a la ruta 
//ESTA FUNCION SE SACA DE LA RUTA 
//Y SE LO PROGRAMA POR SEPARADO YA QUE ESTA FUNCION ES UN METODO QUE LLAMAMOS CONTROLADOR
// Controlador: series de funciones o metodos que la ruta llama 
//Todas las funciones que van a controlar al modelo de usuario tiene que estar en el controlador usuario y asi..
//Las funciones necesarias para controlar el modelo USUARIO deben estar en el controlador de USURIO

