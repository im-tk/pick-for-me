const getMidpoint = (lat1, lng1, lat2, lng2) => {
  let midpoint = {
    lat: (lat1 + lat2) / 2,
    lng: (lng1 + lng2) / 2
  }

  return midpoint;
}

export default getMidpoint;