import { useState } from "react";
import { fetchPlace } from "../../Utils/util-funcs";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./search.css";

const AutoComplete = ({ onInputSet }) => {
  const [city, setCity] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  const handleCityChange = async (e, value) => {
    setCity(value);
    if (!city) return;
    onInputSet(value);
    const res = await fetchPlace(value, process.env.REACT_APP_MAP_API_KEY);

    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features);
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        onInputChange={handleCityChange}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={autocompleteCities.map((option) => option.place_name)}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label="Search for a City"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
              size="small"
              style={{ height: "80%", margin: 0 }}
            />
          );
        }}
      />
    </div>
  );
};

export default AutoComplete;
