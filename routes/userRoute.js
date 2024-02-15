const UserModel = require("../model/userModel");
const express = require("express");

const userRouter = express.Router();

/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *             type: Object
 *             properties:
 *                  _id:
 *                      type:string
 *                      description:The auto generated id for user
 *                  username:
 *                      type:string
 *                  email:
 *                      type:string
 *                  password:
 *                      type:string
 */

userRouter.get("/", async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).send({ user });
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
});

userRouter.post("/register", async (req, res) => {
    try {
        const { email, pass } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            res.status(400).send({ "msg": `User already exits with ${email}` });
        } else {
            const newUser = new UserModel(req.body);
            await newUser.save();
            res.status(200).send({ "msg": "registration success" });
        }
    } catch (error) {
        res.status(500).send({ "msg": "User created" });
    }
})

module.exports = userRouter;