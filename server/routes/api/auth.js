class User {
    constructor(username, birthdate, age, email, password) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = false
    }

}

module.exports = function(app) {

    var bodyParse = require('body-parser');
    app.use(bodyParse.json());

    app.post('/api/auth', function(req, res) {
        let users = [
            new User('user1', '4/5/20', 28, 'abc@com.au', '123'),
            new User('user2', '4/7/19', 20, 'abd@com.au', '123'),
            new User('user3', '4/9/19', 27, 'abe@com.au', '123')
        ];

        if (!req.body) {
            return res.sendStatus(400);
        }

        // If the inputs match one these values return the json {"ok":true}. If the inputs don't match then return {"ok":false,errors:{}}.
        var customer = {};
        customer.email = req.body.email;
        customer.upwd = req.body.upwd;

        result = {}

        for (let i = 0; i < users.length; i++) {
            if (customer.email == users[i].email && customer.upwd == users[i].password) {
                users[i].valid = true;

                result.username = users[i].username;
                result.birthdate = users[i].birthdate;
                result.age = users[i].age;
                result.email = users[i].email;
                result.valid = users[i].valid;
            }
        }
        res.send(result);
    });
}