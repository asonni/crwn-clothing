import React from 'react';
import clsx from 'clsx';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={clsx('form-input-label', {
            shrink: otherProps.value.length
          })}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
