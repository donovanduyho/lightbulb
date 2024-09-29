const bcrypt = require('bcrypt');

class passwordCheck {
    static async hashPassword(password) {
        return new Promise ((resolve, reject) => {
            bcrypt.genSalt(12, (err, salt) => {
                if (err) {
                    reject(err);
                }
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err){
                        reject(err);
                    }
                    resolve(hash);
                });
            })
        })
    }


    static async comparePassword(password, hashed) {
        return bcrypt.compare(password, hashed)
    }
}


module.exports = passwordCheck