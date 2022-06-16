import { TextField, Button, Grid, MenuItem } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import SearchIcon from "@material-ui/icons/Search";

import InfoTooltip from "../info-tooltip/info-tooltip";

import { states } from "../../Utils/data";

import { getSearchedCityRestaurant } from "../../actions/actions-index";

import "./search.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

// converting from zip or city  to coordinates here and storing to state
const Search = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleCityChange = (e) => setCity(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);

  const onFormClick = () => {
    setCity("");
    setState("");
    dispatch(getSearchedCityRestaurant(`${city} ${state}`));
  };
  console.log(process.env.REACT_APP_GOOGLE_PACES_API_KEY);
  return (
    <Grid container justifyContent="center">
      <Grid
        container
        item
        mt={50}
        p={5}
        className="search-container"
        justifyContent="center"
      >
        <Grid xs={1} item>
          <InfoTooltip />
        </Grid>
        <Grid
          mb={20}
          container
          direction="row"
          justifyContent="center"
          spacing={3}
        >
          <Grid xs={4} item justify="center" spacing={2}>
            <TextField
              onChange={handleCityChange}
              size="small"
              label="Type City"
              variant="standard"
              id="standard-basic"
              color="secondary"
              value={city}
              helperText=" "
            />
          </Grid>
          <Grid xs={4} item>
            <TextField
              id="standard-select-state"
              select
              label="Select"
              value={state}
              onChange={handleStateChange}
              variant="standard"
              helperText="Select state"
            >
              {states.map((option) => (
                <MenuItem key={option.name} value={option.abbreviation}>
                  {option.abbreviation}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid item xs={10} s={6} md={4} lg={2}>
          <Button
            variant="contained"
            color="secondary"
            className={`${classes.button} btn`}
            startIcon={<SearchIcon size="small" />}
            style={{ marginTop: "10px", minWidth: "80%" }}
            onClick={onFormClick}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
