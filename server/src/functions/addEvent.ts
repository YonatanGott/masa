import { IEvent } from '../types/Event';
import { Truck } from '../models/trucks/truckModel'
import { getDistance } from './getDistance';
import moment from "moment";

export const addEvent = async (message: IEvent) => {
    try {
        const truckExists = await Truck.findOne({ truckNumber: message.truckId })
        if (truckExists) {
            truckExists.lastRead = moment().format("DD/MM/YYYY hh:mm:ss"),
            truckExists.distanceTraveled += getDistance(message.latitude, message.longitude, truckExists.latestLocation[0], truckExists.latestLocation[1])
            truckExists.engineHeat = message.engineHeat
            truckExists.malfunctionWarning = message.malfunctionWarning
            truckExists.latestLocation = [message.latitude, message.longitude]
            truckExists.save();
        } else {
            await Truck.create({
                truckNumber: message.truckId,
                numOfMessages: message.numOfMessages,
                engineHeat: message.engineHeat,
                epoch: message.epoch,
                malfunctionWarning: message.malfunctionWarning,
                startLocation: [message.latitude, message.longitude],
                latestLocation: [message.latitude, message.longitude],
                distanceTraveled: 0,
                lastRead: moment().format("DD/MM/YYYY hh:mm:ss"),

            })
        }
    } catch (error) {
        console.log(error);
    }
}