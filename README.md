# Halal Finder

Halal Finder is a Web App that will display halal restaurants in a city

[View Live Site ](https://halal-finder021.herokuapp.com) * Heroku sleeps the server on inactivity so give it 10s to load.

## Usage

1. On initial load the app will get your approximate IP location and populate based on that location.

2. The input search field will autocomplete city results.

3. The markers on click will show: 
   - Icon link for the restaurant website if available
   - Icon for navigation with will open your native navigation app.
   - Icon link to call the restaurant 
   - An order now button which will redirect to googles order page.

4. A list view where each list item has the same capabilities as the markers in the map view.

5. Info icon at the top of the input field to denote a disclaimer.
    

<img src="https://user-images.githubusercontent.com/74392388/183264666-daea2a1c-8b12-4806-9a06-f36ed8e154a4.png" width="350">

<img src="https://user-images.githubusercontent.com/74392388/183265535-6d359eea-9cef-42f3-ab56-2d48a1b7e256.png" width="350">


## Code excerpt 

```javascript
  client
    .placesNearby({
      params: {
        location: {
          lat,
          lng,
        },
        key: keys.GOOGLE_PLACES_API_KEY,
        radius: 8000,
        keyword: "halal",
      },
    })
    .then((r) => {
      res.json({
        test: "tesing initial load",
        restaurants: r.data.results,
        cityCoords: {
          lat,
          lng,
        },
        cityState: `${locationData.data.city}, ${locationData.data.region}`,
      });
    })
    .catch((e) => {
      console.log("api call err", e);
      res.json({
        test: "error testing",
        error: JSON.stringify(e),
      });
    });
```

## Tech Used

  - React
  - Node
  - Google Maps
  - Google API
  - Mapbox API for autocomplete 
- CSS
- React Tabs
- Git

## License
All rights reserved ©
