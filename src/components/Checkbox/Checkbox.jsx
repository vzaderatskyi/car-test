import React from "react";
import { Field } from "formik";
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Checkbox = ({ className, name, label }) => (
  <div className={className}>
    <div className="checkbox-field--wrapper">
      <Field name={name}>
        {({ field, form: { setFieldValue, submitForm } }) => (
          <div className="checkbox--wrapper">
            <label className="checkbox--label">
              <input
                type="checkbox"
                name={field.name}
                className="checkbox--input"
                onChange={() => {
                  const set = new Set(field.value);
                  if (set.has(label)) {
                    set.delete(label);
                  } else {
                    set.add(label);
                  }
                  setFieldValue(field.name, Array.from(set));
                  submitForm();
                }}
                checked={field.value.includes(label)}
              />
              <span className="label--checkmark" />
              {label && <Typography className="label--content" component='span'>{label}</Typography>}              
            </label>
          </div>
        )}
      </Field>
    </div>
  </div>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  className: null,
  label: null,
};


export default Checkbox;