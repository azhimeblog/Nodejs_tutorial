var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const db = require('monk')("localhost:27017/TutorialDB");



db.then(() => {
    console.log('Connected correctly to server')
})

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
            var ct = db.get('blogs');
            ct.insert({
                    name: req.body.name,
                    description: req.body.description,
                    author: req.body.author
                }, function(err, blog) {
                    if (err) {
                        res.send(err);
                    } else {
                        req.flash("error", "บันทึกบทความเรียบร้อยแล้ว");
                        res.location('/blog/add');
                        res.redirect('/blog/add');
                    }

                }

            )
        }
    });

module.exports = router;