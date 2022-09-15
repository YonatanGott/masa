export interface IEvent {
    truckId: number;
    numOfMessages: number;
    engineHeat: number;
    latitude: number;
    longitude: number;
    epoch: number | string;
    malfunctionWarning: number;
}