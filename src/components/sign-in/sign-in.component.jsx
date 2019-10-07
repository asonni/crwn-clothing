import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import {
  selectIsSigningInWithEmail,
  selectIsSigningInWithGoogle
} from '../../redux/user/user.selectors';

import './sign-in.styles.scss';

const SignIn = ({
  googleSignInStart,
  emailSignInStart,
  isSigningInWithEmail,
  isSigningInWithGoogle
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChangeEmail}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChangePassword}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton
            type="submit"
            disabled={isSigningInWithEmail || isSigningInWithGoogle}
          >
            {isSigningInWithEmail ? 'Signing In...' : 'Sign in'}
          </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
            disabled={isSigningInWithGoogle || isSigningInWithEmail}
          >
            {isSigningInWithGoogle ? 'Signing In...' : 'Sign in with Google'}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isSigningInWithEmail: selectIsSigningInWithEmail,
  isSigningInWithGoogle: selectIsSigningInWithGoogle
});

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
