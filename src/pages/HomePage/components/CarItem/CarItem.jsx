import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import './CarItem.scss';
import PropTypes from 'prop-types';
import { FaCar, FaGasPump } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';

const CarItem = ({ car }) => {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Link to={`car/${car.id}`}>
        <Card className='car-item'>
          <CardMedia
            component="img"
            className='car-item--image'
            image={car.thumbnail}
            alt={`${car.brand} ${car.model}`}
          />
          <CardContent className='car-item--content'>
            <Typography variant='h6'>{car.brand} {car.model}</Typography>
            <div className='car-item--info-wrapper'>
              <div className='car-item--info'>
                <FaCar />
                <Typography>{car.bodyType}</Typography>
              </div>
              <div className='car-item--info'>
                <FaGasPump />
                <Typography>{car.fuelType}</Typography>
              </div>
              <div className='car-item--info'>
                <TbManualGearbox />
                <Typography>{car.gearBox}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    fuelType: PropTypes.string,
    bodyType: PropTypes.string,
    thumbnail: PropTypes.string,
    gearBox: PropTypes.string,
  }).isRequired,
};

export default CarItem;