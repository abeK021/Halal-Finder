export const fetchPlace = async (text, key) => {
  const api =
    key ||
    "pk.eyJ1IjoiYWJlazAyMSIsImEiOiJjbDRrbnU3eWUwajhvM2NwMGZqZmFsd3l6In0.SvM8hT4IP81fxV5khr4DDQ";
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${api}&cachebuster=1625641871908&autocomplete=true&country=us&types=place`
    );

    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (err) {
    debugger;
    return { error: "Unable to retrieve places" };
  }
};
