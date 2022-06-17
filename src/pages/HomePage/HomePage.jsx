import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader';
import { getAllCarsAction } from './actions';
import { selectors } from './reducer';
import { Box, Container, Grid } from '@mui/material';
import CarItem from './components/CarItem';
import { nestedFilter } from '../../global/helpers';
import Sidebar from './components/Sidebar';

const HomePage = () => {
  const dispatch = useDispatch();

  const carsData = useSelector(selectors.carsData);
  const carsLoading = useSelector(selectors.carsLoading);

  const [filters, setFilters] = useState({
    brand: [],
    fuelType: [],
    gearBox: [],
    bodyType: []
  })

  useEffect(() => {
    dispatch(getAllCarsAction.request())
  }, [])

  return carsLoading ? 
  (
    <Loader />
  ) : (
    <Box p={2} minHeight='100vh' paddingTop={5}>
      <Container maxWidth='md'>
        <Grid container spacing={4}>
          <Sidebar onSubmit={setFilters} />
          <Grid item md={9}>
            <Grid container spacing={5}>
              {nestedFilter(carsData ? carsData : [], filters)?.map(i => (
                <CarItem key={i.id} car={i} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomePage