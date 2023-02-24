import {User} from "../models/userSchema.js";

export const register = async (req, res) => {
    
    let {email, password} = req.body;
    console.log(req.body);
    User.create({
            email,
            password
        })
    .then((User) => res.status(200).json({user:User}))
    .catch((err) => console.log(err));
};

