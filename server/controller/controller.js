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
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + id })
            })

    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }


}

exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

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