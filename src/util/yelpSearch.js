import getDistanceBetween from './getDistanceBetween';

const apiKey = 'YOUR_API_KEY';

const yelpSearch = function(latitude, longitude) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&latitude=${latitude}&longitude=${longitude}&radius=16000&open_now=true&limit=50`, {
    headers: {
      Authorization: `Bearer ${apiKey}` 
    }
  }).then(response => { 
    return response.json()
  }).then(jsonResponse => {
    if(jsonResponse.businesses) {        
      return jsonResponse.businesses.map(business => {    
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
          rating: business.rating,
          reviewCount: business.review_count,
          coordinates: business.coordinates,
          phone: business.display_phone,
          url: business.url,
          price: business.price,
          distance: getDistanceBetween(latitude, longitude, business.coordinates.latitude, business.coordinates.longitude)
        }
      })
    }
  }).catch(error => console.log(error));  
};

export default yelpSearch;