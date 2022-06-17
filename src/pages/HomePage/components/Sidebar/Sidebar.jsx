import React from 'react'
import { Formik } from 'formik';
import { Grid, Typography } from '@mui/material';
import Checkbox from '../../../../components/Checkbox/Checkbox';

const Sidebar = ({ onSubmit }) => {

  const handleSubmit = (values) => {
    onSubmit({
      brand: values.brand,
      fuelType: values.fuelType,
      bodyType: values.bodyType,
      gearBox: values.gearBox,
    })
  }

  return (
    <Grid item md={3}>
      <Typography paddingBottom={2}>Filters</Typography>
      <Formik
        initialValues={{ 
          brand: [],
          fuelType: [],
          bodyType: [],
          gearBox: [],
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Grid container spacing={2}>
            <Grid item>
              <Typography paddingBottom={1}>Select brand:</Typography>              
              <div>
                <Checkbox name="brand" label="Mazda" />
                <Checkbox name="brand" label="Tesla" />
                <Checkbox name="brand" label="Volkswagen" />
                <Checkbox name="brand" label="Chevrolet" />
                <Checkbox name="brand" label="Audi" />
                <Checkbox name="brand" label="Porsche" />
                <Checkbox name="brand" label="BMW" />
                <Checkbox name="brand" label="Volvo" />
              </div>
            </Grid>
            <br />
            <Grid item>              
              <Typography paddingBottom={1}>Select fuel type:</Typography>   
              <div>
                <Checkbox name="fuelType" label="Petrol" />
                <Checkbox name="fuelType" label="Diesel" />
                <Checkbox name="fuelType" label="Electric" />
              </div>              
            </Grid>
            <Grid item>              
              <Typography paddingBottom={1}>Select body type:</Typography>   
              <div>
                <Checkbox name="bodyType" label="Saloon" />
                <Checkbox name="bodyType" label="Coupe" />
                <Checkbox name="bodyType" label="SUV" />
                <Checkbox name="bodyType" label="Hatchback" />
              </div>
            </Grid>
            <Grid item>              
              <Typography paddingBottom={1}>Select gearbox:</Typography>   
              <div>
                <Checkbox name="gearBox" label="Manual" />
                <Checkbox name="gearBox" label="Automatic" />
              </div>
            </Grid>
          </Grid>
        )}
      </Formik>
    </Grid>
  )
}

export default Sidebar