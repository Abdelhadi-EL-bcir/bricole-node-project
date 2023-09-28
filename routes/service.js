import express from "express";
import { createService, deleteService, getService, getServices, updateService } from "../controller/service.js";

const router = express.Router();


router.post('/:cityId/:typeId', createService)
router.put("/:id",updateService)
router.delete("/:id/:cityId",deleteService )
router.get("/:id", getService)
router.get("/", getServices)


export default router;