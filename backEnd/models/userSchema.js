import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

let userSchema = mongoose.Schema({
        email: {
            type: String,
            required: [true, 'This property Email is required'],
            match: /.+\@.+\..+/,
            unique: true
        },
        isAdmin: {
            type: Boolean
        },
        password: {
            type: String,
            required: [true, 'This property Password is required']
        },
    }, {
        timestamps: true,
        versionKey: false
    }
);

userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

userSchema.methods.createJWT = function () {
    return jwt.sign({
        id: this._id,
        email: this.email
    }, 'key_secret', {expiresIn: '24h'});
};

export const User = mongoose.model('User', userSchema);

/*
user.comparePassword(password, async (err, isMatch) => {
            if (err) throw err
            if (isMatch) {...}
})
*/