import getDistanceBetween from "./getDistanceBetween";
const axios = require("axios");

const baseURL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&radius=16000&open_now=true&limit=50";

let config = {
  method: "get",
  url: baseURL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
  },
};

async function yelpSearch(latitude, longitude) {
  config.url = baseURL + "&latitude=" + latitude + "&longitude=" + longitude;
  return axios(config)
    .then((response) => {
      const data = response.data;
      if (data.businesses) {
        return data.businesses.map((business) => {
          return {
            id: business.id,
            imageSRC: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories,
            coordinates: business.coordinates,
            phone: business.display_phone,
            url: business.url,
            price: business.price,
            distance: getDistanceBetween(
              latitude,
              longitude,
              business.coordinates.latitude,
              business.coordinates.longitude
            ),
          };
        });
      }
    })
    .catch((error) => console.log(error));
}

export default yelpSearch;
