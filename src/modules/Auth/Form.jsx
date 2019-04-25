import React from 'react';
import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { SignInInitValues, SignUpInitValues, SignUpValidationSchema, SigInValidationSchema } from './validationSchema';
import { withStyles, CircularProgress } from '@material-ui/core';

const styles = ({ color, breakpoints }) => ({
  form: {
    width: '50%',
    borderRadius: 5,
    backgroundColor: color.light,
    padding: '3% 4% 6% 4%',
    [breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  button: {
    height: 64,
    marginTop: 10,
    backgroundColor: '#5a95e6'
  },
  label: {
    color: color.light
  },
  linkContainer: {
    display: 'flex',
    marginTop: 15,
    justifyContent: 'flex-end',
  },
  link: {
    color: color.toxicGreen,
    marginLeft: 2,
  },
  text: {
    color: color.blue,
  },
  spinner: {
    color: color.light,
    marginRight: 5,
    position: 'absolute',
    left: '33%'
  }
});

const SignUp = ({ classes, children, isSignIn, onSubmit, loading }) => {

  return (
    <Formik
      initialValues={isSignIn ? SignInInitValues : SignUpInitValues}
      validationSchema={isSignIn ? SigInValidationSchema : SignUpValidationSchema}
      render={({ values, isValid, setErrors }) => {
        return (
          <Form className={classes.form}>
            {children}
            <div>
              <Button
                classes={{
                  root: classes.button,
                  label: classes.label
                }}
                onClick={() => onSubmit(values, setErrors)}
                fullWidth
                color='primary'
                disabled={!isValid}
                variant='contained'>
                {loading && <CircularProgress size={25} className={classes.spinner} />}
                {isSignIn ? 'Sign In' : 'Sign Up'}
              </Button>
            </div>
            <div className={classes.linkContainer}>
              <span className={classes.text}>
                {isSignIn ? 'Doesent have account ?' : 'Already have account ?'}
              </span>

              <NavLink
                className={classes.link}
                to={isSignIn ? '/auth/sign-up' : '/auth/sign-in'}>
                {isSignIn ? 'Sign Up' : 'Sign In'}
              </NavLink>
            </div>
          </Form>
        );
      }} />
  );
};

export default withStyles(styles)(SignUp);
