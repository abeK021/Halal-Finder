import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '@material-ui/lab/Pagination'
import { useEffect } from 'react'
import { getRestaurantsBackEnd } from '../../actions/actions-index'
import './pagination.css'
import Box from "@material-ui/core/Box";


const Filteration = () => {
  
  const dispatch = useDispatch()

  const [page, setPage] = React.useState(1)

  const handlePageChange =(e,v) => {
    setPage(prevState =>  prevState = v )
  }

  useEffect(() => {
    dispatch(getRestaurantsBackEnd(page))
  }, [page])

  const totalPages = useSelector(state => state.restaurants.totalPages)

  return (
    
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    >
     <Pagination  color="secondary" defaultPage={1} count={totalPages} onChange={handlePageChange}/>
   </Box>
  
    
  )
}

export default Filteration