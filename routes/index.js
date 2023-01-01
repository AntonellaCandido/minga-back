import categories from './categories.js' 
import users from './users.js'
import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    name : 'anto',
    mail : 'antu.candido@gmail.com'
  });
});

router.use('/categories',categories)
router.use('/users',users) //obligo al enrrutador principal 
//a  usar el path USERS con las rutas definidas en el enrrutador de USERS

export default router;
