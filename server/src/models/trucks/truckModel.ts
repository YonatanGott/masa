import { Schema, model } from 'mongoose'

interface ITruckModel {
    truckNumber: number;
    numOfMessages:number;
    engineHeat: number;
    epoch: string;
    malfunctionWarning: number;
    startLocation: number[];
    latestLocation: number[];
    distanceTraveled: number;
    lastRead: string;
}

const truckSchema = new Schema<ITruckModel>(
    {
        truckNumber: {
            type: Number,
        },
        numOfMessages: {
            type: Number,
        },
        engineHeat: {
            type: Number,
        },
        epoch: {
            type: String,
        },
        lastRead: {
            type: String,
        },
        malfunctionWarning: {
            type: Number,
        },
        startLocation: {
            type: [Number],
        },
        latestLocation: {
            type: [Number],
        },
        distanceTraveled: {
            type: Number,
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            },
        },
    }
);


const Truck = model<ITruckModel>("Truck", truckSchema);

export { Truck };