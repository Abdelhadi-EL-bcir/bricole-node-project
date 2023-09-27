import express from "express";

import { createUser, deleteUser, getUsers, getUser, updateUser } from "../controller/user.js";
import { verifyAdmin, verifyToken , verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


router.get("/checkauthentification" , verifyToken , (req,res,next)=>{
    res.send("Hello you are logged in!");
})

router.get("/checkuser/:id" , verifyUser , (req,res,next)=>{
    res.send("Hello user, you are logged in and you can delete your account!");
})

router.get("/checkadmin/:id" , verifyAdmin , (req,res,next)=>{
    res.send("Hello admin, you are logged in and you can delete all accounts!");
})

router.post('/', createUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser )
router.get("/:id", getUser)
router.get("/", getUsers)


export default router;