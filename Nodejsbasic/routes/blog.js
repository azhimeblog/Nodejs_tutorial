var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("blog");
});

router.get('/add', function(req, res, next) {
    res.render("addblog");
});

router.post('/add', [
        check("name", "กรุณาใส่ชื่อบทความของคุณก่อน").not().isEmpty(),
        check("description", "ใส่เนื้อหาบทความก่อนดีไหม").not().isEmpty(),
        check("author", "ไม่ได้ป้อมชื่อผู้แต่ง").not().isEmpty(),
    ],
    function(req, res, next) {
        const result = validationResult(req);
        var errors = result.errors;
        if (!result.isEmpty()) {
            console.log(errors);
            res.render('addblog', { errors })
        } else {
            //insert to DB
        }
    });

module.exports = router;