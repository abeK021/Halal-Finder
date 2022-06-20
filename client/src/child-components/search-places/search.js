import { TextField, Button, Grid, MenuItem } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import SearchIcon from "@material-ui/icons/Search";

import InfoTooltip from "../info-tooltip/info-tooltip";

import { states } from "../../Utils/data";

import { getSearchedCityRestaurant } from "../../actions/actions-index";

import "./search.css";
import AutoComplete from "./autocomplete";

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

  const searchError = useSelector((state) => state.restaurants);

  const [autoCompleteCity, setAutocompleteCity] = useState();

  const handleInputChange = (value) => {
    setAutocompleteCity(value);
  };

  const onFormClick = () => {
    dispatch(getSearchedCityRestaurant(`${autoCompleteCity}`));
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
        <Grid xs={1} item spacing={2}>
          <InfoTooltip />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={8} className="search-box">
            <AutoComplete onInputSet={handleInputChange} />
          </Grid>
          <Grid item xs={2} className="btn-primary-container search-box">
            <Button
              variant="contained"
              color="secondary"
              className={`${classes.button} btn`}
              startIcon={<SearchIcon size="small" />}
              onClick={onFormClick}
              style={{ height: "110%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {searchError.error ? (
        <div style={{ color: "red" }}>*{searchError.errorMessage}</div>
      ) : null}
    </Grid>
  );
};

export default Search;
