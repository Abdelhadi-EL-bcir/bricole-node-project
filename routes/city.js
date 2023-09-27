import express from "express";

import { createCity, deleteCity, getCitis, getCity, updateCity } from "../controller/city.js";

const router = express.Router();


router.post('/', createCity)
router.put("/:id",updateCity)
router.delete("/:id",deleteCity )
router.get("/:id", getCity)
router.get("/", getCitis)


export default router;