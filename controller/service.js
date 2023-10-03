import Service from "../models/Service.js";
import City from "../models/City.js";
import Type from "../models/Type.js";
import User from "../models/User.js";
export const createService =  async (req, res , next) => {
    const cityId = req.params.cityId;
    const typeId = req.params.typeId;
    const userId = req.params.userId;

    const newService = new Service(req.body);
    try {
        const savedService = await newService.save();
        try{
            await City.findByIdAndUpdate(cityId , {
                $push : {servics : savedService._id }
            });

            await Type.findByIdAndUpdate(typeId , {
                $push : {servics : savedService._id}
            });

            await User.findByIdAndUpdate(userId , {
                $push : {servics : savedService._id}
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedService);
    } catch (err) {
        next(err);
    }
};

export const updateService =   async (req, res ,next) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id ,{$set : req.body} ,{new : true});
        res.status(200).json(updatedService);
    } catch (err) {
        next(err);
    }
}

export const deleteService =  async (req, res , next) => {
    const cityId = req.params.cityId; 
    const typeId = req.params.typeId;
    const userId = req.params.userId;
    try{
        await Service.findByIdAndDelete(req.params.id);
        try {
            await City.findByIdAndUpdate(cityId , {
                $pull : {
                    servics : req.params.id
                }
            });

            await Type.findByIdAndUpdate(typeId , {
                $pull : {
                    servics : req.params.id
                }
            });

            await User.findByIdAndUpdate(userId , {
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
        next(err);
    }
};

export const getServices =  async (req, res , next) => {
    
    try {
        const servics = await Service.find();
        res.status(200).json(servics);
    } catch (err) {
        next(err);
    }
}

export const getServicesByCity = async (req, res, next) => {
    try {
      const cityId = req.params.cityId;
      const city = await City.findById(cityId).exec();
  
      if (!city) {
        return res.status(404).json({ message: 'City not found' });
      }
  
      const serviceIds = city.servics;
      const services = await Service.find({ _id: { $in: serviceIds } }).exec();
  
      res.status(200).json(services);
    } catch (err) {
      next(err);
    }
  };


export const getServicesByType = async ()=>{
    let typeId = req.params.typeId;
    try{
        const type = await City.findById(typeId);
        let list = [];
        type.servics.forEach((item)=>{
           list.push(Service.find(Service.findById(item)))
        });
        res.status(200).json(list);
    }catch(err){
        next(err);
    }
}