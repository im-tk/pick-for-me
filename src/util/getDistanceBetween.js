const r =  6371 //earth's radius in km

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function convertToMiles(km) {
  let miles = (km * 0.62137).toFixed(1); //1km is equivalent to 0.6214 miles.
  return (miles % 1 != 0 ?  miles : Math.round(miles));
}

const getDistance = (lat1, lon1, lat2, lon2) => {
  let dLat = degreesToRadians(lat2 - lat1);
  let dLon = degreesToRadians(lon2 - lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return convertToMiles(r * c);
}

export default getDistance;