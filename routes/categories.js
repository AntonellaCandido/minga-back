import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({
        success: true,
        response: 'categories'
    })
});

export default router;