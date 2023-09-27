import City from "../models/City.js";

export const createCity =  async (req, res) => {
    const newCity = new City(req.body);
    try {
        const savedCity = await newCity.save();
        res.status(200).json(savedCity);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const updateCity =   async (req, res) => {
    try {
        const updatedCity = await City.findByIdAndUpdate(req.params.id ,{$set : req.body} ,{new : true});
        res.status(200).json(updatedCity);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteCity =  async (req, res) => {
    try {
        await City.findByIdAndDelete(req.params.id);
        res.status(200).json("City has been deleted.");
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getCity =  async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        res.status(200).json(city);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getCitis =  async (req, res , next) => {
    
    try {
        const citis = await City.find();
        res.status(200).json(citis);
    } catch (err) {
        res.status(500).json(err);
    }
}