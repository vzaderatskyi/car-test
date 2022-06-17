import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link, Navigate } from 'react-router-dom';
import { FaCar, FaGasPump } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';
import { getSingleCarAction } from './actions';
import { selectors } from './reducer';
import Loader from '../../components/Loader';
import './CarPage.scss';

const CarPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const carData = useSelector(selectors.carData);
  const carLoading = useSelector(selectors.carLoading);
  const carError = useSelector(selectors.carError);

  useEffect(() => {
    dispatch(getSingleCarAction.request({ id: params.id }));
  }, [params.id]);

  if(carError) {
    return (
      <Navigate to='/'/>
    );
  }

  return carLoading ? 
  (
    <Loader />
  ) : (
    <Box p={2} minHeight='100vh' paddingTop={5} className='car-page'>
      <Container maxWidth='md'>
        <Link to={{pathname: '/'}} className='car-page--link'>
          <HiOutlineArrowNarrowLeft />
          <Typography>Go back</Typography>
        </Link>
        <Grid container spacing={5} paddingTop={5}>
          <Grid item md={6}>
            <img 
              style={{width: '100%'}}
              src={carData?.thumbnail}
              alt={`${carData?.brand} ${carData?.model}`}
            />
          </Grid>
          <Grid item md={6}>
            <Typography variant='h5' paddingBottom={3}>{carData?.brand} {carData?.model}</Typography>
            <Typography paddingBottom={1}>Body Type <FaCar />: {carData?.bodyType}</Typography>
            <Typography paddingBottom={1}>Fuel Type <FaGasPump />: {carData?.fuelType}</Typography>
            <Typography paddingBottom={1}>Gearbox <TbManualGearbox />: {carData?.gearBox}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CarPage;