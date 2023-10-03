import express from "express";
import { createService, deleteService, getService, getServices, getServicesByCity, getServicesByType, updateService } from "../controller/service.js";

const router = express.Router();


router.post('/:cityId/:typeId', createService)
router.put("/:id",updateService)
router.delete("/:id/:cityId",deleteService )
router.get("/:id", getService)
router.get("/", getServices)
router.get("/city/:cityId" , getServicesByCity);
router.get("/type/:typeId" , getServicesByType);


export default router;