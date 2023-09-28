import express from "express";

import { createType, deleteType, getTypes, getType, updateType } from "../controller/type.js";

const router = express.Router();


router.post('/', createType)
router.put("/:id", updateType)
router.delete("/:id", deleteType )
router.get("/:id", getType)
router.get("/", getTypes)


export default router;