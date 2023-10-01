import express from "express";

import { createReview, deleteReview, getReviews, getReview, updateReview } from "../controller/review.js";

const router = express.Router();


router.post('/:serviceId/:userId', createReview)
router.put("/:id", updateReview)
router.delete("/:id/:serviceId/:userId", deleteReview )
router.get("/:id", getReview)
router.get("/", getReviews)


export default router;