import React from 'react';
import { login } from '../../utils/session';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSignUpForm = this.onSignUpForm.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className='session-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(){
    return this.props.formType === 'Login'
  }

  onSignUpForm(){
    return this.props.formType === 'Signup'
  }

  render() {
    let formDisplay;
    if (this.props.formType === 'Login') {
      formDisplay = (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
          {this.renderErrors()}
          <br/>
            <button
              onClick={(e) => {
                e.preventDefault(); 
                this.props.processForm({
                  username: 'Guest',
                  password: '123456',
                  email: 'guest@guest.com'})
              }} className="demo-button"> Login with demo
            </button>
            <br/>
            <div className="or">
              <hr className='or-hr'/>
              <span className='or-login-signup'> OR </span>
              <hr className='or-hr'/>
            </div>
            <br/>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            <br/>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            <br/>
          <input 
            className="session-submit" 
            type="submit" 
            value={this.props.formType}
          />
          </div>
          <br/>    
          Don't have an account? {this.props.navLink}
        </form>
      </div>  
      )} else {
        formDisplay = (
        <div className='signup-form-container'>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="signup-form">
          {this.renderErrors()}
          <br/>
            <button
              onClick={(e) => {
                e.preventDefault(); 
                this.props.login({
                  username: 'Guest',
                  password: '123456',
                  email: 'guest@guest.com'})
              }} className="demo-button"> Log in with demo
            </button>
            <br/>
            <div className="or">
              <hr className='or-hr'/>
              <span className='or-login-signup'> OR </span>
              <hr className='or-hr'/>
              </div>
              <br/>
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="signup-input"
                  />
                <br/>
                  <input type='text' 
                    placeholder="Email"
                    value={this.state.email} 
                    onChange={this.update('email')}
                    className="signup-input"
                  />
              <br/>  
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signup-input"
                />
                <br/>
                  <input type="text"
                    placeholder="First name"
                    value={this.state.firstName}
                    onChange={this.update('firstName')}
                    className="signup-input"
                  />
                <br/>
                  <input type="text"
                    placeholder="Last name"
                    value={this.state.lastName}
                    onChange={this.update('lastName')}
                    className="signup-input"
                  />
              <br/>
              <input 
                className="session-submit" 
                type="submit" 
                value={this.props.formType}
              />
            </div>
              <br/>
              Already have an account? {this.props.navLink}
          </form>
        </div>  
      );
      
    }
    return (
      formDisplay
    )
}
}

export default SessionForm;
