export interface ITruck {
    id: string;
    truckNumber: number;
    numOfMessages: number;
    engineHeat: number;
    epoch: string;
    malfunctionWarning: number;
    startLocation:  [number,number];
    latestLocation: [number,number];
    distanceTraveled: number;
    lastRead: string | number;
}
