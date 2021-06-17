import { Row, Col, InputGroup, FormControl } from "react-bootstrap"
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


// converting from zip or city  to coordinates here and storing to state
const Search = () => {

  const [input, inputChange] = useState()
   
  useEffect(() => {

  }, [])

  const handleOnChange = (e) => {
    inputChange(e.target.value)
    console.log(input)
  }


return (
  <Row>
  <Col sm>
   <InputGroup className="mb-3 mt-3">
      <FormControl
        placeholder="Search by city or zip-code"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={handleOnChange}
      />
    </InputGroup>
  </Col>

</Row>
)
}

export default Search


