import Review from "../models/Review.js";
import User from "../models/User.js";
import Service from "../models/Service.js";

export const createReview = async (req, res, next) => {
    const userId = req.params.userId;
    const serviceId = req.params.serviceId;
    const newReview = new Review(req.body);
    try {
        const savedReview = await newReview.save();
        try {
            await User.findByIdAndUpdate(userId, {
                $push: { reviews: savedService._id }
            });

            await Service.findByIdAndUpdate(serviceId, {
                $push: { reviews: savedService._id }
            })
            res.status(200).json(savedReview);
        } catch (err) {
            next(err);
        }
    } catch (err) {
        next(err);
    }
};

export const updateReview = async (req, res, next) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedReview);
    } catch (err) {
        next(err);
    }
}

export const deleteReview = async (req, res, next) => {
    const userId = req.params.userId;
    const serviceId = req.params.serviceId;
    try {
        await Review.findByIdAndDelete(req.params.id);
        try {
            await City.findByIdAndUpdate(userId , {
                $pull : {
                    reviews : req.params.id
                }
            });

            await Type.findByIdAndUpdate(serviceId , {
                $pull : {
                    reviews : req.params.id
                }
            })
            res.status(200).json("Review has been deleted.");
        } catch (err) {
            next(err);
        }
    } catch (err) {
        next(err);
    }
}

export const getReview = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);
        res.status(200).json(review);
    } catch (err) {
        next(err);
    }
};

export const getReviews = async (req, res, next) => {

    try {
        const types = await Review.find();
        res.status(200).json(types);
    } catch (err) {
        next(err);
    }
}