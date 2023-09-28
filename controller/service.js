import Service from "../models/Service.js";
import City from "../models/City.js";
export const createService =  async (req, res , next) => {
    const cityId = req.params.cityId;
    const newService = new Service(req.body);
    try {
        const savedService = await newService.save();
        try{
            await City.findByIdAndUpdate(cityId , {
                $push : {servics : savedService._id }
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedService);
    } catch (err) {
        next(err);
    }
};

export const updateService =   async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id ,{$set : req.body} ,{new : true});
        res.status(200).json(updatedService);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteService =  async (req, res) => {
    const cityId = req.params.cityId ; 
    try{
        await Service.findByIdAndDelete(req.params.id);
        try {
            await City.findByIdAndUpdate(cityId , {
                $pull : {
                    servics : req.params.id
                }
            })
            res.status(200).json("Service has been deleted.");
        } catch (err) {
            next(err);
        }
    }catch(err){
        next(err);
    }
}

export const getService =  async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        res.status(200).json(service);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getServices =  async (req, res , next) => {
    
    try {
        const servics = await Service.find();
        res.status(200).json(servics);
    } catch (err) {
        res.status(500).json(err);
    }
}