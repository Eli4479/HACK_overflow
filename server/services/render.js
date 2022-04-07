exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.register = (req, res) => {
    res.render('register', { user: "New Data" });
}
exports.login = (req, res) => {
    res.render('login');
}
exports.profile = (req, res) => {
    res.render('profile');
}
exports.setting = (req, res) => {
    res.render('setting');
}
exports.task = (req, res) => {
    res.render('task');
}
exports.editattendence = (req, res) => {
    res.render('editattendence');
}