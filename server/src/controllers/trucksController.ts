import { Request, Response, NextFunction } from "express";
import { Truck } from "../models/trucks/truckModel";


export const getAllTrucks = async (req: Request, res: Response) => {
    try {
        const trucks = await Truck.find()
        res.status(200).json(trucks);
    } catch (error) {
        res.status(500).json({ "error": error });
    }
}
export const getTruckById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const truck = await Truck.findById(id)
        res.status(200).json(truck);
    } catch (error) {
        res.status(500).json({ "error": error });
    }
}

