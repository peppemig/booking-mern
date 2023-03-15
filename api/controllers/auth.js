import User from "../models/User.js"
import bcrypt from "bcrypt"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req,res,next) => {
    try {
        const emailAlreadyUsed = await User.findOne({email:req.body.email})
        if(emailAlreadyUsed) return next(createError(404, "Email address already in use"))

        const usernameAlreadyUsed = await User.findOne({username:req.body.username})
        if(usernameAlreadyUsed) return next(createError(404, "Username already in use"))

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newUser.save()
        res.status(200).json('User has been created')
    } catch(err) {
        next(err)
    }
}

// LOGIN
export const login = async (req,res,next) => {
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user) return next(createError(404, "User not found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or username"))

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.SECRET);

        const { password, isAdmin, ...otherDetials } = user._doc;
        res.cookie("token", token, {httpOnly: true}).status(200).json({...otherDetials});
    } catch(err) {
        next(err)
    }
}