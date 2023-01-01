import 'dotenv/config.js'

import createError  from 'http-errors';
import express  from 'express'; //metodos de express para configurar y levantar servidores
import path  from 'path'; //metodos para trabajar con rutas de archivos y directorios 
import cookieParser  from 'cookie-parser';
import logger  from 'morgan'; //midleware que registra peticiones y errores HTTP
import indexRouter  from './routes/index.js'; //rutas de index
//import usersRouter  from './routes/users.js'; //rutas de usuarios 
import { __dirname } from './utils.js'; //direccion de la carpeta raiz del proyecto 

var app = express(); //metodo para levantar un servidor 

// view engine setup
app.set('views', path.join(__dirname, 'views')); //configuro donde van a estar las vistas
app.set('view engine', 'ejs'); //configuro el motor de vistas

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
