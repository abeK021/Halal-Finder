import {TextField, Button, Grid }from '@material-ui/core';
import {dispatch, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import SearchIcon from '@material-ui/icons/Search';

import { getRestaurantsBackEnd, cityAction } from '../../actions/actions-index';



import './search.css'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// converting from zip or city  to coordinates here and storing to state
const Search = () => {
  const dispatch = useDispatch()
  const classes = useStyles();

  const [input, inputChange] = useState('')
   

  const handleOnChange = (e) => {
    inputChange(e.target.value)
  }

  const onFormClick = () => {
    dispatch(cityAction(input))
  }


return (
  
  <Grid item mt={20}>
   <Grid container justify="center" spacing={0} >
     
          <TextField onChange={handleOnChange} size="small" id="outlined-basic" label="search city-state" variant="outlined" />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<SearchIcon size="small"/>}
            style={{marginLeft: '10px', minWidth: '18px'}}
            onClick={onFormClick}
            />
    
     
  </Grid>
</Grid>


 
  
)
}

export default Search


