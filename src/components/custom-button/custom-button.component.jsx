import React from 'react';
import clsx from 'clsx';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={clsx('custom-button', {
      inverted: inverted,
      'google-sign-in': isGoogleSignIn
    })}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
