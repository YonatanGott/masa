export const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    let R = 6378.1; // km
    let dLat = toRad(lat2 - lat1);
    let dLon = toRad(lon2 - lon1);
    let lat1R = toRad(lat1);
    let lat2R = toRad(lat2);

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1R) * Math.cos(lat2R);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    // convert to miles
    return d * 0.62;
}

// Converts numeric degrees to radians
function toRad(value: number) {
    return value * (Math.PI / 180);
}