var Userdb = require('../model/model');

// Create and save new user
exports.create = (req, res) => {
    // validate the request first
    if (!req.body) {
        res.status(400).send({ message: "Content cant be empty" });
        return;
    }
    // 
    const pass = req.body.password;
    const cpass = req.body.confirm_password;
    if (!(pass === cpass)) {
        res.send({ message: "password and comfirm password not same" })
        return;
    }
    // new user
    const user = new Userdb({
        name: req.body.name,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    })

    // Save user in database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/login')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error"
            });
        });

}

// fine user by name for login purpose
exports.findthis = (req, res) => {
    var namel = req.body.name;
    var passl = req.body.password;

    const namefound = Userdb.findOne({ name: namel }).then((namefound) => {
        if (namefound == null) {
            res.send({ message: "invalid user data" });
        } else {
            // res.send(namefound);
            if (passl == namefound.password) {
                res.redirect('/profile');
            } else {
                res.send({ message: "invalid user detail" });
            }
        }
    });

}