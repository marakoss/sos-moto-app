export const degreesToRadians = (degrees: number): number => {
    return degrees * Math.PI / 180;
}

export const radiansToDegrees = (radians: number): number => {
  return radians * (180 / Math.PI);
}

export const coordsDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number => {
    let earthRadiusKm = 6371;

    let dLat = degreesToRadians(lat2 - lat1);
    let dLon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusKm * c;
}