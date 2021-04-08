import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Signup',
    navLink: <Link to="/login">Login</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
