import getDistanceBetween from "./getDistanceBetween";
const axios = require("axios");

// https://cors-anywhere.herokuapp.com/

const baseURL =
  "https://api.yelp.com/v3/businesses/search?term=food&radius=16000&open_now=true&limit=50";

let config = {
  method: "get",
  url: baseURL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
  },
};

// axios version
async function yelpSearch(latitude, longitude) {
  config.url = baseURL + "&latitude=" + latitude + "&longitude=" + longitude;
  console.log(config.url);
  axios(config)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .then((response) => {
      return response.data;
    })
    .then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => {
          console.log(JSON.stringify(jsonResponse));
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

// fetch version
// async function yelpSearch(latitude, longitude) {
//   return fetch(`${baseURL}&latitude=${latitude}&longitude=${longitude}`, {
//     headers: {
//       Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsonResponse) => {
//       if (jsonResponse.businesses) {
//         return jsonResponse.businesses.map((business) => {
//           console.log(JSON.stringify(jsonResponse));
//           return {
//             id: business.id,
//             imageSRC: business.image_url,
//             name: business.name,
//             address: business.location.address1,
//             city: business.location.city,
//             state: business.location.state,
//             zipCode: business.location.zip_code,
//             category: business.categories,
//             coordinates: business.coordinates,
//             phone: business.display_phone,
//             url: business.url,
//             price: business.price,
//             distance: getDistanceBetween(
//               latitude,
//               longitude,
//               business.coordinates.latitude,
//               business.coordinates.longitude
//             ),
//           };
//         });
//       }
//     })
//     .catch((error) => console.log(error));
// }

export default yelpSearch;
